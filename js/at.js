$(document).ready(function() {	
	// Spam block email
	var user = 'andrew';
	var domain = 'andrewthomas';
	var extension = 'org.uk';
	
	$('span.email').html('<a href="mailto:' + user + '@' + domain + '.' + extension + '">' + user + '@' + domain + '.' + extension + '</a>');
});