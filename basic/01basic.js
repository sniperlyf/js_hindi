const accountID = 124001
let accountEmail = "cosmoxmuthal@gmail.com"
var accountPassword = "12345"//always use "let" for initializing variable as "var" had issue with in block scope and functional scope
accountCity = "Rohtak"

//accountID = 2   constant keyword can be changed that is not allowed
console.log(accountID)

accountEmail="hctch@gmail.com"
accountPassword="12121"
accountCity="jaipur"


//consol method table that can be used to print multiple consol.log instead of writing it again n again
 
console.table([accountEmail,accountID,accountPassword,accountCity])