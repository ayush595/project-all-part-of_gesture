prediction1= "";
prediction2= "";
Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 95
});
webcamattacher= document.getElementById("camera");
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML="<img id='crazyman' src='"+data_uri+"'/>";
    });
}
model_attach= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NAaJKCPyT/model.json", modelLoaded);
function modelLoaded() {
    console.log("teachable machine model is loaded sir :-)")
}
function speak() {
    var apistored= window.speechSynthesis;
    data1= "The first gesture is " + prediction1;
    data2= "The second gesture is " + prediction2;
    uttergesture= new SpeechSynthesisUtterance(data1 + data2);
    apistored.speak(uttergesture);
        
    }
function check() {
    anything= document.getElementById("crazyman");
    model_attach.classify(anything,resultisgot);
    
        
    }
function resultisgot(error, results) {
    if (error) {
        console.log(error);
    
    } else {
    console.log(results);     
    document.getElementById("emotion1").innerHTML= results[0].label;
    document.getElementById("emotion2").innerHTML= results[1].label;
    prediction1= results[0].label;
    prediction2= results[1].label;
    speak();
    if (results[0].label == "amazing") {
        document.getElementById("emoji1").innerHTML= "&#128076;";
        
    }
if (results[0].label == "best")  {
    document.getElementById("emoji1").innerHTML= "&#128077;";

}
if (results[0].label == "rock") {
    document.getElementById("emoji1").innerHTML= "&#129304;";
}
if (results[0].label == "victory") {
    document.getElementById("emoji1").innerHTML= "&#9996;";
}
if (results[1].label == "amazing") {
    document.getElementById("emoji2").innerHTML= "&#128076;";
}
if (results[1].label == "best") {
    document.getElementById("emoji2").innerHTML= "&#128077;";
}
if (results[1].label == "rock") {
    document.getElementById("emoji2").innerHTML= "&#129304;";
}
if (results[0].label == "victory") {
    document.getElementById("emoji1").innerHTML= "&#9996;";
}
    }
}