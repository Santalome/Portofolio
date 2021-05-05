
//Contact form

function sendMail(){
    var tempParams ={
        from_name: document.getElementById("fname").value,
        message: document.getElementById("subject").value
    };

    emailjs.send('service_hqx5afa','template_cek8viq', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}