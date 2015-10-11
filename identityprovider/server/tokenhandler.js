var speakeasy = Npm.require('speakeasy');

var key = speakeasy.generate_key({length: 20, google_auth_qr: true});
var tcode = speakeasy.totp({key: key.base32, encoding:'base32'});
console.log(tcode);
