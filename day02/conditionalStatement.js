// function launchBrowser (){
//    let browserName = "chrome"
//     if (browserName)
//         console.log ("chrome")
//     else
//         console.log ("otherWise")
// }
// launchBrowser()
// function runTests(testType){
//     switch(testType){
//     case "smoke":
//       console.log("Running Smoke Tests")
//       break;
//     case "sanity":
//       console.log("Running Smoke Tests")
//       break;
// }
// }
// runTests()
//my understand//
// function launchBrowser (browser){
//   let browser = "chrome"
//   if (browser == "chrome")
//     console.log ("browser is chrome")
//   else
//     console.log ("browser is edge")
// }
// launchBrowser()
// function runTests(){
//   let testType = "sanity"
//   switch (testType){
//   case "smoke":
//   console.log("Running Smoke Tests")
//   break;
//   case"sanity":
//   console.log("Running sanity Tests")
//   break;
//   case"regression":
//   console.log("Running regression Tests")
//   break;
//   default:
//     console.log("Running smoke Tests")
//     break;
// }
// }
// runTests()
//correct one//
function launchBrowser (browserName){
  if(browserName == "chrome")
    console.log("launching" +" "+browserName)
  else 
    console.log("launching" +" "+browserName)
}
launchBrowser("chrome")
launchBrowser("edge")
function runTests (testType){
  switch(testType){
    case "smoke":
  console.log("smoke testing")
  break;
  case "sanity":
  console.log("sanity")
  break;
  case "regression":
  console.log("resgression")
  break;
  default:
  console.log("smoke and resgression")
  break;
}
}
runTests("default")
runTests("regression")