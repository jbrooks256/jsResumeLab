let resume = {
    Name: "Justin Brooks",
    Career: "Professional Professional",
    Description: "Yes",
    Interests: "Reading, Video Games, Music",
    Experience: [
        "Math, Chemistry, Biology",
        "Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.",
        "Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece."
    ],
    Skills: ["Walking", "Eating", "Talking", "Breathing"]
};

let allCaps = resume.Name.toUpperCase();

function displayPosition() {
    
};

function displaySkill() {
    for (let i = 0; i < resume.Skills.length; i++) {
        if (i>1) {
            console.log("BAM: " + resume.Skills[i]);
        }   else {
            console.log(resume.Skills[i]);
        }
    }
}

console.log((resume),(displaySkill()));