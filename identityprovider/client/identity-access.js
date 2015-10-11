var ALPHABET = "abcdefABCDEF0123456789";
Meteor.subscribe('totpkey');
ssocket = new SonicSocket({alphabet: ALPHABET,freqMin: 440, freqMax: 1760, charDuration: 0.6});


  Template.sendToken.viewmodel({
    sendToken: function() {
      Meteor.call('codeTOTP', Session.get('token'), function (error, result) {
        if (error)
           console.log(error)
        if (result){
          Session.set("code", result);
          ssocket.send(result);
        }
      })
    },
    createToken: function() {
      console.log('calling createToken');
      Meteor.call('generateKey', function(error, result) {
        console.log(result);
        if (error)
            console.log(error);
        if (result.hex){
          Session.set('token', result.hex);
          ssocket.send(result.hex);
        }

      });
    },
    message: function() {
        return Session.get('token');
    },
    code: function() {
        return Session.get('code');
    }
  });


