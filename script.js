// Typing Animation

const text = "Aspiring Cloud Engineer | AWS | Linux | DevOps";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typingText.innerHTML = "";
typeEffect();


// Project Modal

function openModal(project) {

    let content = "";

    if (project === "cloud") {

        content = `
        <h2>Cloud Resume Challenge</h2>

        <br>

        <p>
        Built a serverless cloud resume website hosted on Amazon S3 and delivered globally using CloudFront.
        Implemented HTTPS with AWS Certificate Manager and Route53 for DNS management.
        Integrated a visitor counter using API Gateway, Lambda and DynamoDB.
        Automated deployments using GitHub Actions CI/CD pipelines.
        </p>

        <br>

        <h3>Technologies Used</h3>

        <ul>
        <li>Amazon S3</li>
        <li>CloudFront</li>
        <li>Route53</li>
        <li>Lambda</li>
        <li>API Gateway</li>
        <li>DynamoDB</li>
        <li>GitHub Actions</li>
        </ul>
        `;
    }

    if (project === "cicd") {

        content = `
        <h2>CI/CD Pipeline Project</h2>

        <br>

        <p>
        Designed and implemented an automated CI/CD pipeline for application deployment.
        Utilized Docker for containerization and GitHub Actions for build and deployment automation.
        Improved software delivery efficiency and streamlined version control practices.
        </p>

        <br>

        <h3>Technologies Used</h3>

        <ul>
        <li>Docker</li>
        <li>Git</li>
        <li>GitHub Actions</li>
        <li>CI/CD</li>
        </ul>
        `;
    }

    document.getElementById("modal-body").innerHTML = content;

    document.getElementById("modal").style.display = "block";

}

function closeModal() {

    document.getElementById("modal").style.display = "none";

}


// Close Modal if Clicked Outside

window.onclick = function(event) {

    let modal = document.getElementById("modal");

    if (event.target === modal) {

        modal.style.display = "none";
    }

}


// Visitor Counter Placeholder

// Visitor Counter

async function loadVisitorCount() {

    try {

        const response = await fetch(
            "https://jjue8dzvij.execute-api.ap-south-1.amazonaws.com/visitor"
        );

        const data = await response.json();

        document.getElementById("visitor-count").innerHTML =
    data.count;

    }

    catch (error) {

        console.error("Error fetching visitor count:", error);

        document.getElementById("visitor-count").innerHTML =
            "Visitors unavailable";

    }

}

loadVisitorCount();


// Fade-In Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});