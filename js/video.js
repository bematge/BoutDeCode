function VideoEncode() {
var videoURL= document.getElementById('videoURL').value;
var videoEXT= document.getElementById('videoEXT').value;
var videoALT= document.getElementById('videoALT').value;
var videoHAUT= document.getElementById('videoHAUT').value;
var videoLARG= document.getElementById('videoLARG').value;
var videoTITLE= document.getElementById('videoTITLE').value;

document.getElementById('videoCODE').className = "nohide";
document.getElementById('videoSHOW').className = "hide";


document.getElementById('videoCODE').innerHTML = 
"\<video height\=\"" 
+ videoHAUT 
+ "px\" width\=\"" 
+ videoLARG 
+ "px\"\ controls\=\"\"" 
+ "\ type\=\"video\/" 
+ videoEXT 
+"\"" 
+ "\ src\=\"" 
+ videoURL
+ "\""
+ "\>" 
+ videoALT 
+ "Votre navigateur ne prend pas en charge la lecture de cette vidéo. Vous pouvez la télécharger en suivant ce lien : " 
+ videoURL
+ "\<\/video\>";


}

function VideoShow() {
var videoURL= document.getElementById('videoURL').value;
var videoEXT= document.getElementById('videoEXT').value;
var videoALT= document.getElementById('videoALT').value;
var videoHAUT= document.getElementById('videoHAUT').value;
var videoLARG= document.getElementById('videoLARG').value;

document.getElementById('videoCODE').className = "hide";
document.getElementById('videoSHOW').className = "nohide";

document.getElementById('videoSHOW').style.width = videoLARG;
document.getElementById('videoSHOW').style.height = videoHAUT;



document.getElementById('videoSHOW').innerHTML = 
"\<video height\=\"" 
+ videoHAUT 
+ "px\" width\=\"" 
+ videoLARG 
+ "px\"\ controls\=\"\"" 
+ "\ type\=\"video\/" 
+ videoEXT 
+"\"" 
+ "\ src\=\"" 
+ videoURL 
+ "\"\>" 
+ videoALT 
+ "Votre navigateur ne prend pas en charge la lecture de cette vidéo. Vous pouvez la télécharger en suivant ce lien : " 
+ videoURL 
+ "\<\/video\>";


}