function iframeEncode() {
var iframeURL= document.getElementById('iframeURL').value;
var iframeTITLE= document.getElementById('iframeTITLE').value;

var iframeBORD= document.getElementById('iframeBORD').value;
var iframeSCROLL= document.getElementById('iframeSCROLL').value;
var iframeLARG= document.getElementById('iframeLARG').value;
var iframeHAUT= document.getElementById('iframeHAUT').value;

var iframeLARGu= document.getElementById('iframeLARGu').value;
var iframeHAUTu= document.getElementById('iframeHAUTu').value;

var iframeALT= document.getElementById('iframeALT').value;

document.getElementById('iframeCODE').className = "nohide";
document.getElementById('iframeSHOW').className = "hide";


document.getElementById('iframeCODE').innerHTML = 
"\<iframe title\=\""
+ iframeTITLE
+ "\"\ height\=\"" 
+ iframeHAUT 
+ iframeHAUTu
+ "\" width\=\"" 
+ iframeLARG
+ iframeLARGu 
+ "\"\ frameborder\=\"" 
+ iframeBORD 
+ "\" scrolling\=\""
+ iframeSCROLL
+"\"" 
+ "\ src\=\"" 
+ iframeURL 
+ "\"\>" 
+ iframeALT 
+ "Votre navigateur ne peut afficher ce contenu. Vous pouvez le voir à l'adresse suivante : " 
+ iframeURL 
+ "\<\/iframe\>";


}

function iframeShow() {
var iframeURL= document.getElementById('iframeURL').value;
var iframeTITLE= document.getElementById('iframeTITLE').value;

var iframeBORD= document.getElementById('iframeBORD').value;
var iframeSCROLL= document.getElementById('iframeSCROLL').value;
var iframeLARG= document.getElementById('iframeLARG').value;
var iframeHAUT= document.getElementById('iframeHAUT').value;

var iframeLARGu= document.getElementById('iframeLARGu').value;
var iframeHAUTu= document.getElementById('iframeHAUTu').value;

var iframeALT= document.getElementById('iframeALT').value;

document.getElementById('iframeCODE').className = "hide";
document.getElementById('iframeSHOW').className = "nohide";

document.getElementById('iframeSHOW').innerHTML = 
"\<iframe title\=\""
+ iframeTITLE
+ "\"\ height\=\"" 
+ iframeHAUT 
+ iframeHAUTu
+ "\" width\=\"" 
+ iframeLARG
+ iframeLARGu 
+ "\"\ frameborder\=\"" 
+ iframeBORD 
+ "\" scrolling\=\""
+ iframeSCROLL
+"\"" 
+ "\ src\=\"" 
+ iframeURL 
+ "\"\>" 
+ iframeALT 
+ "Votre navigateur ne peut afficher ce contenu. Vous pouvez le voir à l'adresse suivante : " 
+ iframeURL 
+ "\<\/iframe\>";


}