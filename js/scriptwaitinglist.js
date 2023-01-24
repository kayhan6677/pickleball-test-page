const gametype = ["D", "D","D", "D", "D", "D", "D", "S"];
const gamerating = [3.5, 3.5, "handshake", 3.5,"handshake", "handshake", "handshake", "handshake"];
const player1 = ["Lynn Tanner", "Roderick Flich", "Angus McGyver", "Hannibal Smith", "Thomas Magnum", "Roderick Decker",
"Cristian Tanner", "B.A. Baracus", "Lynn Tanner", "Roderick Flich", "Angus McGyver", "Hannibal Smith", "Thomas Magnum",
"Roderick Decker", "Cristian Tanner"];
const player2 = ["Sledge Hammer", "Willie Tanner", "Micheal Knight", "Fred Decker", "Tony Danza", "Your Name", "Capt. Trunk",
"Dori Doreau", "Sledge Hammer", "Willie Tanner", "Micheal Knight", "Fred Decker", "Tony Danza", "Your Name", "Capt. Trunk"];
const waitingtime = [16, 19, 21, 26, 19, 19, 21, 26];

var content ="";

    for (let i=0; i < 8; i++) {
        if (i<4) {
            content += '<div class="row mobile">'; 
        } else {
            content += '<div class="row extended">';
        }

        if (gametype[i]=="D") {
        content += '<div class="gametype"><img src="img/double.svg" alt="doublesymbol"></div>';
        } else {
        content += '<div class="gametype"><img src="img/single.svg" alt="singlesymbol"></div>';
        } 

        if (gamerating[i]=="3.5") {
            content += '<div class="gamerating">3.5</div>';
        } else {
            content +='<div class="gamerating"><img class="handshake" src="img/handshake.svg" alt="handshake"></div>';
        }
        if (gametype[i]=="D") {
            if (i==2) {
                content += '<div class="players1 bold">'+player1[2*i]+' <br> '+player1[2*i+1]+ '</div>'
            + '<div class="players2 bold">' + player2[2*i] + ' <br><span class="color"> ' + player2[2*i+1] + '</span></div>';
            } else { 
            content += '<div class="players1">'+player1[2*i]+' <br> '+player1[2*i+1]+ '</div>'
            + '<div class="players2">' + player2[2*i] + ' <br> ' + player2[2*i+1] + '</div>';
            }
        } else {
        content += '<div class="players1">'+ player1[2*i] +'</div>'
        + '<div class="players2">' + player2[2*i] + '</div>';  
        }
        
        content += '<div class="waitingtime"><span class="waitingtimeminutes">' + waitingtime[i] + ' </span> mins</div>'
        + '<div class="trashcan"><img src="img/trashcan.svg" alt="trashcan"></div>'
        + '</div>';
       
    }

    document.getElementById("table").innerHTML += content;
