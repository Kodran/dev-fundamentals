

function getItemsByIndex(songs, searchIndexList){
    
    var listOfFoundSongs = []

    // Busqueda de items en una lista
    for (var index = 0; searchIndexList.length >= index; index++){
        
        var indexToFind = searchIndexList[index];
        
        var foundSong = songs[indexToFind];

        if (foundSong != undefined){
            listOfFoundSongs.push(foundSong)
        } 
    }

    return listOfFoundSongs;
}

function RunApp(){
    var songs = ["muerte", "vida", "post-vide", "Pre-vide"]
    var searchList = [2, 3]
    var foundItems = getItemsByIndex(songs, searchList)

    console.log(foundItems);
}

RunApp();