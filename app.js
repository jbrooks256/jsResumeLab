console.log("Name: " + "Justin Brooks".toUpperCase());
console.log("Career: Professional Professional");
console.log("Description: Yes");
console.log("\n");
console.log("My Interests:");
console.log("* Reading");
console.log("* Video Games");
console.log("* Music");
console.log("\n");
displayPosition("Math, Chemistry, Physics, Biology, and English tutor", "Some School", "Tutored students in those areas.");
displayPosition("Undergraduate Teaching Assistant", "University of Georgia", "Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.");
displayPosition("Lead Programmer for iBeacon Experiment", "Georgia Museum of Art", "Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.");
console.log("\n");
console.log("My Skills:");
displaySkill("Walking", true);
displaySkill("Eating", false);
displaySkill("Talking", false);
displaySkill("Breathing", true);

function displayPosition(jobTitle, companyName, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
};

function displaySkill(mySkill, isCool) {
    if (isCool == true) {
        console.log("* BAM: " + mySkill)
    } else {
        console.log("* " + mySkill)
    }
};   