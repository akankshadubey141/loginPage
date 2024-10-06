document.getElementById('dob').max = new Date().toISOString().split("T")[0];
function validateForm() {
    const form = document.getElementById('registrationForm');
    const otpForm = document.getElementById('otpForm');
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const college = document.getElementById("college").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dob").value;
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();


    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const collegeError = document.getElementById("college-error");
    const emailError = document.getElementById("email-error");
    const genderError = document.getElementById("gender-error");
    const dobError = document.getElementById("dob-error");

    fnameError.textContent = "";
    lnameError.textContent = "";
    collegeError.textContent = "";
    emailError.textContent = "";
    genderError.textContent = "";
    dobError.textContent = "";

    let isValid = true;

    if (fname === "" || /\d/.test(fname)) {
        fnameError.textContent = "Please enter your first name properly.";
        isValid = false;
    }

    if (lname === "" || /\d/.test(lname)) {
        lnameError.textContent = "Please enter your last name properly.";
        isValid = false;
    }

    if (college === "") {
        collegeError.textContent = "Please enter your college name.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!gender) {
        genderError.textContent = "Please select your Gender.";
        isValid = false;
    }

    if (age <= 10) {
        dobError.textContent = "You are not elegible, must be 10 year old.";
        isValid = false;
    }

    if (dob === "") {
        dobError.textContent = "Enter your DOB.";
        isValid = false;
    }


        //************************  Redirect to otp section  ***********************************

    if (isValid) {
        form.classList.add('hidden');
        otpForm.classList.remove('hidden');
        isValid = false;
    }

    return isValid;
}

        //***************************  OTP validation  ****************************************** 

function submitForm() {
    const otp = document.getElementById("otp").value;
    const otpError = document.getElementById("otp-error");
    const otpForm = document.getElementById("otpForm");
    const loginForm = document.getElementById("loginForm");

    otpError.textContent = "";


    let isValid = true;

    if (otp == "123456") {
        
        otpForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        isValid = false;
    }
    if(isValid){
        otpError.textContent = "Please enter correct OTP.";
        isValid = false;
    }

    return isValid;
}

