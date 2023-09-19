
 const userLanguage = navigator.language || navigator.userLanguage;

 
 let redirectPage = "index.html"; 
 
 if (userLanguage.startsWith("ar")) {
   redirectPage = "ar.html";
 } else if (userLanguage.startsWith("en")) {
   redirectPage = "en.html"; 
 }
 
 window.location.href = redirectPage;