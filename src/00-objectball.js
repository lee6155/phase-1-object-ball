
function gameObject () {
    return object = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black','White'],
            players: {
                "Alan Anderson": {"number": 0, "shoe": 16, "points": 22, "rebounds": 12, "assists": 12, "steals": 3, "blocks": 1, "slam dunks": 1},
                "Reggie Evans": {"number": 30, "shoe": 14, "points": 12, "rebounds": 12, "assists": 12, "steals": 12, "blocks": 12, "slam dunks": 7},
                "Brook Lopez": {"number": 11, "shoe": 17, "points": 17, "rebounds": 19, "assists": 10, "steals": 3, "blocks": 1, "slam dunks": 15},
                "Mason Plumlee": {"number": 1, "shoe": 19, "points": 26, "rebounds": 12, "assists": 6, "steals": 3, "blocks": 8, "slam dunks": 5},
                "Jason Terry": {"number": 31, "shoe": 15, "points": 19, "rebounds": 2, "assists": 2, "steals": 4, "blocks": 11, "slam dunks": 1},
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise','Purple'],
            players: {
                "Jeff Adrien": {"number": 4, "shoe": 18, "points": 10, "rebounds": 1, "assists": 1, "steals": 2, "blocks": 7, "slam dunks": 2},
                "Bismak Biyombo": {"number": 0, "shoe": 16, "points": 12, "rebounds": 4, "assists": 7, "steals": 7, "blocks": 15, "slam dunks": 10},
                "DeSagna Diop": {"number": 2, "shoe": 14, "points": 24, "rebounds": 12, "assists": 12, "steals": 4, "blocks": 5, "slam dunks": 5},
                "Ben Gordon": {"number": 8, "shoe": 15, "points": 33, "rebounds": 3, "assists": 2, "steals": 1, "blocks": 1, "slam dunks": 0},
                "Brendan Haywood": {"number": 33, "shoe": 15, "points": 6, "rebounds": 12, "assists": 12, "steals": 22, "blocks": 5, "slam dunks": 12},
            },
        }
    }
}


function numPointsScored (name) {
    gameObject();
    if (object.home.players[name] !== undefined) {
        return object.home.players[name]["points"];
    } else if (object.away.players[name] !== undefined) {
        return object.away.players[name]["points"];
    } else {
        return 'Player is not on the Nets or Hornets';
    }
}

console.log(numPointsScored('Brendan Haywood'));


function shoeSize (name) {
    gameObject();
    if (object.home.players[name] !== undefined) {
        return object.home.players[name]["shoe"];
    } else if (object.away.players[name] !== undefined) {
        return object.away.players[name]["shoe"];
    } else {
        return 'Player is not on the Nets or Hornets';
    }
}

console.log(shoeSize('Ben Gordon'));


function teamColors (team) {
    gameObject();
    if (team === 'Brooklyn Nets') {
        return object.home.colors;
    } else if (team === 'Charlotte Hornets') {
        return object.away.colors;
    } else {
        return 'That team is not playing tonight';
    }
}

console.log(teamColors('Charlotte Hornets'));


function teamNames () {
    gameObject();
    return [object.home.teamName,object.away.teamName]
}

console.log(teamNames());


function playerNumbers (team) {
    gameObject();
    if (team === 'Brooklyn Nets') {
        let path = object.home.players
        return [path["Alan Anderson"]["number"],path["Reggie Evans"]["number"],path["Brook Lopez"]["number"],path["Mason Plumlee"]["number"],path["Jason Terry"]["number"]];
    } else if (team === 'Charlotte Hornets') {
        let path = object.away.players
        return [path["Jeff Adrien"]["number"],path["Bismak Biyombo"]["number"],path["DeSagna Diop"]["number"],path["Ben Gordon"]["number"],path["Brendan Haywood"]["number"]];
    }
}

console.log(playerNumbers('Charlotte Hornets'));


function playerStats (name) {
    gameObject();
    if (object.home.players[name] !== undefined) {
        return object.home.players[name];
    } else if (object.away.players[name] !== undefined) {
        return object.away.players[name];
    } else {
        return 'Player is not on the Nets or Hornets';
    }
}

console.log(playerStats('Alan Anderson'));


function bigShoeRebounds () {
    let homePlayersArray = Object.keys(object.home.players);
    let awayPlayersArray = Object.keys(object.away.players);

    let shoeSizeArrayHome = [];
    for(let i = 0; i < 5; i++) {
        let shoeSizesHome = object.home.players[String(homePlayersArray[i])]["shoe"];
        shoeSizeArrayHome.push(shoeSizesHome);
    }

    let shoeSizeArrayAway = [];
    for(let i = 0; i < 5; i++) {
        let shoeSizesAway = object.away.players[String(awayPlayersArray[i])]["shoe"];
        shoeSizeArrayAway.push(shoeSizesAway);
    }
    
    let playerBiggestShoe;
    if (Math.max(...shoeSizeArrayHome) > Math.max(...shoeSizeArrayAway)) {
       let biggestShoe = Math.max(...shoeSizeArrayHome)
       playerBiggestShoe;

       switch(biggestShoe) {
            case 16:
                playerBiggestShoe = "Alan Anderson";
                break;
            case 14:
                playerBiggestShoe = "Reggie Evans";
                break;
            case 17:
                playerBiggestShoe = "Brook Lopez";
                break;
            case 19:
                playerBiggestShoe = "Mason Plumlee";
                break;
            case 15:
                playerBiggestShoe = "Jason Terry";
                break;
       }
    } else if (Math.max(...shoeSizeArrayHome) < Math.max(...shoeSizeArrayAway)) {
        let biggestShoe = Math.max(...shoeSizeArrayAway)
        playerBiggestShoe;

        switch(biggestShoe) {
            case 18:
                playerBiggestShoe = "Jeff Adrien";
                break;
            case 16:
                playerBiggestShoe = "Bismak Biyombo";
                break;
            case 14:
                playerBiggestShoe = "DeSagna Diop";
                break;
            case 15:
                playerBiggestShoe = "Ben Gordon";
                break;
            case 15:
                playerBiggestShoe = "Brendan Haywood";
                break;
        }
    }
    
    if (object.home.players[playerBiggestShoe] !== undefined) {
        console.log (playerBiggestShoe,object.home.players[playerBiggestShoe]["rebounds"]);
    } else {
        console.log (playerBiggestShoe,object.away.players[playerBiggestShoe]["rebounds"]);
    }
}

bigShoeRebounds();
