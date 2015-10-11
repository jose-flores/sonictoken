if (Meteor.isClient) {
  // counter starts at 0
  MessageReceived = new Mongo.Collection(null);
  Session.setDefault('counter', 0);
  // On some other machine:
  sserver = new SonicServer({freqMin: 440, freqMax: 1760});
  sserver.on('message', function(message) {
    // message is '31415'. Do something with it.
    console.log(message);
    MessageReceived.insert({message: message});
  });
  sserver.start();
  
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    messages: function() {
      return MessageReceived.find();
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
