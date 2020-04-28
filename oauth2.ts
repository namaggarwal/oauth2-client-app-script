
class OAuth2Client {
  static readonly OAUTH2_STATE: string = 'oauth2_state'

  readonly storage: GoogleAppsScript.Properties.Properties

  readonly wellKnownUrls: Map<string, string>

  readonly clientID: string

  constructor(
    storage: GoogleAppsScript.Properties.Properties,
    clientID: string,
    wellKnownUrls: Map<string, string>,
  ) {
    this.wellKnownUrls = wellKnownUrls;
    this.storage = storage;
    this.clientID = clientID;
  }

  authorize(
    redirectURI: string,
    scopes: string[],
    responseType: string,
  ): GoogleAppsScript.HTML.HtmlOutput {
    const state = Math.random().toString(36).substring(2);
    this.storage.setProperty(OAuth2Client.OAUTH2_STATE, state);
    const authUrl = this.wellKnownUrls.get('authorization_endpoint');
    return OAuth2Client.redirect(`${authUrl}?client_id=${this.clientID}&state=${state}&redirect_uri=${redirectURI}&scope=${scopes.join(' ')}&response_type=${responseType}`);
  }

  getToken(code: string, state: string, scopes: string[], grantType: string, redirectURI: string) {
    const storedState = this.storage.getProperty(OAuth2Client.OAUTH2_STATE);
    if (state !== storedState) {
      throw new Error('invalid state');
    }
    const tokenUri: string = this.wellKnownUrls.get('token_endpoint');
    const data = `client_id=${this.clientID}&scope=${scopes.join(' ')}&code=${code}&redirect_uri=${redirectURI}&grant_type=${grantType}`;
    // eslint-disable-next-line camelcase
    const method: GoogleAppsScript.URL_Fetch.HttpMethod = 'post';
    const options = {
      method,
      contentType: 'application/x-www-form-urlencoded',
      payload: data,
    };
    // eslint-disable-next-line no-undef
    const response = UrlFetchApp.fetch(tokenUri, options);
    return JSON.parse(response.getContentText());
  }

  static redirect(url: string): GoogleAppsScript.HTML.HtmlOutput {
    // eslint-disable-next-line no-undef
    return HtmlService.createHtmlOutput(
      `<script>window.top.location.href="${url}";</script>`,
    );
  }
}

export default OAuth2Client;
