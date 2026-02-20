function showSlide(id) {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function saveProfile() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let dob = document.getElementById("dob").value;

  document.getElementById("profileDisplay").innerHTML =
    `<h3>Profile Saved!</h3>
     Name: ${name} <br>
     Age: ${age} <br>
     DOB: ${dob}`;
}

function calculateBMI() {
  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;
  let bmi = (weight / (height * height)).toFixed(2);

  document.getElementById("bmiResult").innerText =
    "Your BMI is: " + bmi;
}
