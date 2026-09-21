const form = document.querySelector("form");
const outputSection = document.getElementById("outputSection");

// Input fields
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const visitInput = document.getElementById("visitInput");
const workoutInput = document.getElementById("workoutInput");
const equipmentInput = document.getElementById("equipmentInput");
const cleanlinessInput = document.getElementById("cleanlinessInput");
const staffInput = document.getElementById("staffInput");
const environmentInput = document.getElementById("environmentInput");
const ratingInput = document.getElementById("ratingInput");
const likedInput = document.getElementById("likedInput");
const improveInput = document.getElementById("improveInput");
const additionalInput = document.getElementById("additionalInput");
const recommendInput = document.getElementById("recommendInput");

// Output fields
const outputName = document.getElementById("outputName");
const outputEmail = document.getElementById("outputEmail");
const outputAge = document.getElementById("outputAge");
const outputVisit = document.getElementById("outputVisit");
const outputWorkout = document.getElementById("outputWorkout");
const outputEquipment = document.getElementById("outputEquipment");
const outputCleanliness = document.getElementById("outputCleanliness");
const outputStaff = document.getElementById("outputStaff");
const outputEnvironment = document.getElementById("outputEnvironment");
const outputRating = document.getElementById("outputRating");
const outputLiked = document.getElementById("outputLiked");
const outputImprove = document.getElementById("outputImprove");
const outputAdditional = document.getElementById("outputAdditional");
const outputRecommend = document.getElementById("outputRecommend");

// Hide output section at the beginning
outputSection.style.display = "none";

// Submit form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validation
    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        ageInput.value.trim() === "" ||
        visitInput.value === "" ||
        workoutInput.value === "" ||
        equipmentInput.value === "" ||
        cleanlinessInput.value === "" ||
        staffInput.value === "" ||
        environmentInput.value === "" ||
        ratingInput.value === "" ||
        likedInput.value.trim() === "" ||
        improveInput.value.trim() === "" ||
        recommendInput.value === ""
    ) {
        alert("Please complete all required fields.");
        return;
    }

    // Display input values in the output section
    outputName.textContent = nameInput.value;
    outputEmail.textContent = emailInput.value;
    outputAge.textContent = ageInput.value;
    outputVisit.textContent = visitInput.value;
    outputWorkout.textContent = workoutInput.value;
    outputEquipment.textContent = equipmentInput.value;
    outputCleanliness.textContent = cleanlinessInput.value;
    outputStaff.textContent = staffInput.value;
    outputEnvironment.textContent = environmentInput.value;
    outputRating.textContent = ratingInput.value;
    outputLiked.textContent = likedInput.value;
    outputImprove.textContent = improveInput.value;

    // Optional field
    outputAdditional.textContent =
        additionalInput.value.trim() === ""
        ? "No additional feedback"
        : additionalInput.value;

    outputRecommend.textContent = recommendInput.value;

    // Show output section
    outputSection.style.display = "block";

    // Scroll to output
    outputSection.scrollIntoView({
        behavior: "smooth"
    });

    alert("Thank you for your feedback!");
});