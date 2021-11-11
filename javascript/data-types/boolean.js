function RunApp(){
    console.log(10 > 20) // false
    console.log(10 < 20) // true
    console.log(10 != 20) // true
    console.log(10 != 10) // false
    console.log(10 == 20) // false
    console.log(10 == 10) // true
    console.log("jorge" == "jorge") // true
    console.log("jorge" != "jorge") // false
    console.log("jorge" == "roberto") // false
    console.log("jorge" != "roberto") // true
        
    console.log(!(10 > 20)) // true 

    var myBoolean = (10 > 20)
    console.log(myBoolean) // false

    var myOtherBoolean = (10 < 20)
    console.log(myOtherBoolean) // true

    var myName = "Jorge"
    var myFriendsName = "Memo"

    var stringBoolean = (myName == myFriendsName)
    console.log(stringBoolean) // false

    var stringBoolean = (myName != myFriendsName)
    console.log(stringBoolean) // true
}

RunApp();