
function CreatePerson(person){        
    var myNewPersonObj = {
        name: person.name,
        lastName: person.lastName,
        age: person.age,
    }    

    if (myNewPersonObj.age <= 60){
        console.log("All Good!!")
    }else if(myNewPersonObj.age <= 99){
        console.log("You're old!!")
    }else if(myNewPersonObj.age >= 100){
        console.log("Really??")
    }

    if (myNewPersonObj.name == "Jorge"){
        myNewPersonObj.name = myNewPersonObj.name + " Awesome!!!"
        return myNewPersonObj
    }else{
        return myNewPersonObj;
    }
}

function RunApp(){    
    const person = {
        name: "Jorge",
        lastName: "Castro",
        age: 32,
    }    
        
    var myNewPerson = CreatePerson(person);    
    console.log(myNewPerson);
}

RunApp();
