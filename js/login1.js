function showSignIn() {
  //window.open('https://github.com/');

document.getElementById('signUpID').innerHTML = 'Sign In';
////////////////////////////////////////////////////////////
let user = document.getElementById('user');
let email = document.getElementById('email');
let password = document.getElementById('password');
let notice = document.getElementById('noticeID');
let loginButton = document.getElementById('loginButtonID');
let registerButton = document.getElementById('signUpButtonID');
let showSignIn = document.getElementById('showSignInID');
let query = document.getElementById('queryID');

////////////////////////////////////////////////////////////
user.style.display = 'none';
email.style.top = '40%';
password.style.top = '50%'
password.setAttribute('placeholder', 'Enter your password*');
notice.style.display = 'none';
registerButton.style.display = 'none';
loginButton.style.display = 'block';
loginButton.style.cursor = 'pointer';
showSignIn.style.display = 'none'
query.style.display = 'none';
}


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv86tSYR1NsFzdjhrYsBzh1SGOK8BhVF0",
  authDomain: "login-screen-cc3f6.firebaseapp.com",
  databaseURL: "https://login-screen-cc3f6-default-rtdb.firebaseio.com",
  projectId: "login-screen-cc3f6",
  storageBucket: "login-screen-cc3f6.appspot.com",
  messagingSenderId: "332238723453",
  appId: "1:332238723453:web:e0f714c364625f87681414"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('user').value


  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is empty or not applicable!!')
    return
    // Don't continue running the code
  }
  if (validate_field(full_name) == false) {
    alert('The name field is empty or not applicable!')
    return
  }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      full_name : full_name,
    
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

//                                                                                       Set up our login function
function login () {

  email = document.getElementById('email').value
  password = document.getElementById('password').value

  //                                                                                                 Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Either of the field is empty or not applicable!')
    return
 
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    //                                                                                              Declare user variable
    var user = auth.currentUser

    //                                                                                       Add this user to Firebase Database
    var database_ref = database.ref()

           //                                                                                                        Create User data
    var user_data = {
      last_login : Date.now()
    }

   
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('User Logged In!!')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}



