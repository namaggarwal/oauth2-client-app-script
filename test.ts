/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import TODOOAuth2Client from './todoOAuth2';

function tryIt() {
  const userProperties = PropertiesService.getUserProperties();

  const todo = new TODOOAuth2Client(userProperties, '41a1b736-4361-4bce-b312-2a667f790792');
  return todo.authorize('https://localhost', ['Tasks.Read']);
}


function doGet(e: GoogleAppsScript.Events.DoGet) {
  return tryIt();
}
