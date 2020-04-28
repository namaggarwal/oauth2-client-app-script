import OAuth2Client from './oauth2';

class TODOOAuth2Client extends OAuth2Client {
  static readonly WELL_KNOWN_URLS: Map<String, String> = new Map(<[String, String][]>([
    [String('authorization_endpoint'), String('https://www.google.com/authorize')],
  ]))

  constructor(storage: GoogleAppsScript.Properties.Properties, clientID: String) {
    super(storage, clientID, TODOOAuth2Client.WELL_KNOWN_URLS);
  }
}

export default TODOOAuth2Client;
