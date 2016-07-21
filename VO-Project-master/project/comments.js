
function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}

var mygetrequest=new ajaxRequest()
if (mygetrequest.overrideMimeType)
 mygetrequest.overrideMimeType('text/xml')
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
   var xmldata=mygetrequest.responseXML //retrieve result as an XML object
   var rssentries=xmldata.getElementsByTagName("item")
   var output='<ul>'
   for (var i=0; i<rssentries.length; i++){
    output+='<li>'
    output+='<a href="'+rssentries[i].getElementsByTagName('link')[0].firstChild.nodeValue+'">'
    output+=rssentries[i].getElementsByTagName('description')[0].firstChild.nodeValue+'</a>'
    output+='</li>'
   }
   output+='</ul>'
   document.getElementById("comment-section").innerHTML=output
  }
  else{
   alert("An error has occured making the request")
  }
 }
}

mygetrequest.open("GET", "comments.xml", true)
mygetrequest.send(null)