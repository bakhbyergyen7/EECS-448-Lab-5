function checkPassword() {
    let password = document.getElementById("psw1").value;
    let cnfrmPassword = document.getElementById("psw2").value;
    console.log(password, cnfrmPassword);
    
    if ((0 < password.length) && (password.length <= 8)){
        alert("Password length must be greater than 8")
        }
    else if (password.length != 0) {
        if (password == cnfrmPassword) {
            alert("Passwords match")
        }
        else{
            alert("Passwords don't match")
        }

    }

    else{
        alert("Password can't be empty!")
    }
}
