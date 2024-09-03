// Sample data for subjects and departments
var data = {
    "Transforms and Partial Differential Equations (TPDE) (EEE II)": {
        "notes": "https://drive.google.com/file/d/1pPeiEl8xR0aLSX2zAVDXcMXOgVVQdR_u/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1jRElEssWrX1sW13966UoCCRtG6YL5TtF/view?usp=sharing"
    },
    "Object Oriented Programming using Java (OOPS) (EEE II)": {
        "notes": "https://drive.google.com/file/d/1W4fnljfLWppvJ1lrdn-zS_dYGO5WJ_54/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/19rIMpTohX6R2TwFts-A8_W_dQkGzrsp-/view?usp=sharing"
    },
    "Electromagnetic Theory (EMT) (EEE II)": {
        "notes": "https://drive.google.com/file/d/1DOzCbupeYwQa3L7Ql_WPh5wVE7eN3t4a/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1RswjjavEbBDrCqeuOzTpxOG6Y6YgKero/view?usp=sharing"
    },
    "Analog Electronics (AE) (EEE II)": {
        "notes": "https://drive.google.com/file/d/1Xp7E4kSuicsnfzAONyfkLy0NBdoJSrrc/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/13ajdFO2setYNOp3JNEHQv2S3CNDs4E8G/view?usp=sharing"
    },
    "Signals and Systems (SS) (EEE II)": {
        "notes": "https://drive.google.com/file/d/1zdY8-lKObNJGEKOawPanzTbtjooENj5r/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1Cvbjnw6hp7kTSa-ZvlRbONEknNucRDG-/view?usp=sharing"
    },
  //  "": {
  //      "notes": "",
 //       "questionBank": ""
  //  },
    
    // Add more subjects and departments here...
};
console.log(data[1])

// Get the search input and button elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultContainer = document.getElementById("result-container");

// Add event listener to the search button
searchButton.addEventListener("click", () => {
resultContainer.style.display="block"
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        const results = [];
        for (const key in data) {
            if (key.toLowerCase().includes(searchTerm)) {
                results.push({ subject: key, ...data[key] });
            }
        }
        if (results.length > 0) {
            const resultHtml = results.map((result) => {
                const notesLink = document.createElement("a");
                notesLink.href = result.notes;
                notesLink.target = "_blank";
                notesLink.textContent = "Notes";
                const questionBankLink = document.createElement("a");
                questionBankLink.href = result.questionBank;
                questionBankLink.textContent = "Question Bank";
                return `
                    <h2>${result.subject}</h2>
                    <p>Notes: ${notesLink.outerHTML}</p>
                    <p>Question Bank: ${questionBankLink.outerHTML}</p>
                `;
            }).join("");
            resultContainer.innerHTML = resultHtml;
        } else {
            resultContainer.innerHTML = `<p>No results found for ${searchTerm}</p>`;
        }
    } else {
        resultContainer.innerHTML = `<p>Please enter a subject or department name</p>`;
    }
});
const navbarToggler = document.getElementById('navbar-toggler');
const navLinks = document.querySelector('.nav-links');

navbarToggler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navbarToggler.classList.toggle('active');
});

// Add event listener to nav links to close the navbar when a link is clicked
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        navbarToggler.classList.remove('active');
    }
});

const footer = document.querySelector("footer");
const greet = footer.querySelector("h5");
const form = footer.querySelector("form");
const fbtn = footer.querySelector("button");
 function click(e){
     e.preventDefault();
 }
fbtn.addEventListener("click", function(event){
    event.preventDefault()
})