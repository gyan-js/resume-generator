//alert("loading");



function addNewWEField() {
         //console.log("Add new field");
         let newNode = document.createElement("textarea");
         newNode.classList.add("form-control");
         newNode.classList.add("weField");
         newNode.setAttribute("rows", 4);
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
         console.log("Generating CV")
         let name = 'Name:'
         let nameField = document.getElementById("nameField").value;
         let nameT1 = document.getElementById("nameT1");
     
         nameT1.innerHTML =name +  nameField;
     
         // DIRECT NAME
     
         let nameT2 = document.getElementById("nameT2");
         nameT2.innerHTML = nameField;
     
         // CONTACT
         let contact = 'Contact:'
         let contactField = document.getElementById('contactField').value;
         let contactT1 = document.getElementById('contactT1');
     
         contactT1.innerHTML =  contact + contactField;
     
         // ADDRESS
         let address = 'Address:'
         let addressField = document.getElementById('addressField').value;
         let addressT1 = document.getElementById('addressT1');
     
         addressT1.innerHTML =  address + addressField;
     
         //MARITIAL STATUS
         let mStatus = "Maritial Status: "
     
         let spouceField = document.getElementById('spouceField').value;
         let spouceT1 = document.getElementById('spouceT1');
     
         spouceT1.innerHTML = mStatus + spouceField;
     
         //SPOUCE NAME
     
         let sName = "Spouce Name: "
     
         let spouce1Field = document.getElementById('spouce1Field').value;
         let spouceT11 = document.getElementById('spouceT11');
     
         spouceT11.innerHTML = sName + spouce1Field;
     
         // FB LINK
     
         let nameFb = "Facebook: "
     
         let fbField = document.getElementById('fbField').value;
         let fbT = document.getElementById('fbT');
     
         fbT.innerHTML = nameFb + fbField;
     
         // INSTA LINK
     
         let nameInsta = "Instagram: "
     
         let instaField = document.getElementById('instaField').value;
         let instaT = document.getElementById('instaT');
     
         instaT.innerHTML = nameInsta + instaField;
     
         //LINKEDIN LINK
         let nameLinked = "LinkedIn: "
     
         let linkedField = document.getElementById('linkedField').value;
         let linkedT = document.getElementById('linkedT');
     
         linkedT.innerHTML = nameLinked + linkedField;
     
         // about me field
     
         let aboutField = document.getElementById('aboutField').value;
         let abtT = document.getElementById('abtT');
     
         abtT.innerHTML = aboutField;
     
         //objective
     
         document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;
     
         // WE
     
         let wes = document.getElementsByClassName('weField');
     
         let str = '';
     
         for (let e of wes) {
             str = str + `<li>  ${e.value}  </li>`;
     
     
             document.getElementById('weT').innerHTML = str;
         }
     
         // EQ
     
         let eqs = document.getElementsByClassName('eqField');
     
         let atr = '';
     
         for (let e of eqs) {
             atr = atr + `<li>  ${e.value}  </li>`;
     
     
             document.getElementById('eqT').innerHTML = atr;
     
         }
     
         document.getElementById('cv-form').style.display = 'none';
         let hex = document.getElementById('cv-template');
         hex.style.display = 'block'
     
     
     let file = document.getElementById('imgField').files[0];
     console.log(file);
     
     let reader = new FileReader()
     
     reader.readAsDataURL(file);
     
     console.log(reader.result);
     
     // seting image to tempelate
     reader.onloadend = function() {
         document.getElementById('imgTempelate').src = reader.result;
     }

  
     }
     
     function printCV() {
         window.print();

         let print = document.getElementById('print');
         print.style.display = 'none';
     }