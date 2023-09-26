
 const userLanguage = navigator.language || navigator.userLanguage;

 
 let redirectPage = "index.html"; 
 
 if (userLanguage.startsWith("ar")) {
   redirectPage = "ar/";
 } else {
   redirectPage = "en/"; 
 }
 
 window.location.href = redirectPage;