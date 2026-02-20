// Load saved data on page load
window.onload = function() {
    loadData("steps", "stepsResult", "You walked ");
    loadData("water", "waterResult", "You drank ");
    loadData("medicine", "medicineResult", "Reminder set for ");
};

// Save Steps
function saveSteps() {
    let steps = document.getElementById("steps").value;
    if (steps <= 0) {
        alert("Enter valid steps");
        return;
    }
    localStorage.setItem("steps", steps);
    document.getElementById("stepsResult").innerHTML =
        "You walked " + steps + " steps today 💪";
}

// Save Water
function saveWater() {
    let water = document.getElementById("water").value;
    if (water <= 0) {
        alert("Enter valid water intake");
        return;
    }
    localStorage.setItem("water", water);
    document.getElementById("waterResult").innerHTML =
        "You drank " + water + " glasses 💧 Stay hydrated!";
}

// Save Medicine
function saveMedicine() {
    let med = document.getElementById("medicine").value;
    if (med === "") {
        alert("Enter medicine name");
        return;
    }
    localStorage.setItem("medicine", med);
    document.getElementById("medicineResult").innerHTML =
        "Reminder set for " + med + " 💊";
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
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else category = "Overweight";

    document.getElementById("bmiResult").innerHTML =
        "BMI: " + bmi + " (" + category + ")";
}

// Calorie Calculator
function calculateCalories() {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("calWeight").value;
    let height = document.getElementById("calHeight").value;

    if (age <= 0 || weight <= 0 || height <= 0) {
        alert("Enter valid values");
        return;
    }

    let calories = Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5);

    document.getElementById("calorieResult").innerHTML =
        "Estimated Daily Calories: " + calories + " kcal 🔥";
}

// Load from localStorage
function loadData(key, elementId, text) {
    let data = localStorage.getItem(key);
    if (data) {
        document.getElementById(elementId).innerHTML = text + data;
    }
}
