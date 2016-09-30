var mybutton = document.getElementById("loadbutton");
mybutton.onclick = LoadAjax;

function LoadAjax() {
//for(var i=0; i<100; i++){
if (XMLHttpRequest) {    
var req = new XMLHttpRequest(); }
else {
    req = new ActiveXObject("Microsoft.XMLHTTP");
}
    req.open('GET','data.json');
    //req.send();
    //console.log(req);
    req.onreadystatechange =function(){
    if(req.status===200 && req.readyState===4) {
        //console.log(req);
        //document.writeln(req.responseText);
        //var modify = document.getElementById('update');
        //var modify = document.getElementsByTagName("li");
        //modify[2].innerHTML = req.responseText;
        /*for(var i=0;i<modify.length;i++){
          //  modify[i].innerHTML = req.responseText;
        }  */
        //console.log(req.responseXML.getElementsByTagName("name")[1].childNodes[0].nodeValue)
        
        var items = JSON.parse(req.responseText);
        console.log(items);
        var output ='<ul>';
        for (var key in items){
            output += '<li>' + items[key].color +'</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML=output;
    }
    }
    req.send();
//}    
}

$.getJSON('data.json',function(data){
   console.log(data); 
    var output ='<ul>';
        $.each(data,function(key,value){
           output += '<li>' + value.value + '</li>'; 
        });
        output += '</ul>';
        $('#update').append(output);
});
