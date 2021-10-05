//alert("loading");
function addNewCRField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add('crField');
    newNode.setAttribute('placeholder', 'Enter Here')

    let crOb = document.getElementById('course')
    let crAddButtonOb = document.getElementById("crAddButton");

    crOb.insertBefore(newNode, crAddButtonOb);
}

function addNewTP1Field() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add('tp1Field');
    newNode.setAttribute('placeholder', 'Enter Here')

    let tp1Ob = document.getElementById('timePeriod1')
    let tp1AddButtonOb = document.getElementById("tp1AddButton");

    tp1Ob.insertBefore(newNode, tp1AddButtonOb);
}

function addNewTP2Field() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add('tp2Field');
    newNode.setAttribute('placeholder', 'Enter Here')

    let tp2Ob = document.getElementById('timePeriod2')
    let tp2AddButtonOb = document.getElementById("tp2AddButton");

    tp2Ob.insertBefore(newNode, tp2AddButtonOb);
}


function addNewPField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add('postField');
    newNode.setAttribute('placeholder', 'Enter Here')

    let pOb = document.getElementById('post')
    let postAddButtonOb = document.getElementById("postAddButton");

    pOb.insertBefore(newNode, postAddButtonOb);
}


function addNewLField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add('langField');
    newNode.setAttribute('placeholder', 'Enter Here')

    let lOb = document.getElementById('l')
    let langAddButtonOb = document.getElementById("langAddButton");

    lOb.insertBefore(newNode, langAddButtonOb);
}
  

function addNewIField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add('intrestField');
    newNode.setAttribute('placeholder', 'Enter Here')


    let iOb = document.getElementById('i')
    let intrestAddButtonOb = document.getElementById("intrestAddButton");

    iOb.insertBefore(newNode, intrestAddButtonOb);
}

function addNewSField() {
    //console.log("Add new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.setAttribute('placeholder', 'Enter Here')
  
 

    let sOb = document.getElementById('s')
    let skillAddButtonOb = document.getElementById("skillAddButton");

    sOb.insertBefore(newNode, skillAddButtonOb);
}


function addNewWEField() {
    //console.log("Add new field");
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("weField");
   
    newNode.setAttribute('placeholder', 'Enter Here')
    newNode.setAttribute('placeholder', 'Enter Here')
  

    let weOb = document.getElementById('we')
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewEQField() {
    //console.log("Add new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute('placeholder', 'Enter Here')
  


    let eqOb = document.getElementById('eq')
    let eqAddButtonOb = document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode, eqAddButtonOb);
}

/// GENERATING CV

