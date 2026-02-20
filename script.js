// Start Button Function
function startApp() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
}

// Save Steps
function saveSteps() {
    let steps = document.getElementById("steps").value;
    if (steps <= 0) {
        alert("Enter valid steps");
        return;
    }
    document.getElementById("stepsResult").innerHTML =
        "You walked " + steps + " steps today 💪";
}

// Save Water
function saveWater() {
    let water = document.getElementById("water").value;
    if (water <= 0) {
        alert("Enter valid value");
        return;
    }
    document.getElementById("waterResult").innerHTML =
        "You drank " + water + " glasses 💧";
}

// BMI Calculator
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;

    if (weight <= 0 || height <= 0) {
        alert("Enter valid values");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("bmiResult").innerHTML =
        "Your BMI is " + bmi;
}
