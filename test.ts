/* eslint-disable no-unused-vars */
import TODOOAuth2Client from './todoOAuth2';

function tryIt() {
  const userProperties = PropertiesService.getUserProperties();

  const todo = new TODOOAuth2Client(userProperties, 'ssdsd');
  return todo.authorize('https://www.google.com');
}


function doGet(e: GoogleAppsScript.Events.DoGet) {
  return tryIt();
}
