/* ==========================================
   GET ELEMENTS
========================================== */

const nameInput = document.getElementById("nameInput");
const titleInput = document.getElementById("titleInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const locationInput = document.getElementById("locationInput");
const linkedinInput = document.getElementById("linkedinInput");
const githubInput = document.getElementById("githubInput");
const objectiveInput = document.getElementById("objectiveInput");
const skillsInput = document.getElementById("skillsInput");
const certificationsInput = document.getElementById("certificationsInput");
const languagesInput = document.getElementById("languagesInput");



/* ==========================================
   LIVE UPDATE
========================================== */

const allInputs = document.querySelectorAll(
    "input:not([type='file']), textarea"
);

allInputs.forEach(function(input) {

    input.addEventListener("input", function() {

        updateResume();

    });

});



/* ==========================================
   UPDATE PERSONAL INFORMATION
========================================== */

function updateResume() {

    const name =
        nameInput.value.trim() || "Your Name";

    const title =
        titleInput.value.trim() || "Professional Title";

    const email =
        emailInput.value.trim() || "Email";

    const phone =
        phoneInput.value.trim() || "Phone";

    const location =
        locationInput.value.trim() || "Location";

    const linkedin =
        linkedinInput.value.trim() || "LinkedIn";

    const github =
        githubInput.value.trim() || "GitHub";

    const objective =
        objectiveInput.value.trim()
        || "Your career objective will appear here.";


    /* Name */

    document.getElementById("previewName").textContent = name;

    document.getElementById("previewMainName").textContent =
        name.toUpperCase();


    /* Title */

    document.getElementById("previewTitle").textContent =
        title;

    document.getElementById("previewMainTitle").textContent =
        title;


    /* Contact */

    document.getElementById("previewEmail").textContent =
        "📧 " + email;

    document.getElementById("previewPhone").textContent =
        "📱 " + phone;

    document.getElementById("previewLocation").textContent =
        "📍 " + location;

    document.getElementById("previewLinkedin").textContent =
        "🔗 " + linkedin;

    document.getElementById("previewGithub").textContent =
        "💻 " + github;


    /* Objective */

    document.getElementById("previewObjective").textContent =
        objective;


    /* Skills */

    updateSkills();


    /* Languages */

    updateLanguages();


    /* Certifications */

    updateCertifications();


    /* Education */

    updateEducation();


    /* Projects */

    updateProjects();

}



/* ==========================================
   SKILLS
========================================== */

function updateSkills() {

    const container =
        document.getElementById("previewSkills");

    const skills =
        skillsInput.value
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");


    container.innerHTML = "";


    if (skills.length === 0) {

        const li = document.createElement("li");

        li.textContent = "Your Skills";

        container.appendChild(li);

        return;
    }


    skills.forEach(function(skill) {

        const li = document.createElement("li");

        li.textContent = "• " + skill;

        container.appendChild(li);

    });

}



/* ==========================================
   LANGUAGES
========================================== */

function updateLanguages() {

    const languages =
        languagesInput.value.trim();

    document.getElementById(
        "previewLanguages"
    ).textContent =
        languages || "English";

}



/* ==========================================
   CERTIFICATIONS
========================================== */

function updateCertifications() {

    const container =
        document.getElementById(
            "previewCertifications"
        );

    const certifications =
        certificationsInput.value
        .split("\n")
        .map(cert => cert.trim())
        .filter(cert => cert !== "");


    container.innerHTML = "";


    if (certifications.length === 0) {

        const li = document.createElement("li");

        li.textContent =
            "Your certification";

        container.appendChild(li);

        return;
    }


    certifications.forEach(function(cert) {

        const li = document.createElement("li");

        li.textContent = cert;

        container.appendChild(li);

    });

}



/* ==========================================
   EDUCATION
========================================== */

function updateEducation() {

    const container =
        document.getElementById(
            "previewEducation"
        );

    const educationForms =
        document.querySelectorAll(
            ".education-form"
        );


    container.innerHTML = "";


    educationForms.forEach(function(form) {

        const degree =
            form.querySelector(
                ".education-degree"
            ).value.trim();

        const college =
            form.querySelector(
                ".education-college"
            ).value.trim();

        const year =
            form.querySelector(
                ".education-year"
            ).value.trim();

        const score =
            form.querySelector(
                ".education-score"
            ).value.trim();


        if (
            degree === "" &&
            college === "" &&
            year === "" &&
            score === ""
        ) {

            return;

        }


        const education =
            document.createElement("div");

        education.className =
            "resume-education";


        const degreeElement =
            document.createElement("h4");

        degreeElement.textContent =
            degree || "Degree";


        const collegeElement =
            document.createElement("p");

        collegeElement.textContent =
            college || "College / University";


        const detailsElement =
            document.createElement("span");

        let details = "";

        if (year) {

            details += year;

        }

        if (score) {

            if (details !== "") {

                details += " | ";

            }

            details += score;

        }

        detailsElement.textContent =
            details;


        education.appendChild(
            degreeElement
        );

        education.appendChild(
            collegeElement
        );

        education.appendChild(
            detailsElement
        );


        container.appendChild(
            education
        );

    });


    if (container.children.length === 0) {

        container.innerHTML = `
            <div class="resume-education">

                <h4>Your Degree</h4>

                <p>Your College</p>

                <span>Year | Score</span>

            </div>
        `;

    }

}



/* ==========================================
   ADD EDUCATION
========================================== */

function addEducation() {

    const container =
        document.getElementById(
            "educationContainer"
        );


    const education =
        document.createElement("div");

    education.className =
        "education-form";


    education.innerHTML = `

        <input
            type="text"
            class="education-degree"
            placeholder="Degree / Course"
        >

        <input
            type="text"
            class="education-college"
            placeholder="College / University"
        >

        <input
            type="text"
            class="education-year"
            placeholder="Year"
        >

        <input
            type="text"
            class="education-score"
            placeholder="CGPA / Percentage"
        >

        <button
            type="button"
            class="remove-btn"
            onclick="removeEducation(this)"
        >
            Remove
        </button>

    `;


    container.appendChild(
        education
    );


    addDynamicListeners();

}



/* ==========================================
   REMOVE EDUCATION
========================================== */

function removeEducation(button) {

    const form =
        button.parentElement;

    form.remove();

    updateResume();

}



/* ==========================================
   ADD PROJECT
========================================== */

function addProject() {

    const container =
        document.getElementById(
            "projectsContainer"
        );


    const project =
        document.createElement("div");

    project.className =
        "project-form";


    project.innerHTML = `

        <input
            type="text"
            class="project-name"
            placeholder="Project Name"
        >

        <input
            type="text"
            class="project-tech"
            placeholder="Technologies Used"
        >

        <textarea
            class="project-description"
            rows="4"
            placeholder="Describe your project..."
        ></textarea>

        <button
            type="button"
            class="remove-btn"
            onclick="removeProject(this)"
        >
            Remove
        </button>

    `;


    container.appendChild(
        project
    );


    addDynamicListeners();

}



/* ==========================================
   REMOVE PROJECT
========================================== */

function removeProject(button) {

    const form =
        button.parentElement;

    form.remove();

    updateResume();

}



/* ==========================================
   UPDATE PROJECTS
========================================== */

function updateProjects() {

    const container =
        document.getElementById(
            "previewProjects"
        );


    const projectForms =
        document.querySelectorAll(
            ".project-form"
        );


    container.innerHTML = "";


    projectForms.forEach(function(form) {

        const name =
            form.querySelector(
                ".project-name"
            ).value.trim();

        const tech =
            form.querySelector(
                ".project-tech"
            ).value.trim();

        const description =
            form.querySelector(
                ".project-description"
            ).value.trim();


        if (
            name === "" &&
            tech === "" &&
            description === ""
        ) {

            return;

        }


        const project =
            document.createElement("div");

        project.className =
            "resume-project";


        const heading =
            document.createElement("h4");

        heading.textContent =
            name || "Project";


        const paragraph =
            document.createElement("p");

        paragraph.textContent =
            description ||
            "Project description";


        const technology =
            document.createElement("strong");

        technology.textContent =
            "Technologies: " +
            (tech || "Not specified");


        project.appendChild(
            heading
        );

        project.appendChild(
            paragraph
        );

        project.appendChild(
            technology
        );


        container.appendChild(
            project
        );

    });


    if (container.children.length === 0) {

        container.innerHTML = `

            <div class="resume-project">

                <h4>Your Project</h4>

                <p>
                    Project description
                </p>

                <strong>
                    Technologies:
                </strong>

            </div>

        `;

    }

}



/* ==========================================
   DYNAMIC INPUT LISTENERS
========================================== */

function addDynamicListeners() {

    const dynamicInputs =
        document.querySelectorAll(
            ".education-form input, " +
            ".project-form input, " +
            ".project-form textarea"
        );


    dynamicInputs.forEach(function(input) {

        input.addEventListener(
            "input",
            updateResume
        );

    });

}



/* ==========================================
   PHOTO UPLOAD
========================================== */

const photoInput =
    document.getElementById(
        "photoInput"
    );


photoInput.addEventListener(
    "change",
    function(event) {

        const file =
            event.target.files[0];


        if (!file) {

            return;

        }


        const reader =
            new FileReader();


        reader.onload =
            function(e) {

                const image =
                    document.getElementById(
                        "previewPhoto"
                    );

                const placeholder =
                    document.getElementById(
                        "photoPlaceholder"
                    );


                image.src =
                    e.target.result;

                image.style.display =
                    "block";

                placeholder.style.display =
                    "none";

            };


        reader.readAsDataURL(file);

    }
);



/* ==========================================
   PRINT RESUME
========================================== */

function printResume() {

    window.print();

}



/* ==========================================
   RESET
========================================== */

function resetResume() {

    const confirmReset =
        confirm(
            "Are you sure you want to reset your resume?"
        );


    if (!confirmReset) {

        return;

    }


    document.querySelectorAll(
        "input:not([type='file']), textarea"
    ).forEach(function(input) {

        input.value = "";

    });


    document.getElementById(
        "photoInput"
    ).value = "";


    document.getElementById(
        "educationContainer"
    ).innerHTML = `

        <div class="education-form">

            <input
                type="text"
                class="education-degree"
                placeholder="Degree / Course"
            >

            <input
                type="text"
                class="education-college"
                placeholder="College / University"
            >

            <input
                type="text"
                class="education-year"
                placeholder="Year"
            >

            <input
                type="text"
                class="education-score"
                placeholder="CGPA / Percentage"
            >

            <button
                type="button"
                class="remove-btn"
                onclick="removeEducation(this)"
            >
                Remove
            </button>

        </div>

    `;


    document.getElementById(
        "projectsContainer"
    ).innerHTML = `

        <div class="project-form">

            <input
                type="text"
                class="project-name"
                placeholder="Project Name"
            >

            <input
                type="text"
                class="project-tech"
                placeholder="Technologies Used"
            >

            <textarea
                class="project-description"
                rows="4"
                placeholder="Describe your project..."
            ></textarea>

            <button
                type="button"
                class="remove-btn"
                onclick="removeProject(this)"
            >
                Remove
            </button>

        </div>

    `;


    const image =
        document.getElementById(
            "previewPhoto"
        );

    const placeholder =
        document.getElementById(
            "photoPlaceholder"
        );


    image.src = "";

    image.style.display =
        "none";

    placeholder.style.display =
        "block";


    addDynamicListeners();

    updateResume();

}



/* ==========================================
   INITIALIZE
========================================== */

addDynamicListeners();

updateResume();