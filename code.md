const firebaseConfig = {
         apiKey: "AIzaSyDv86tSYR1NsFzdjhrYsBzh1SGOK8BhVF0",
         authDomain: "login-screen-cc3f6.firebaseapp.com",
         projectId: "login-screen-cc3f6",
         storageBucket: "login-screen-cc3f6.appspot.com",
         messagingSenderId: "332238723453",
         appId: "1:332238723453:web:e0f714c364625f87681414"
       };

       const auth = firebase.auth();
       const database = firebase.database();

       function register() {
                user = document.getElementById('user').value;
                email = document.getElementById('email').value;
                password = document.getElementById('password').value;

                if (validate_email(email) == false || validate_password(password) == false) {
                  alert("Email or password is Outta Line!!");
                  return
                }

                if (validate_field(user) == false ) {
                  alert("One more line is Outta line!");
                  return
                }

                  auth.createUserWithEmailPassword(email, password)

                  .then(function(){
                      var user = auth.currentUser

                      //Adding this user to database
                      var database_ref = database.ref()
                      
                      // Create User Data
                      var user_data = {
                        email : email,
                        user : user,
                        last_login : Date.now()
                      }

                      database_ref.child('users/' + user.uid).set(user_data)


                      alert('User Created !!')
                  })

                  .catch(function(error){
                    var error_code = error.error.code
                    var error_message = error.message
                    
                    alert(error_message)
                  })
                
       }

       function validate_email(email) {

   //     /^[^@]+@\w+(\.\w+)+\w$/  the exprssion for the validation for correct format of email
         expression = /^[^@]+@\w+(\.\w+)+\w$/


         if(expression.test(email) == true) {
                  return true;
         }

         else{
                  return false
         }
       }

       function validate_password(password) {
                ///  NOTE: FIREBASE ONLY ACCEPTS LENGTHS GRETAER THAN'     '6'     CHARACTER

                if (password < 6) {
                         return false
                }

                else {
                         return true
                }
       }

       function validate_field(field) {
         if (field == null) {
           return false;
         }

         if (field.length <= 0) {
           return false
         }
         else{
           return true;
         }
       }


/////////////////////////////////////////////////////////////////////////////////////////////////////
       window.onload = function () {
    document.getElementById("downloadBtn")
        .addEventListener("click", () => {
            const template1 = this.document.getElementById("cv-template");
            console.log(template1);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(template1).set(opt).save();
        })
}