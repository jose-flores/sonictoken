var speakeasy = Npm.require('speakeasy');

var key = speakeasy.generate_key({length: 20, google_auth_qr: true});
console.log(key);
