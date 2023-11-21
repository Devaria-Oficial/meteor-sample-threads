import { Meteor } from 'meteor/meteor';
import { ThreadsCollection } from '../imports/api/threads';

Meteor.startup(async () => {
  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("threads", function () {
    return ThreadsCollection.find();
  });
});
