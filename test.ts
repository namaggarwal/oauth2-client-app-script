/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import TODOOAuth2Client from './todoOAuth2';

function tryIt() {
  const userProperties = PropertiesService.getUserProperties();

  const todo = new TODOOAuth2Client(userProperties, '3681c137-1a75-48cb-8628-fe61ed13dda3', '');
  return todo.authorize('http://localhost', ['Tasks.Read', 'offline_access'], 'code');
}


function tryAccessToken() {
  const userProperties = PropertiesService.getUserProperties();
  const todo = new TODOOAuth2Client(userProperties, '3681c137-1a75-48cb-8628-fe61ed13dda3', '');
  // eslint-disable-next-line no-console
  console.log(todo.getTokenFromAuthorizationCode(['Tasks.Read', 'offline_access'], 'http://localhost', 'M6343fa4d-a72b-5bc3-9429-95d299fb99ff', '6ncgnkhy6w9'));
}

function tryAccessTokenFromRefreshToken() {
  const userProperties = PropertiesService.getUserProperties();
  const todo = new TODOOAuth2Client(userProperties, '3681c137-1a75-48cb-8628-fe61ed13dda3', userProperties.getProperty('client_secret'));
  // eslint-disable-next-line no-console
  console.log(todo.getTokenFromRefreshToken(['Tasks.Read', 'offline_access'], 'http://localhost', 'M6343fa4d-a72b-5bc3-9429-95d299fb99ff', userProperties.getProperty('refresh_token')));
}

function storeClientSecret() {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('client_secret', '');
}

function storeRefreshToken() {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('refresh_token', '');
}

function doGet(e: GoogleAppsScript.Events.DoGet) {
  return tryIt();
}
