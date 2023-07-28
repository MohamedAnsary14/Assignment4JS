var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')


usersList = [];
function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}
function isEmailExist() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email == signupEmail.value) {
            return false
        }
    }
}

function signUp() {
    if (isEmpty() == false) {
        document.getElementById('msg').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var user = {
        name: signupName.value,
        email: signupEmail.value,
        pass: signupPassword.value
    }
    if (usersList.length == 0) {
        usersList.push(user)
        localStorage.setItem('userData', JSON.stringify(usersList))
        document.getElementById('msg').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('msg').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    }
    else {
        usersList.push(user)
        localStorage.setItem('users', JSON.stringify(usersList))
        document.getElementById('msg').innerHTML = '<span class="text-success m-3">Success</span>'

    }
}
function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}
// informatin=[];
function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('msgLogin').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    else {
        var password = signinPassword.value
        var email = signinEmail.value
        window.location = './home.html'
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].email == email && usersList[i].password == password) {

                localStorage.setItem('sessionUsername', usersList[i].name)
                document.getElementById('msgLogin').innerHTML = '<span class="text-danger m-3">incorrect email or password</span>'
            }
            else {
                window.location = './home.html'
            }
        }
    }
    
}
document.getElementById('btnlogout').addEventListener('click',function(){
    window.location = './index.html'
})




