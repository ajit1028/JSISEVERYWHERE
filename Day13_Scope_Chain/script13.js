/**
 * scope chain-> the propogation of scope chain is only upwards(from the current scope to its outer scope),
 */
/*
outest{
    outer{
        inner{
    
        }
    }
}
=> inner can access from its scope if it will not find then it can go for its outer that is outer scope oif its not find there then its go  for outest scope if its not find there then refrence error 
or if its find in any of its scope either its own or its outer ot outest it will print the value.

*/

let userName = "Sarah";
let userRole = "Admi";

function checkAccess() {
  let hasAccess = false;
  if (userRole === "Admin") {
    let welcomMsg = `${userName} you have admin privileges`;
    hasAccess = true;
    console.log(welcomMsg);
  }
  console.log(hasAccess);
}

checkAccess();
