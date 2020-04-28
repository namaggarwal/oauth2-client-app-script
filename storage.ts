
class PropertyStorage {
  readonly properties: GoogleAppsScript.Properties.Properties

  constructor(properties: GoogleAppsScript.Properties.Properties) {
    this.properties = properties;
  }

  set(key, value) {
    return this.properties.setProperty(key, value);
  }

  get(key) {
    return this.properties.getProperty(key);
  }
}

export default PropertyStorage;