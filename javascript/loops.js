function getItemsByIndex(songs, searchIndexList){
    
    var listOfFoundSongs = []

    // Busqueda de items en una lista
    for (var index = 0; searchIndexList.length > index; index++){
        
        var indexToFind = searchIndexList[index];
        console.log(indexToFind);

        var foundSong = songs[indexToFind];

        listOfFoundSongs.push(foundSong)
        
    }

    return listOfFoundSongs;
}

function RunApp(){
    var songs = ["muerte", "vida", "post-vide", "pre-vide"]
    var searchList = [2, 3]
    var foundItems = getItemsByIndex(songs, searchList)

    console.log(foundItems);
}

function RunWhileLoop(){
    var myListOfNames = ["jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal", "jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge cuantico", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal"]
    // Does "Jorge Cuantico" exists?
    var index = 0;
    var shouldLoopAgain = true;
    var loopCount = 0;
    while(shouldLoopAgain){
        console.log("my while loop")
        
        if(myListOfNames[index].toLocaleLowerCase() == "Jorge Cuantico".toLocaleLowerCase()){
            shouldLoopAgain = false;
        }
        
        loopCount++        
        index++
    }

    console.log("I found the funcking name")
    console.log("I loop myself: " + loopCount + " times")
}

function RunForLoop(){
    var myListOfNames = ["jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal", "jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge cuantico", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal","jorge", "castro", "memo", "pepito", "chemo", "coso", "sa", "lalalala", "lalalal"]
    console.log("array lenght: " + myListOfNames.length);
    
    var loopCount = 0;
    for(var index = 0; myListOfNames.length > index; index++){
        console.log("my for loop")
        
        if(myListOfNames[index].toLocaleLowerCase() == "Jorge Cuantico".toLocaleLowerCase()){
            break;
        }
        
        loopCount++
    }

    console.log("I found the funcking name")
    console.log("I loop myself: " + loopCount + " times")
}

RunApp();
RunForLoop()
RunForWhile()