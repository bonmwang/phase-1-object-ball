function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }

  console.log(gameObject());

  function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }

  console.log(homeTeamName()); // logs "Brooklyn Nets"

  // We dont Necessarily need to save the result of the gameObject function into a varibale
  // That being said, it's often a good idea to save results from functions into variables because it makes it easier to debug our programs later
  // One-liners are not always better
  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  console.log(homeTeamName()); // logs "Brooklyn Nets"

  // Example of how a game object would look like
  const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "Desagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
      },
    },
  };

  // Implement functions one by one
  function numPointsScored(playerName) {
    // Check home team players
    for (const player in game.home.players) {
      if(player === playerName) {
        return game.home.players[player].points;
      }
    }
    // Check away team players
    for (const player in game.away.players) {
        if(player === playerName) {
          return game.away.players[player].points;
      }
    }
    // If player not found
    return "Player not found";
  }

  function shoeSize(playerName) {
    // Check home team players
    for (const player in game.home.players) {
      if (player === playerName) {
        return game.home.players[player].shoe;
      }
    }
    // Check away team players
    for (const player in game.away.players) {
      if (player === playerName) {
        return game.home.players[player].shoe;
      }
    }
    // If player not found 
    return "Player not found"; 
  }

  function teamColors(teamName) {
    if (game.home.teamName === teamName) {
      return game.home.colors;
    }
    else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return "Team not found"
  }

  function teamNames() {
    return [game.home.teamName, game.away.teamName];
  }

  function playerNumbers(teamName) {
    const team = teamName === game.home.teamName ? game.home : game.away;
    return Object.values(team.players).map((player) => player.number);
  }

  function playerStats(playerName) {
    // Check home team players
    for (const player in game.home.players) {
      if (player === playerName) {
        return game.home.players[player];
      }
    }
    //check away team players
    for (const player in game.away.players) {
      if (player === playerName) {
        return game.away.players[player];
      }
    }
    // If player not found
    return "Player not found";
  }

  function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;

    // Check all players
    for (const team of [game.home, game.away]) {
      for (const player in team.players) {
        const playerData = team.players[player];
        if (playerData.shoe > largestShoeSize) {
          largestShoeSize = playerData.shoe;
          playerWithLargestShoe = playerData;
        }
      }
    }

    return playerWithLargestShoe.rebounds;
  }

  function mostPointsScored() {
    let maxPoints = 0;
    let playerWithMostPoints = null;
  
    // Check all players
    for (const team of [game.home, game.away]) {
      for (const player in team.players) {
        const playerData = team.players[player];
        if (playerData.points > maxPoints) {
          maxPoints = playerData.points;
          playerWithMostPoints = player;
        }
      }
    }
  
    return playerWithMostPoints;
  }

  function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    // Calculate home team points
    for (const player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    // Calculate away team points
    for (const player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  
    // Determine the winning team
    if (homeTeamPoints > awayTeamPoints) {
      return game.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }

  function playerWithLongestName() {
    let longestName = "";
    let playerWithLongestName = null;
  
    // Check all players
    for (const team of [game.home, game.away]) {
      for (const player in team.players) {
        if (player.length > longestName.length) {
          longestName = player;
          playerWithLongestName = player;
        }
      }
    }
  
    return playerWithLongestName;
  }

  function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = null;
  
    // Find the player with the most steals
    for (const team of [game.home, game.away]) {
      for (const player in team.players) {
        const playerData = team.players[player];
        if (playerData.steals > maxSteals) {
          maxSteals = playerData.steals;
          playerWithMostSteals = player;
        }
      }
    }
  
    // Check if the player with the longest name has the most steals
    return longestNamePlayer === playerWithMostSteals;
  }