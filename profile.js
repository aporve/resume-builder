

// if (document.readyState === 'complete') {
//   console.log('Loaded~~~~~~~~~~~')
//   alert('loaded')
// }

// document.onreadystatechange = () => {
//   if (document.readyState === 'complete') {
//     console.log('Loaded~~~~~~~~~~~')
//     alert('loaded')
//   }
// };


let obj = {
  "userProfileData": [
    {
      "userProfileName": "Aporve Bhatnager",
      "userProfileDesignation": "Senior Software Developer",
      "introduction": "Introduction",
      "introductionDetails": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Officiis esse eius provident aliquam ipsum labore consequuntur, quia asperiores vel nostrum, odit similique distinctio rem eos nam facilis soluta, eum officia itaque.In deserunt qui corporis perferendis sapiente amet suscipit numquam recusandae dolore. Nostrum, doloribus ex excepturi facere blanditiis totam molestias.",
      "knownTechnology": "Known technology",
      "languageFrontend": "frontend Language",
      "languageFrontend1": "HTML",
      "languageFrontend2": "CSS",
      "languageFrontend3": "JAVASCRIPT",
      "languageDatabase": "Database",
      "languageDatabase1": "SQL",
      "languageDatabase2": "Mongo DB",
      "langaugeBackend": "Backend Language",
      "langaugeBackend1": "NODEJS",
      "languageFronendFramework": "Frontend Frameworks",
      "languageFronendFramework1": "SCSS",
      "languageFronendFramework2": "Bootstrap",
      "languageFronendFramework3": "ReactJs",
      "experienceTitle": "Experience",
      "experienceDetails": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias quam pariatur quibusdam architectoquas magnam vitae eum iste ducimus!",
      "currentCompany": "Current Comapany",
      "currentCompanyDetails": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, non.s",
      "currentCompanyDetails1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
      "xcompany": "X Comapny",
      "xCompanyDetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, neque.",
      "xCompanyDetails1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
      "projectTitle": "Project",
      "Project1": "AIA Phillipines",
      "project1Details": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quasi! Laborum suscipit reprehenderit officiis atque soluta eos, voluptates inventore voluptatibus eum totam iusto consectetur dignissimos saepe ipsa provident quod rerum praesentium impedit molestias quibusd optio ut perspiciatis. Voluptatem, vero. Quasi molestias in beatae quis impedit, quas tenetur culpossimus! Magnam.",
      "project2": "Coke",
      "project2Details": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quasi! Laborum suscipit reprehenderit officiis atque soluta eos, voluptates inventore voluptatibus eum totam iusto consectetur dignissimos saepe ipsa provident quod rerum praesentium impedit molestias quibusdam optiout perspiciatis. Voluptatem, vero. Quasi molestias in beatae quis impedit, quas tenetur culpa possimus!Magnam.",
      "project3": "GSK",
      "project3Details": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quasi! Laborum suscipit reprehenderit officiis atque soluta eos, voluptates inventore voluptatibus eum totam iusto consectetur dignissimos saepe ipsa provident quod rerum praesentium impedit molestias quibusdam optiout perspiciatis. Voluptatem, vero. Quasi molestias in beatae quis impedit, quas tenetur culpa possimus! Magnam.",
      "project4": "YTL",
      "project4Details": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quasi! Laborum suscipit reprehenderit officiis atque soluta eos, voluptates inventore voluptatibus eum totam iusto consectetur dignissimos saepe ipsa provident quod rerum praesentium impedit molestias quibusdam optiout perspiciatis. Voluptatem, vero. Quasi molestias in beatae quis impedit, quas tenetur culpa possimus!",
      "nameTitle": "Name",
      "nameDetails": "Aporve Bhatnagar",
      "emailTitle": "Email",
      "emailTitleDetails": "abc@gmail.com",
      "contactNumber": "Contact Number",
      "contactNumberDetails": "9998887779",
      "dob": "Dob",
      "dobDetails": "21-09-1996",
      "gmailIDTitle": "Gmail ID",
      "gmailIDDetails": "abc@gmail.com",
      "facebookTitle": "Facebook Id",
      "facebookDetails": "abc@gmail.com",
      "linkedInTitle": "LinkedIN Id",
      "linkedInDetails": "abc@linkedin.com",
      "instagramTitle": "InstagramID",
      "instagramDetails": "abc@gmail.com"
    }
  ],
  "userProfileDetails": [
    {
      "userName": "aporve",
      "password": "12345"
    }
  ]
}


let objData = obj.userProfileDetails[0];
console.log(objData.userName, 'Object----');
console.log(objData.password, 'Object----');

let userProfileData = obj.userProfileData[0];
console.log(userProfileData.userProfileName, "userProfileName");



function getId(idName) {
  let idData = document.getElementById(idName);
  return idData;
}

