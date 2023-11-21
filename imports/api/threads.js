import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

export const ThreadsCollection = new Mongo.Collection('threads');

async function insertThread(text){
    check(text, String);
    
    await ThreadsCollection.insertAsync({
        text,
        date: new Date()
    });
}

Meteor.methods({insertThread});