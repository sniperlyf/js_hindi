const accountID = 124001
let accountEmail = "cosmoxmuthal@gmail.com"
var accountPassword = "12345"//always use "let" for initializing variable as "var" had issue with in block scope and functional scope
accountCity = "Rohtak"

//accountID = 2   constant keyword can be changed that is not allowed
console.log(accountID)

accountEmail="hctch@gmail.com"
accountPassword="12121"
accountCity="jaipur"
let accountState;//value will be undefined

//consol method table that can be used to print multiple consol.log instead of writing it again n again. okay?
 
console.table([accountEmail,accountID,accountPassword,accountCity,accountState])