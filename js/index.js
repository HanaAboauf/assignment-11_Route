var accounts = [];

if (localStorage.getItem("account") !== null) {
    accounts = JSON.parse(localStorage.getItem("account"));
}

function signUp() {
    var nameInput = document.getElementById("exampleInputName").value.trim();
    var emailInput = document.getElementById("exampleInputEmail").value.trim();
    var passwordInput = document.getElementById("exampleInputPassword").value.trim();

    if (nameInput === "" || emailInput === "" || passwordInput === "") {
        setMessage("All inputs are required!", "red");
        return;
    }

    if (emailIsExist(emailInput)) {
        setMessage("This email already exists!", "red");
        return;
    }

    setMessage("Success!", "green");
    var account = {
        email: emailInput,
        password: passwordInput,
    };
    accounts.push(account);
    localStorage.setItem("account", JSON.stringify(accounts)); 
    clearForm();
}

function emailIsExist(email) {
    for (var i = 0; i < accounts.length; i++) {
        if (email === accounts[i].email) {
            return true;
        }
    }
    return false;
}

function login() {
    var emailInput = document.getElementById("exampleInputEmail").value.trim();
    var passwordInput = document.getElementById("exampleInputPassword").value.trim();

    if (emailInput === "" || passwordInput === "") {
        setMessage("All inputs are required!", "red");
        return;
    }

    if (checkExist(emailInput, passwordInput)) {
        window.location.href = "home.html";
    } else {
        setMessage("The email or the password is incorrect!", "red");
    }
}

function checkExist(email, password) {
    for (var i = 0; i < accounts.length; i++) {
        if (email === accounts[i].email && password === accounts[i].password) {
            return true;
        }
    }
    return false;
}

function clearForm() {
    document.getElementById("exampleInputName").value = "";
    document.getElementById("exampleInputEmail").value = "";
    document.getElementById("exampleInputPassword").value = "";
}
function setMessage(message, color) {
    var flag = document.getElementById("flag");
    flag.innerHTML = message;
    flag.style.color = color;
}