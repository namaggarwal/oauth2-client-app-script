
class PropertyStorage {
  readonly properties: GoogleAppsScript.Properties.Properties

  constructor(properties: GoogleAppsScript.Properties.Properties) {
    this.properties = properties;
  }

  set(key: string, value: string) {
    return this.properties.setProperty(key, value);
  }

  get(key: string) {
    return this.properties.getProperty(key);
  }
}

export default PropertyStorage;
