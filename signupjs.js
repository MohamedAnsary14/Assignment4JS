var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');

usersList = [];
function signUp() {
    var user = {
        name: signupName.value,
        email: signupEmail.value,
        pass: signupPassword.value
    }

    if (usersList.length == 0) {
        document.getElementById('msg').innerHTML = '<p  class="text-danger">All inputs is required</p>';
        usersList.push(user)
        localStorage.setItem('userData', JSON.stringify(usersList))
    }
    else {
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].email == signupEmail.value) {
                document.getElementById('msg').innerHTML = '<p  class="text-danger">email already exists</p>'

            }
            else {
                usersList.push(user)
                localStorage.setItem('userData', JSON.stringify(usersList))
                document.getElementById('msg').innerHTML = '<p  class="text-Success">Success</p>'

            }
        }
    }
}





