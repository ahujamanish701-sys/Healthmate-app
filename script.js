let chart;

// Navigation Functions
function showLogin() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
}

function login() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Enter valid details");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("profileScreen").classList.remove("hidden");
    document.getElementById("welcomeText").innerHTML = "Welcome, " + name + " 👋";
}

function showForm() {
    document.getElementById("profileScreen").classList.add("hidden");
    document.getElementById("formScreen").classList.remove("hidden");
}

// Generate Report
function generateReport() {

    let steps = parseInt(document.getElementById("steps").value);
    let height = parseInt(document.getElementById("height").value) / 100;
    let weight = parseInt(document.getElementById("weight").value);
    let water = parseInt(document.getElementById("water").value);
    let calories = parseInt(document.getElementById("calories").value);
    let workout = parseInt(document.getElementById("workout").value);
    let sleep = parseInt(document.getElementById("sleep").value);

    if (!steps || !height || !weight || !water || !calories || !workout || !sleep) {
        alert("Fill all fields properly");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);

    // Show Report Screen
    document.getElementById("formScreen").classList.add("hidden");
    document.getElementById("reportScreen").classList.remove("hidden");

    // Chart
    if (chart) chart.destroy();

    chart = new Chart(document.getElementById("healthChart"), {
        type: 'bar',
        data: {
            labels: ["Steps", "Water", "Calories", "Workout", "Sleep"],
            datasets: [{
                label: "Your Health Data",
                data: [steps, water, calories, workout, sleep]
            }]
        }
    });

    // Written Report
    document.getElementById("writtenReport").innerHTML =
        "Your BMI is " + bmi +
        ". You walked " + steps +
        " steps, drank " + water +
        " glasses of water, burned " + calories +
        " calories, exercised for " + workout +
        " minutes, and slept " + sleep + " hours.";

    // Roadmap Recommendation
    let recommendation = "";

    if (bmi < 18.5) recommendation += "Increase nutritious calorie intake. ";
    else if (bmi > 25) recommendation += "Focus on fat loss and cardio. ";
    else recommendation += "Maintain your current fitness level. ";

    if (sleep < 7) recommendation += "Improve sleep schedule to 7-8 hours. ";
    if (water < 8) recommendation += "Increase daily water intake. ";
    if (steps < 8000) recommendation += "Aim for 8000-10000 steps daily. ";

    document.getElementById("roadmap").innerHTML = recommendation;
}