function generateCV() {

    ///     DECLARING ALL THE VARIABLES FOR VALIDATION.
  /*
    contact = document.getElementById('contactField').value
    mail = document.getElementById('mailField').value
    fb = document.getElementById('fbField').value
    insta = document.getElementById('instaField').value
    linked = document.getElementById('linkedField').value
    empty1  = document.getElementById('nameField').value;
    skill = document.getElementById('skillField').value;
    lang = document.getElementById('langField').value;
    intrest = document.getElementById('intrestField').value;
    empty2 = document.getElementById('aboutField').value;
    empty3 = document.getElementById('objectiveField').value;
    empty4 = document.getElementById('workField').value;
    empty5 = document.getElementById('aqField').value;
    empty6 = document.getElementById('imgField').files[0];
    
    /// FUNCTIONS FOR VALIDATION

    function validate_mail(mail) {
        expression = /^[^@]+@\w+(\.\w+)+\w$/
        if (expression.test(mail) == true) {
            // Email is good
            return true
        } else {
            // Email is not good
            return false
        }
    }

    function validate_contact(contact) {
        if (contact == null) {
            return false
        } else {
            return true;
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
    //////  IF STATEMENT FOR RETURNING VALUE

    if (
        validate_mail(mail) == false
         || 
        validate_contact(contact) == false ) {
        alert('Either of the field is empty or not apllicable !!')
        return

    }

    if (
        validate_field(fb) == false
         ||
          validate_field(insta) == false 
          ||
           validate_field(linked) == false 
           || 
           validate_field(empty1) == false /// HERE I HAVE USED THE WORD 'empty' BECAUSE THE ORIGINAL NAMES WERE MESSING UP WITH THE INITIALIZATION PART
           ||                                                       // THIS IS FOR: nameField
           validate_field(empty2) == false  /// HERE I HAVE USED THE WORD 'empty' BECAUSE THE ORIGINAL NAMES WERE MESSING UP WITH THE INITIALIZATION PART
           ||                                                        // THIS IS FOR: aboutField
           validate_field(empty3) == false  /// HERE I HAVE USED THE WORD 'empty' BECAUSE THE ORIGINAL NAMES WERE MESSING UP WITH THE INITIALIZATION PART
           ||                                                         // THIS IS FOR: objectiveField
           validate_field(empty4) == false  /// HERE I HAVE USED THE WORD 'empty' BECAUSE THE ORIGINAL NAMES WERE MESSING UP WITH THE INITIALIZATION PART
           ||                                                       // THIS IS FOR: workField
           validate_field(empty5) == false  /// HERE I HAVE USED THE WORD 'empty' BECAUSE THE ORIGINAL NAMES WERE MESSING UP WITH THE INITIALIZATION PART
           ||                                                         // THIS IS FOR: academicField
           validate_field(empty6) == false     /// HERE I HAVE USED THE WORD 'empty' BECAUSE THE ORIGINAL NAMES WERE MESSING UP WITH THE INITIALIZATION PART
           ||                                                         // THIS IS FOR: imageField
           validate_field(skill) == false
           ||
           validate_field(lang) == false
           ||
           validate_field(intrest) == false ) {
        alert('Either of the field is empty or not apllicable !!');
        return
    }

*/


    console.log("Generating CV")


    document.getElementById('cv-form').style.display = 'none';
    let hex = document.getElementById('cv-template');
    hex.style.display = 'block'


   //NOW FROM HERE WE WILL REPLACE THE TEXT OF THE TEMPLATE WITH THE VALUE OF THE INPUT FIELDS//
   //// This one is for Name field
    let name = 'Name:'
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField
    //////////////////////////////////////////////////////////// This one is for Profile Pic  field

    let file = document.getElementById('imgField').files[0];
    console.log(file);

    let reader = new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    // seting image to tempelate
    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    }

    //////////////////////////////////////////////// This one is for phone number field 
    let contactField = document.getElementById('contactField').value;
    let contactT = document.getElementById('contactT');

    contactT.innerHTML = contactField;
    /////////////////////////////////////////////////// This one is for email field
    let mailField = document.getElementById('mailField').value;
    let mailT = document.getElementById('gmailT');

    mailT.innerHTML = mailField;
    //////////////////////////////////////////////////// This one is for Facebook Username Field
    let fbField = document.getElementById('fbField').value;
    let fbT = document.getElementById('fbT');

    fbT.innerHTML = fbField;
    //////////////////////////////////////////////////////  This is for instagram Username Field
    let instatField = document.getElementById('instaField').value;
    let instaT = document.getElementById('instaT');

    instaT.innerHTML = instatField;
    ////////////////////////////////////////////////// This is for LinkedIn username Field
    let linkedField = document.getElementById('linkedField').value;
    let linkedT = document.getElementById('linkedT');

    linkedT.innerHTML = linkedField;
///////////////////////////////////////////////////////// This is for the Address Field
    let addressField = document.getElementById('addressField').value;
    let locationT = document.getElementById('locationT');

    locationT.innerHTML = addressField;

// This is for the about me field

document.getElementById('abtT').innerHTML =  document.getElementById('aboutField').value;

    /////////////////////////////////////////////////////// This is for the SKILL Field
    let skills = document.getElementsByClassName('skillField');
     
         let skillString = '';
     
         for (let e of skills) { // here we have used the loop because ther will be multiple skiils field
             skillString = skillString + `<li>  ${e.value}  </li>`;
     
     
             document.getElementById('skillT').innerHTML = skillString;
         }

                  
    /////////////////////////////////////////////////////// This is for the lnguagees Field
    let langs = document.getElementsByClassName('langField');
     
    let langString = '';

    for (let e of langs) { // here we have used the loop because ther will be multiple intrests field
            langString = langString + `<li>  ${e.value}  </li>`;


        document.getElementById('langT').innerHTML = langString;
    }

         
    /////////////////////////////////////////////////////// This is for the Intrests Field
   let intrests = document.getElementsByClassName('intrestField');
     
    let intrestString = '';

    for (let e of intrests) { // here we have used the loop because ther will be multiple intrests field
            intrestString = intrestString + `<li>  ${e.value}  </li>`;


        document.getElementById('intrestT').innerHTML = intrestString;
    }

   /////////////////////////////////////////////////////// This is for the Company Field
    let company = document.getElementsByClassName('weField');
     
    let companyString = '';

    for (let e of company) { // here we have used the loop because ther will be multiple intrests field
            companyString = companyString + `<h5>  ${e.value}  </h5"><hr style="width: 200px;">`;


        document.getElementById('companyT').innerHTML = companyString;
    }

    

    let timePeriod = document.getElementsByClassName('tp1Field');
     
    let tpString = '';

    for (let e of timePeriod) { // here we have used the loop because ther will be multiple intrests field
            tpString = tpString + `<h5>  ${e.value}  </h5><br> `;


        document.getElementById('timePeriod1T').innerHTML = tpString;
    }

    /////////////////////////////////////////////////////////////

    let postField = document.getElementsByClassName('postField');
     
    let postString = '';

    for (let e of postField) { // here we have used the loop because ther will be multiple intrests field
            postString = postString + `<li>  ${e.value}  </li> <hr style="visibility: hidden;">`;


        document.getElementById('designationT').innerHTML = postString;
    }



}



function h() {
    window.print()
}