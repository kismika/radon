const endpoint = "https://www.functionup.org"
const batch = "radon"

const log = function() {
    console.log('I am inside the log function')
}
function welcome(){
    return ("welcome to my application. I am Sursinh Thakor and a part of FunctionUp radon")
}
 

module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.log = log
module.exports.welcome = welcome