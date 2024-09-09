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
    " POWER SYSTEM ANALYSIS (PSA) (EEE III)": {
        "notes": "https://drive.google.com/file/d/19yOnpV1OfNgmJmmpBbCrgofX3qM1OGMR/view?usp=drive_link",
        "questionBank": "https://drive.google.com/file/d/1cKkMUq4Fpxg0rgM7p6hoeIqqw6VG3Egy/view?usp=sharing"
    },
    " MICROPROCESSORS, MICROCONTROLLERS AND APPLICATIONS (MMA) (EEE III)": {
        "notes": "https://drive.google.com/file/d/1DF86Jmaa1iN0xozVZSC7zADsQLN_6MvD/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1hcUxpy4XAuSW2H8b2M5zcp42tZSJRRBM/view?usp=sharing"
    },
    " ELECTRICAL MACHINES II (EM II) (EEE III)": {
        "notes": "https://drive.google.com/file/d/1rKNXP74DxROxdAmpF6-TH3CZeiNnru6h/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1pWDxDt5z4Ezwen7Hkt4agDGWTsKiPSk8/view?usp=sharing"
    },
    " POWER ELECTRONIC (PE) (EEE III)": {
        "notes": "https://drive.google.com/file/d/1dwWHZaVknwVuGIuLFMv3JekEnFTl6bm3/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1NQW7V5bl4lnlSVWAf0UIY1M6EblnLspn/view?usp=sharing"
    },
    " IOT CONCEPTS AND APPLICATIONS (IOT) (EEE III)": {
        "notes": "https://drive.google.com/file/d/1dwWHZaVknwVuGIuLFMv3JekEnFTl6bm3/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/10k0tUIeCpLRX0fkXLqTdthFCi-JgRiQw/view?usp=sharing"
    },
    " PLC PROGRAMMING (PLC) (EEE III)": {
        "notes": "https://drive.google.com/file/d/1DF86Jmaa1iN0xozVZSC7zADsQLN_6MvD/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1r7AGqnUZHkK2JdFc-86Yey1v3JbkjivW/view?usp=sharing"
    },
    " Protection & Switchgear (PSG) (EEE IV)": {
        "notes": "https://drive.google.com/file/d/1f-Ddib_NscU2N3ksR1RR9vwBabehhITO/view?usp=drive_link",
        "questionBank": "https://drive.google.com/file/d/10SJY2dxWfYgQDlrwigpWPEaYvaLA5AdF/view?usp=sharing"
    },
    " RENEWABLE ENERGY SYSTEMS (RES) (EEE IV)": {
        "notes": "https://drive.google.com/file/d/1f-Ddib_NscU2N3ksR1RR9vwBabehhITO/view?usp=drive_link",
        "questionBank": "https://drive.google.com/file/d/1xmK4H0zAoQsbNB4Arx7D1046G0myaqm3/view?usp=sharing"
    },
    " HIGH VOLTAGE ENGINEERING (HVE) (EEE IV)": {
        "notes": "https://drive.google.com/file/d/1lHbz2DXnIx9saiJyV0SzjIAYokdPFXFu/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1lHbz2DXnIx9saiJyV0SzjIAYokdPFXFu/view?usp=sharing"
    },
    " POWER QUALITY (PQ) (EEE IV)": {
        "notes": "https://drive.google.com/file/d/1f-Ddib_NscU2N3ksR1RR9vwBabehhITO/view?usp=drive_link",
        "questionBank": "https://drive.google.com/file/d/1APRLtYjRf0bRjQpVd685d9U_H2FCAsG_/view?usp=sharing"
    },
    " SMART SYSTEM AUTOMATION (SSA) (EEE IV)": {
        "notes": "https://drive.google.com/file/d/1f-Ddib_NscU2N3ksR1RR9vwBabehhITO/view?usp=drive_link",
        "questionBank": "https://drive.google.com/file/d/1tujOpqgNQpvKrfVBWIccmHTvbQ8XqUq4/view?usp=sharing"
    },
    " POWER QUALITY (PQ) (EEE IV)": {
        "notes": "https://drive.google.com/file/d/1f-Ddib_NscU2N3ksR1RR9vwBabehhITO/view?usp=drive_link",
        "questionBank": "https://drive.google.com/file/d/1APRLtYjRf0bRjQpVd685d9U_H2FCAsG_/view?usp=sharing"
    },

                // CSE STARTS
     " DISCRETE MATHEMATICS (DM) (CSE II)": {
        "notes": "https://drive.google.com/file/d/1uB-dnoaWmtM-j23zCCv0OT4RNQwJl8gq/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1ZcumAd1D3-_jWJbmX5tn_LXSKwKapx5V/view?usp=sharing"
    },           
     "  DIGITAL PRINCIPLES AND COMPUTER ARCHITECTURE (DPCA) (CSE II)": {
        "notes": "https://drive.google.com/file/d/1IQ-ulzB1qAqdNzR50NJYgn7AkgmykdRS/view?usp=drive_link",
        "questionBank": "https://drive.google.com/file/d/1kd8j27TLDTim-nS-dQywrCwaS6LeAbdg/view?usp=sharing"
    },           
     "OBJECT ORIENTED PROGRAMMING (OOPS) (CSE II)": {
        "notes": "https://drive.google.com/file/d/1LLhyA_iCrsyg656fy2ide6VfFpd2F2Y7/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1arYxMHQB7fMpjx5Ejxwa2w5utc2YOBhD/view?usp=sharing"
    },
     "DATABASE MANAGEMENT SYSTEMS (DBMS) (CSE II)": {
        "notes": "https://drive.google.com/file/d/1MsFmKBxrRZlwi2JAxJ3w0c6qWQ1LwwhZ/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1GLyKnNuPo0R2Jy28-AU4cOKO2qIaha4D/view?usp=sharing"
    },
     "DATA STRUCTURES (DS) (CSE II)": {
        "notes": "https://drive.google.com/file/d/1u2hLrVgZn_qEtVQAfIaRdCBAKkvqzIi2/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1LFeig_Z-63rEp2ixnOsb8Gm3nCb6l4mR/view?usp=sharing"
    },
     "THEORY OF COMPUTATION (TOC) (CSE III)": {
        "notes": "https://drive.google.com/file/d/1JkGrUpoCB-LDlp8ZtEU41O2V2naEIwXR/view?usp=sharing",
        "questionBank": "https://drive.google.com/file/d/1w8pcaZu93f0SLF4l7UUKxY16X1KnCCJf/view?usp=sharing"
    },
     "INTERNET PROGRAMMING (IP) (CSE III)": {
        "notes": "https://drive.google.com/file/d/1Fsqf7eArcowGDUfpkiM3uejrbavwTc0V/view?usp=sharing",
        //"questionBank": "https://docs.google.com/document/d/1EuqIRDgUKFzuPwBkZW2gICDNlEo_u0Aw/edit?usp=sharing&ouid=116367676568734509275&rtpof=true&sd=true"
    },
     "ALGEBRA AND NUMBER THEORY (ANT) (CSE III)": {
        "notes": "https://drive.google.com/file/d/1GU6zK5vNfThg63u0evKJXFL5uDWqDuRF/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/14b4kWfJAckpkNOd9Tmj9aJ_iV79VUSwD/view?usp=sharing"
    },
     "ORGANIZATIONAL BEHAVIOR AND ETHICAL PRACTICES (OBEP) (CSE III)": {
        "notes": "https://drive.google.com/file/d/1bOM_D4dcNNpEOvNIn5_Dr8__CDPnjd-j/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/19jnXykObPPxayKTKhM-jQ3yfpQHEG3Qm/view?usp=sharing"
    },
     "ETHICAL HACKING (EH) (CSE III)": {
        "notes": "https://drive.google.com/file/d/1dmhTS3z1ifaV3c9qIjtoJKtl-lbPV7qE/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1QObvRZc1bRwmw-FiqNEDmAQGEgeSegAv/view?usp=sharing"
    },
     "OBJECT ORIENTED AND ANALYSIS DESIGN (OOAD) (CSE III)": {
        "notes": "https://drive.google.com/file/d/1zRR9HP0VcC6oUWJMhxhsgg73JCuwvHvh/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1RsfbX68_3Qb8eh7VrSWfBZOVlAmPGiwE/view?usp=sharing"
    },
     "AUGMENTED REALITY/VIRTUAL REALITY (AR/VR) (CSE III)": {
        "notes": "https://drive.google.com/file/d/1pVgmxD6gV1I0D230EuLybRwNtH4nw3B8/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1hZH0H22UZTOudpYZjsTRabTKsy42MZGV/view?usp=sharing"
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

     "DATA SCIENCE ANALYTICS (DSA) (CSE IV)": {
        "notes": "https://drive.google.com/file/d/1DVGAt4Dsdpq68XcxFnvzQoRD7Tspa0qN/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1K3G0FXT2zVr82yFIy_iW8KOiEeqLdArg/view?usp=sharing"
    },
     "CRYPTOGRAPHY AND NETWORK SECURITY (CNS) (CSE IV)": {
        "notes": "https://drive.google.com/file/d/1EVBXj5EU4zBxjaTymMNGCvx8GC95gfAi/view?usp=sharing",
        //"questionBank": "https://docs.google.com/document/d/10X0awUh-Tx2By5HE-3-ZUrKFswNqf9Js/edit?usp=sharing&ouid=116367676568734509275&rtpof=true&sd=true"
    },
     "CYBER SECURITY (CS) (CSE IV)": {
        "notes": "https://drive.google.com/file/d/1IvSyJkfUQtYTUuqTS2dVgjex16-4Oqdv/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1Dev6iu_fpOdKe0Rd966zDsCJnuJKm7MY/view?usp=sharing"
    },
     "VIDEO CREATION AND EDITING (VCE) (CSE IV)": {
        "notes": "https://drive.google.com/file/d/1YKdmW7qwGuw0DPa8u9lSE793pcSjKQeT/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1Ri3p1-s8diJo_eib-nRDQkGy48QpBBlH/view?usp=sharing"
    },
     "MOBILE APPLICATION DEVELOPMENT (MAD) (CSE IV)": {
        "notes": "https://drive.google.com/file/d/1ZPbP5CZ6G5k7EUjmWx6NhvV8fMwhGspC/view?usp=sharing",
        //"questionBank": "https://docs.google.com/document/d/1s-JkMXZc96YMLaYyd9uLvzrDQ-10U43y/edit?usp=sharing&ouid=116367676568734509275&rtpof=true&sd=true"
    },
     "UI / UX  (UI/UX) (CSE IV)": {
        "notes": "https://drive.google.com/file/d/1yc5Bf0ezdg8Sg2pc41Sqp8qyH3Ia1lFm/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1oHwjbs6RY7xqHJgKFAlg0AY7lK2CZSil/view?usp=sharing"
    },





                    //ECE          
     "LINEAR ALGEBRA AND NUMERICAL ANALYSIS (LANA) (ECE II)": {
        "notes": "https://drive.google.com/file/d/1gQyoPf4KlaIR2-vFob2HJxacfMzeXqcy/view?usp=sharing",
        "questionBank": "https://docs.google.com/document/d/1dapkyaMl0qRfXXXUP7fcZgF96Ih9oUDB/edit?usp=sharing&ouid=116367676568734509275&rtpof=true&sd=true"
    },           
     "SIGNALS AND SYSTEMS (SS) (ECE II)": {
        "notes": "https://drive.google.com/file/d/1Vdcs1oLEMcndifVQCVmQyja8KLNdSqPV/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1BoZ80yGoCRkfRM0xDtQt4uk1bgvshpiR/view?usp=sharing"
    },           
     "ELECTRONIC CIRCUITS-I (EC-I) (ECE II)": {
        "notes": "https://drive.google.com/file/d/1W3Lm_z9c00f40juFwOk1cQqGUFJXeRkU/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1PExeAqrt-2rF00Ep-VWZA0QZSfgI2IdH/view?usp=sharing"
    },           
     "DIGITAL ELECTRONICS (DE) (ECE II)": {
        "notes": "https://drive.google.com/file/d/1URmElXuM16rNGtnv6lHf02uFyry5Bwuw/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1Cxa4mW2qJtBkH1MhntGKjvXwhUCzAqHi/view?usp=sharing"
    },           
     "CONTROL SYSTEMS ENGINEERING (CSE) (ECE II)": {
        "notes": "https://drive.google.com/file/d/1-0dcqq4zQMjczCCiINlLrbpJFtw3-xt8/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1UKEZOjGxAyiqABGTnT1WKoixN0exuubP/view?usp=sharing"
    },           
     "ANALOG AND DIGITAL COMMUNICATION (ADC) (ECE III)": {
        "notes": "https://drive.google.com/file/d/1bUt1SUEWgLmJ3d9vLE6HwdBDhoervYNl/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1x8eZE-miEeWoUGnOZ2VO4FEpT8zphFU6/view?usp=sharing"
    },           
     "DIGITAL SIGNAL PROCESSING (DSP) (ECE III)": {
        "notes": "https://drive.google.com/file/d/1jRwiJTG55GXq6K_1gCYRkEkHuptXljxB/view?usp=sharing",
        //"questionBank": "https://docs.google.com/document/d/1c0lWtllXLIecvCZF8x7dvNSl8SehSkCo/edit?usp=sharing&ouid=116367676568734509275&rtpof=true&sd=true"
    },           
     "MICROCONTROLLERS & COMPUTER ARCHITECTURE (MCA) (ECE III)": {
        "notes": "https://drive.google.com/file/d/1cPdX03k-32RgkYXqUG-0lvmds-VQegY7/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1qXi3nkqYl5-L0XUuraD0MashxIbkkkAY/view?usp=sharing"
    },           
     "TRANSMISSION LINES AND WAVEGUIDES (TLW) (ECE III)": {
        "notes": "https://drive.google.com/file/d/10f_Tm47o9A79Z_9UHmL93RHnymF2_ZVm/view?usp=sharing",
        //"questionBank": "https://drive.google.com/file/d/1RJeslhhv0NLnS0Y9kOzQ0pn1b3J5DaNQ/view?usp=sharing"
    },           
     "DIGITAL IMAGE AND VIDEO PROCESSING (DIVP) (ECE III)": {
        "notes": "https://drive.google.com/file/d/1VUWv1jLV_7Byt4ggtytMxJQ2a_DEicZO/view?usp=sharing",
        //"questionBank": ""
    },           
     "EMBEDDED SYSTEM AND ROBOTICS (ESR) (ECE IV)": {
        "notes": "https://drive.google.com/file/d/1VkatpIKITV6O-2c77JXSBihVj-_QVMuP/view?usp=drive_link",
        //"questionBank": ""
    },           
     "MICROWAVE DEVICES AND CIRCUITES (MWDC) (ECE IV)": {
        "notes": "https://drive.google.com/file/d/1xkM9r1poTOSV0kUWV3G5VS9s6WjQ9YBK/view?usp=sharing",
        //"questionBank": ""
    },           
     "OPTICAL COMMUNICATION AND NETWORKS (OCN) (ECE IV)": {
        "notes": "https://drive.google.com/file/d/1S5toMptFEmUeSCGaN5F-TDA-IcWW8yUR/view?usp=drive_link",
        //"questionBank": ""
    },           
     "COGNITIVE RADIO NETWORKS (CRN) (ECE IV)": {
        "notes": "https://drive.google.com/file/d/1CMhE3B1WPXBpWQnsuuK9WL9_DmgzgAME/view?usp=drive_link",
        //"questionBank": ""
    },           
     "SATELLITE COMMUNICATION (SC) (ECE IV)": {
        "notes": "https://drive.google.com/file/d/1tzNXtSfZmdjUc8PFv61aeoLRYjPUmbzH/view?usp=drive_link",
        //"questionBank": ""
    },           

    
};


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
                questionBankLink.target = "_blank";
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



// Add event listener to nav links to close the navbar when a link is clicked
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('active');
        navbarToggler.classList.remove('active');
    }
});

var footer = document.querySelector("footer");
console.log(footer)
 const greet = footer.querySelector("h5");
const form = footer.querySelector("form");
const fbtn = footer.querySelector("button");
 
fbtn.addEventListener("click", function(event){
    event.preventDefault();
})

form.addEventListener("submit", ()=> {
    greet.style.display = "block"
})