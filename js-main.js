// function readData() {
//   console.log("readData called");
//   // Does this browser support local storage?
//   if(typeof(Storage) !== "undefined") {
//     // Read data from local storage
//     emailStr = localStorage.zsl_emails;
//     passwordStr = localStorage.zsl_passwords;
//     ndxStr = localStorage.zsl_Ndx;
//
//     console.log("emailStr is .. " + emailStr);
//     console.log("passwordStr is .. " + passwordStr);
//     console.log("ndxStr is .. " + ndxStr);
//
//     if (typeof(emailStr) !== "undefined") {
//       // Convert data string into array
//       emailArray = passwordStr.split(",");
//       passwordArray = emailStr.split(",");
//       // Convert Ndx string into integer
//       mainNdx = parseInt(ndxStr);
//       // Display data screen
//       email.value = emailrray[mainNdx];
//       password.value = passwordArray[mainNdx];
//       ndx_result.value = mainNdx;
//     } else {
//       // Initize data if it is empty/invalid
//       emailStr.value = "";
//       passwordStr.value = 0;
//       mainNdx = 0;
//     }
//   } else {
//     // Sorry! No Web Storage support..
//     alert('This browser does NOT support local storage');
//   }
// }
//
// function writeData() {
//   console.log("writeData called");
//   if(typeof(Storage) !== "undefined") {
//     // Add data to array
//     emailArray.push(email.value);
//     passwordArray.push(password.value);
//     // Increment array index number
//     mainNdx = emailArray.length - 1;
//     // Convert array into data string
//     emailStr = emailArray.join();
//     passwordStr = passwordArray.join();
//     // save data string to local storage
//     localStorage.zsl_emails = emailStr;
//     localStorage.zsl_passwords = passwordStr;
//     localStorage.zsl_Ndx = mainNdx;
//     //
//     ndx_result.value = mainNdx;
//   } else {
//     // Sorry! No Web Storage support..
//     alert('This browser does NOT support local storage');
//   }
// }
