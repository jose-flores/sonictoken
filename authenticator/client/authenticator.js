  var ALPHABET = "abcdefABCDEF0123456789";
  MessageReceived = new Mongo.Collection(null);
  Session.setDefault('counter', 0);
  // On some other machine:
  sserver = new SonicServer({alphabet: ALPHABET, freqMin: 440, freqMax: 1760});
  sserver.on('message', function(message) {
    // message is '31415'. Do something with it.
    console.log(message);
    Session.set('counter', Session.get('counter') + 1);
    MessageReceived.insert({message: message});
  });
  
  sserver.start();
  Template.showToken.onCreated(function() {
    this.subscribe("messages");
  });
  
  Template.showToken.viewmodel('showToken',{
    messages: function() {
      return MessageReceived.find();
    }
  }, 'messages'
  );
  
  Template.message.viewmodel(function(data) {
    return {
      message: function() {
        return "Token Received: " + data.message;
      }
     };
  });

