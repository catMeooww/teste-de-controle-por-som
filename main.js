//https://teachablemachine.withgoogle.com/models/7gPoBon9J/model.json
var img1 = document.getElementById("1");
var img2 = document.getElementById("2");
var img3 = document.getElementById("3");
var img4 = document.getElementById("4");
function Classification(){
   navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7gPoBon9J/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
 if (error){
    console.error(error);
 }else{
    console.log(results);
   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*255);
   var b = Math.floor(Math.random()*255);
   document.getElementById("ResultLabel").innerHTML = "Posso ouvir - " + results[0].label;
   document.getElementById("ResultConfidence").innerHTML = "Precisão - " + (results[0].confidence * 100).toFixed(2) + "%";
   //document.getElementsByClassName("ListenData").style.color = "rgb("+r+","+g+","+b+")";
   document.getElementById("ResultLabel").style.color = "rgb("+r+","+g+","+b+")";
   document.getElementById("ResultConfidence").style.color = "rgb("+r+","+g+","+b+")";
   if (results[0].label == "Palmas"){
     img1.src = "aliens-01.gif";
     img2.src = "aliens-02.png";
     img3.src = "aliens-03.png";
     img4.src = "aliens-04.png";
   }else if(results[0].label == "Bolinhas"){
      img1.src = "aliens-01.png";
      img2.src = "aliens-02.gif";
      img3.src = "aliens-03.png";
      img4.src = "aliens-04.png";
   }else if(results[0].label == "Estralos"){
      img1.src = "aliens-01.png";
      img2.src = "aliens-02.png";
      img3.src = "aliens-03.gif";
      img4.src = "aliens-04.png";
   }else{
      img1.src = "aliens-01.png";
      img2.src = "aliens-02.png";
      img3.src = "aliens-03.png";
      img4.src = "aliens-04.gif";
   }
 }
}