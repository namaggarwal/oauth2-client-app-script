import PropertyStorage from './storage';

function redirect(url) {
  // eslint-disable-next-line no-undef
  return HtmlService.createHtmlOutput(
    `<script>window.top.location.href="${url}";</script>`,
  );
}

class OAuth2Client {
  storage: PropertyStorage

  constructor(urls, storage:PropertyStorage) {
    this.urls = urls;
    this.storage = storage;
  }

  authorize() {
    const state = Math.random().toString(36).substring(2);
    this.storage.set('state', state);
    const authUrl = '';
    return redirect(authUrl);
  }

  getToken(code: string, state: string) {
    const storedState = this.storage.get('state');
    if (state !== storedState) {
      // eslint-disable-next-line no-undef
      throw new Exception('Invalid State');
    }
  }
}

export default OAuth2Client;
