//const greeting = ' Function Up';
//console.log(greeting.trim());
//const str1 = upper

const lower = function(){
    const str = "MY NIck name pk";
     console.log(str.toLocaleLowerCase());

}

const upper = function(){
    const xyz = "my hobbies play";
     console.log(xyz.toLocaleUpperCase());
    
}
const trim = function(){
    const greeting = '  FunctionUp in radon   cohort ';
    console.log(greeting.trim());

}
module.exports.lower = lower
module.exports.upper = upper
module.exports.trim = trim