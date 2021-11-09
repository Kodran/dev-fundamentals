function GetPerson(){
    // Declaration
    var name = "jorge"
    var lastName = "castro"
    var age = 32    

    // Concatenation
    return "Name: " + name + " Last Name: " + lastName +  " Age: " + age;
}

function RunApp(){
    var person = GetPerson();
    console.log(person)

    // Remove initial and final empty spaces in a string
    var myText = "    My Text and More text :)    jijiji    .   "
    console.log(myText)

    myText = myText.trim()
    console.log(myText)
}

RunApp();