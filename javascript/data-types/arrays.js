function ArrayIndex(){
    var myStringList = ["String 1", "String 2", "String 3" ,"String 4"]
    var element1 = myStringList[0];
    var element2 = myStringList[1];
    var element3 = myStringList[2];
    var element4 = myStringList[3];
    
    console.log("Index 0: " + element1) // "String 1"
    console.log("Index 1: " + element2) // "String 2"
    console.log("Index 2: " + element3) // "String 3"
    console.log("Index 3: " + element4) // "String 4"
}

function ArrayMethods(){
    // To add an element to a list
    var myEmptyList = []
    myEmptyList.push(1) 
    console.log(myEmptyList) // [1]

    myEmptyList.push(61) 
    console.log(myEmptyList) // [1, 61]

    myEmptyList.push(5) 
    console.log(myEmptyList) // [1, 61, 5]

    // To Remove the last element of a list
    myEmptyList.pop()
    console.log(myEmptyList) // [1, 61]

    // To Remove the first element of a list
    myEmptyList.shift()
    console.log(myEmptyList) // [61]
}

function RunApp(){
    // Declarations
    var myNumberList = [1, 2, 3, 4, 5]
    var myStringList = ["String 1", "String 2", "String 3" ,"String 4"]
    var myObjectList = [{name: "jorge", lastname: "castro"},{name: "memo", lastname: "zamora"},{name: "cheko", lastname: "mayo"}] 
 
    console.log("Number Array:")
    console.log(myNumberList)
    console.log("String Array:")
    console.log(myStringList)
    console.log("Object (JSON) Array:")
    console.log(myObjectList)

    ArrayIndex();
    ArrayMethods();
}

RunApp();

var getSongArrayItem = (index) => {
    var songs = ["muerte", "vida", "post-vide"]
    return songs[index];
}
var getArrayItem = () => {
    console.log("my lamnda function")
}

var mySong = getSongArrayItem(4)
console.log(mySong);