Webcam.set({
    width:450,
    height:350,
    image_format: 'png',
    jpg_quality:100
})

Camera = document.getElementById("camera");

Webcam.attach ( '#camera' );

function take_my_pic()
{
    Webcam.snap(function(data_uri) 
    {document.getElementById("result").innerHTML = '<img id="imerger" src="'+data_uri+'">'});
}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F6HG-Vvnn/model.json',modelLoaded)

