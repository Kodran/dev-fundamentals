
function GetPerson(person){
    var name = person.name
    var lastName = person.lastName
    var age = person.age
    
    return "Name: " + name + " Last Name: " + lastName +  " Age: " + age;
}

function CreatePerson(person){        
    var myNewPersonObj = {
        name: person.name,
        lastName: person.lastName,
        age: person.age        
    }
    return myNewPersonObj;
}

// Function - Get list of people (persons) 
function GetPersonList(){
    const person1 = {
        name: "Jorge",
        lastName: "Castro",
        age: 32,
    }    
    const person2 = {
        name: "Memo",
        lastName: "Zamora",
        age: 25,
    }    
    const person3 = {
        name: "Cheko",
        lastName: "Mayor",
        age: 11,
    }    
    
    var myPersonList = [person1, person2, person3];
    return myPersonList;
}

function RunApp(){    
    const person = {
        name: "Jorge",
        lastName: "Castro",
        age: 32,
    }    
    
    var myName = GetPerson(person);
    var myNewPerson = CreatePerson(person);
    var personList = GetPersonList();

    console.log("Object properties concatenation:")
    console.log(myName);
    console.log("Created Object:")
    console.log(myNewPerson);
    console.log("List of Objects:")
    console.log(personList);

    const personWithMethod = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {            
          return this.firstName + " " + this.lastName;
        }
    };

    var fullName = personWithMethod.fullName();
    console.log(fullName)

}

RunApp();
