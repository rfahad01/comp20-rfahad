// Your JavaScript goes here...
function parse(){
	var raw = new XMLHttpRequest();
	raw.open('Get','data.json','true');
	text = JSON.parse("raw");
	document.getElementById("messages").innerHTML =
	text[1].content + " " + text[1].username + text[2].content+ text[2].username;
}