Meteor.publish('totpkey', function() {
	return TOTPKey.find();
});