var speakeasy = Npm.require('speakeasy');
TOTPKey = new Mongo.Collection('totpkeys');

Meteor.methods({
	generateKey: function() {
		console.log('Generating...');
		var key = speakeasy.generate_key({length: 20, google_auth_qr: true});
		return key;
	},
	codeTOTP: function(key) {
		return speakeasy.totp({key: key, encoding:'hex'});
	}
});