/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import TODOOAuth2Client from './todoOAuth2';

function tryIt() {
  const userProperties = PropertiesService.getUserProperties();

  const todo = new TODOOAuth2Client(userProperties, '3681c137-1a75-48cb-8628-fe61ed13dda3');
  return todo.authorize('http://localhost', ['Tasks.Read'], 'code');
}


function doGet(e: GoogleAppsScript.Events.DoGet) {
  return tryIt();
}
