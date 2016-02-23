
$(document).ready(function(){
var email = 'mach1982@gmail.com';
var subject = 'CoderDojo';
$('mail_butt').click(function() {
    alert("test");

    var mailto_link = 'mailto:' + email + '?subject=' + subject;

    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();

});

});
