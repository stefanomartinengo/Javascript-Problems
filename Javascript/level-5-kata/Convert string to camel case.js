// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

    // Examples:

        // // returns "theStealthWarrior"
        // toCamelCase("the-stealth-warrior") 

        // // returns "TheStealthWarrior"
        // toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){
    var splitStr = str.split(`${str.match(/[_-]/)}`)
    var arr = []
    
    for(let i = 0; i < splitStr.length; i++) {
        if(i !== 0) {
            let cap = splitStr[i].substring(0,1).toUpperCase()
            arr.push(cap + splitStr[i].substring(1))
        } else arr.push(splitStr[i])
    }
    return arr.join('')
}