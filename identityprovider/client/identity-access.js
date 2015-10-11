  var MESSAGE = '314159';

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.sendToken.viewmodel({
    sendToken: function() {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      ssocket = new SonicSocket({freqMin: 440, freqMax: 1760});
      ssocket.send(MESSAGE);
    }
  });