(function () {
  console.log('Self Invoke function')
  getId('userProfileName').innerHTML = userProfileData.userProfileName;
  getId('user-designation').innerHTML = userProfileData.userProfileDesignation;

  getId('introduction').innerHTML = userProfileData.introduction;
  getId('introduction-details').innerHTML = userProfileData.introductionDetails;
  getId('knownTechnology').innerHTML = userProfileData.knownTechnology;
  getId('languageFrontend').innerHTML = userProfileData.languageFrontend;
  getId('languageFrontend1').innerHTML = userProfileData.languageFrontend1;
  getId('languageFrontend2').innerHTML = userProfileData.languageFrontend2;
  getId('languageFrontend3').innerHTML = userProfileData.languageFrontend3;
  getId('languageDatabase').innerHTML = userProfileData.languageDatabase;
  getId('languageDatabase1').innerHTML = userProfileData.languageDatabase1;
  getId('languageDatabase2').innerHTML = userProfileData.languageDatabase2;
  getId('langaugeBackend').innerHTML = userProfileData.langaugeBackend;
  getId('langaugeBackend1').innerHTML = userProfileData.langaugeBackend1;
  getId('languageFronendFramework').innerHTML = userProfileData.languageFronendFramework;
  getId('languageFronendFramework1').innerHTML = userProfileData.languageFronendFramework1;
  getId('languageFronendFramework2').innerHTML = userProfileData.languageFronendFramework2;
  getId('languageFronendFramework3').innerHTML = userProfileData.languageFronendFramework3;
  getId('experienceTitle').innerHTML = userProfileData.experienceTitle;
  getId('experienceDetails').innerHTML = userProfileData.experienceDetails;
  getId('currentCompany').innerHTML = userProfileData.currentCompany;
  getId('currentCompanyDetails').innerHTML = userProfileData.currentCompanyDetails;
  getId('currentCompanyDetails1').innerHTML = userProfileData.currentCompanyDetails1;
  getId('xcompany').innerHTML = userProfileData.xcompany;
  getId('xCompanyDetails').innerHTML = userProfileData.xCompanyDetails;
  getId('xCompanyDetails1').innerHTML = userProfileData.xCompanyDetails1;
  getId('projectTitle').innerHTML = userProfileData.projectTitle;
  getId('project1').innerHTML = userProfileData.Project1;
  getId('project1Details').innerHTML = userProfileData.project1Details;
  getId('project2').innerHTML = userProfileData.project2;
  getId('project2Details').innerHTML = userProfileData.project2Details;
  getId('project3').innerHTML = userProfileData.project3;
  getId('project3Details').innerHTML = userProfileData.project3Details;
  getId('project4').innerHTML = userProfileData.project4;
  getId('project4Details').innerHTML = userProfileData.project4Details;
  getId('nameTitle').innerHTML = userProfileData.nameTitle;
  getId('nameDetails').innerHTML = userProfileData.nameDetails;
  getId('emailTitle').innerHTML = userProfileData.emailTitle;
  getId('emailTitleDetails').innerHTML = userProfileData.emailTitleDetails;
  getId('contactNumber').innerHTML = userProfileData.contactNumber;
  getId('contactNumberDetails').innerHTML = userProfileData.contactNumberDetails;
  getId('dob').innerHTML = userProfileData.dob;
  getId('dobDetails').innerHTML = userProfileData.dobDetails;
  getId('gmailIDTitle').innerHTML = userProfileData.gmailIDTitle;
  getId('gmailIDDetails').innerHTML = userProfileData.gmailIDDetails;
  getId('facebookTitle').innerHTML = userProfileData.facebookTitle;
  getId('facebookDetails').innerHTML = userProfileData.facebookDetails;
  getId('linkedInTitle').innerHTML = userProfileData.linkedInTitle;
  getId('linkedInDetails').innerHTML = userProfileData.linkedInDetails;
  getId('instagramTitle').innerHTML = userProfileData.instagramTitle;
  getId('instagramDetails').innerHTML = userProfileData.instagramDetails;
})();



let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  console.log(i, 'i---');
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active")
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })
}


function myFunction() {
  console.log('function')
  document.getElementById('login').style.display = "none"
  document.getElementById('user-profile-section').style.display = "block";
  // document.getElementById('main').style.display = "none"
  // document.getElementById('footer').style.display = "none"

  let footer = document.getElementById('footer');
  footer.classList.remove("bottom")


}

function validator() {
  event.preventDefault();
  console.log('Validator Function');
  let userName = document.getElementById('userName').value;
  console.log(userName);
  let password = document.getElementById('password').value;
  console.log(password);

  if (userName == objData.userName && password == objData.password) {
    document.getElementById('error').style.display = "none"
    document.getElementById('login').style.display = "none"
    document.getElementById('user-profile-section').style.display = "block";
    let footer = document.getElementById('footer');
    footer.classList.remove("bottom");

    let main = document.getElementById('main');
    main.classList.add("main-addition");

    let aside = document.getElementById("aside");
    aside.style.display = "block";

    let navMenu = document.getElementById('nav-menu');
    navMenu.style.display = "block"
  } else {
    let error = document.getElementById("error")
    error.innerHTML = "Please provide all the below details"
  }
}

function logout() {
  event.preventDefault();
  alert('Do you want to Logout!')
  let navMenu = document.getElementById('nav-menu');
  navMenu.style.display = "none"
  document.getElementById('login').style.display = "block";

  document.getElementById('user-profile-section').style.display = "none";
  let aside = document.getElementById("aside");
  aside.style.display = "none";

  let footer = document.getElementById('footer');
  footer.classList.add("bottom");

}

function userProfile() {
  alert('userProfile');
  document.getElementById('user-profile-section').style.display = "none";
  document.getElementById('user-profile-settings').style.display = "block";
  // let footer = document.getElementById('footer');
  // footer.classList.add("bottom");
}


let submitUserDeatils = document.getElementById("submit-user-profile-details");
submitUserDeatils.addEventListener('click', function (event) {
  event.preventDefault();
  alert('wait---');
})