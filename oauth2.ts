import PropertyStorage from './storage';


class OAuth2Client {
  static readonly OAUTH2_STATE: string = "oauth2_state"
  readonly storage: PropertyStorage
  readonly wellKnownUrls: Map<String, String>
  readonly clientID: String

  constructor(storage:PropertyStorage,clientID: String,wellKnownUrls: Map<String, String>) {
    this.wellKnownUrls = wellKnownUrls;
    this.storage = storage;
    this.clientID = clientID;
  }

  authorize(redirectURI: String): GoogleAppsScript.HTML.HtmlOutput {
    const state = Math.random().toString(36).substring(2);
    this.storage.set(OAuth2Client.OAUTH2_STATE, state);
    const authUrl = this.wellKnownUrls.get('authorization_endpoint');
    return OAuth2Client.redirect(`${authUrl}?client_id=${this.clientID}&state=${state}&redirect_uri=${redirectURI}`);
  }

  getToken(code: String, state: String) {
    const storedState = this.storage.get(OAuth2Client.OAUTH2_STATE);
    if (state !== storedState) {
      // eslint-disable-next-line no-undef
      throw new Error('invalid state');
    }
  }

  static redirect(url: String): GoogleAppsScript.HTML.HtmlOutput {
    // eslint-disable-next-line no-undef
    return HtmlService.createHtmlOutput(
      `<script>window.top.location.href="${url}";</script>`,
    );
  }
}

export default OAuth2Client;
