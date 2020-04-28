import TODOOAuth2Client from './todoOAuth2';

// eslint-disable-next-line no-unused-vars
function tryIt() {
  // eslint-disable-next-line no-undef
  const userProperties = PropertiesService.getUserProperties();

  const todo = new TODOOAuth2Client(userProperties, 'ssdsd');
  return todo.authorize('https://www.google.com');
}
