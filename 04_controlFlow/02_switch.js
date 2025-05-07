/*
- Sometimes we get one situation in that we checks multipul cases on that time we use Switch cases.
*/

// The basic syntax of swtich case are as follows :

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

const month = 2;

switch (month){         //here we pass month as a key
   case 1:
   console.log("This is the month of january");
   break;

   case 2:
   console.log("This is the month of February");
   break;

   case 3:
   console.log("This is the month of March");
   break;    //IMP : If here we does not give the break it execute all the code where the key was matched expect defaul.

   case 4:
   console.log("This is the month of April");
   break;

   default:
   console.log("default");    //default is like else if any code does not execute on that time the default code runs.
   break;
};


const strMonth = "march"

switch (strMonth){
  case "jan":
    console.log("This is the month of january");
    break;
  case "feb":
    console.log("This is the month of February");
    break;
  case "march":
    console.log("This is the month of march");
    break;
  case "april":
    console.log("This is the month of january");
    break;
    default:
    console.log("defaul log");
    break;

}