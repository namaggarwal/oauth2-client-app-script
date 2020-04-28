import OAuth2Client from './oauth2';

class TODOOAuth2Client extends OAuth2Client {
  static readonly WELL_KNOWN_URLS: Map<string, string> = new Map(<[string, string][]>([
    ['authorization_endpoint', 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'],
  ]))

  constructor(storage: GoogleAppsScript.Properties.Properties, clientID: string) {
    super(storage, clientID, TODOOAuth2Client.WELL_KNOWN_URLS);
  }
}

export default TODOOAuth2Client;
