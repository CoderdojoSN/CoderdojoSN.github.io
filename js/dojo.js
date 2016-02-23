

$(document).ready(function(){
  
var email = 'sallinsnaas.ie@coderdojo.com';
var subject = 'CoderDojo';

$('#m').click(function() {
 
 
 var mailto_link = 'mailto:' + email + '?subject=' + subject;

    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();

   

});

});

