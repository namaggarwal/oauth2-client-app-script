import PropertyStorage from './storage';

function redirect(url: String): GoogleAppsScript.HTML.HtmlOutput {
  // eslint-disable-next-line no-undef
  return HtmlService.createHtmlOutput(
    `<script>window.top.location.href="${url}";</script>`,
  );
}

class OAuth2Client {
  storage: PropertyStorage
  wellKnownUrls: Map<String, String>
  constructor(wellKnownUrls: Map<String, String>, storage:PropertyStorage) {
    this.wellKnownUrls = wellKnownUrls;
    this.storage = storage;
  }

  authorize(): GoogleAppsScript.HTML.HtmlOutput {
    const state = Math.random().toString(36).substring(2);
    this.storage.set('state', state);
    const authUrl = '';
    return redirect(authUrl);
  }

  getToken(code: String, state: String) {
    const storedState = this.storage.get('state');
    if (state !== storedState) {
      // eslint-disable-next-line no-undef
      throw new Error('invalid state');
    }
  }
}

export default OAuth2Client;
