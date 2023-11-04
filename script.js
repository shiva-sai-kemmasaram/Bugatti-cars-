src="https://smtpjs.com/v3/smtp.js"
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
// function handleSubmit(){
//   let name = document.getElementById(" name").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;
//   let formbtn = document.getElementById("form-btn").value;

//   let body ='name: ' +name + ' <br/> email: ' +email +'<br/> message' + message ;
  

//   email.send({
//     Host : "shivarockingshiva@gmail.com",
//     Username : "shivakingkadhar@gmail.com",
//     Password : "0CCE71160F501D8569A8D3957C19D3294F6F",
//     To : "shivarockingshiva@gmail.com",
//     From : "",
//  formbtn:formbtn,
//  Body:body,
// }).then(
//   message => alert("you want to send")
// );
// } 
function sendFormEmail(e) {
  var name = e.values[1];
  var email = e.values[2];
  var message = e.values[3];
  var subject = "New Form Submission";
  var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  MailApp.sendEmail("shivarockingshiva@gmail.com", subject, body);
}


