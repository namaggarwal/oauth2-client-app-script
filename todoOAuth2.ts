import OAuth2Client from './oauth2';

class TODOOAuth2Client extends OAuth2Client {
  static readonly WELL_KNOWN_URLS: Map<string, string> = new Map(<[string, string][]>([
    ['authorization_endpoint', 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'],
    ['token_endpoint', 'https://login.microsoftonline.com/common/oauth2/v2.0/token'],
  ]))

  constructor(
    storage: GoogleAppsScript.Properties.Properties,
    clientID: string,
    clientSecret: string,
  ) {
    super(storage, clientID, clientSecret, TODOOAuth2Client.WELL_KNOWN_URLS);
  }

  getToken(
    scopes: string[],
    redirectURI: string,
    state: string,
    code: string,
  ) {
    return super.getTokenFromAuthorizationCode(scopes, redirectURI, state, code);
  }

  getTokenFromRefreshToken(
    scopes: string[],
    redirectURI: string,
    state: string,
    refreshToken: string,
  ) {
    return super.getTokenFromRefreshToken(scopes, redirectURI, state, refreshToken);
  }
}

export default TODOOAuth2Client;
