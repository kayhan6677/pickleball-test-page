const game_type = ["D", "D","D", "D", "D", "D", "D", "S"];
const game_rating = [3.5, 3.5, "handshake", 3.5,"handshake", "handshake", "handshake", "handshake"];
const player_1 = ["Lynn Tanner", "Roderick Flich", "Angus McGyver", "Hannibal Smith", "Thomas Magnum", "Roderick Decker",
"Cristian Tanner", "B.A. Baracus", "Lynn Tanner", "Roderick Flich", "Angus McGyver", "Hannibal Smith", "Thomas Magnum",
"Roderick Decker", "Cristian Tanner"];
const player_2 = ["Sledge Hammer", "Willie Tanner", "Micheal Knight", "Fred Decker", "Tony Danza", "Your Name", "Capt. Trunk",
"Dori Doreau", "Sledge Hammer", "Willie Tanner", "Micheal Knight", "Fred Decker", "Tony Danza", "Your Name", "Capt. Trunk"];
const waiting_time = [16, 19, 21, 26, 19, 19, 21, 26];

var content ="";

    for (let i=0; i < 8; i++) {
        if (i<4) {
            content += '<div class="row mobile">'; 
        } else {
            content += '<div class="row extended">';
        }

        if (game_type[i]=="D") {
        content += '<div class="game_type"><img src="img/waiting_list/double.svg" alt="Double Symbol"></div>';
        } else {
        content += '<div class="game_type"><img src="img/waiting_list/single.svg" alt="Single Symbol"></div>';
        } 

        if (game_rating[i]=="3.5") {
            content += '<div class="game_rating">3.5</div>';
        } else {
            content +='<div class="game_rating"><img class="hand_shake" src="img/waiting_list/handshake.svg" alt="Handshake"></div>';
        }
        if (game_type[i]=="D") {
            if (i==2) {
                content += '<div class="players_1 current-user-game">'+player_1[2*i]+' <br> '+player_1[2*i+1]+ '</div>'
            + '<div class="players_2 current-user-game">' + player_2[2*i] + ' <br><span class="current-user"> ' + player_2[2*i+1] + '</span></div>';
            } else { 
            content += '<div class="players_1">'+player_1[2*i]+' <br> '+player_1[2*i+1]+ '</div>'
            + '<div class="players_2">' + player_2[2*i] + ' <br> ' + player_2[2*i+1] + '</div>';
            }
        } else {
        content += '<div class="players_1">'+ player_1[2*i] +'</div>'
        + '<div class="players_2">' + player_2[2*i] + '</div>';  
        }
        
        content += '<div class="waiting_time"><span class="waiting_time_minutes">' + waiting_time[i] + ' </span> mins</div>'
        + '<div class="trash_can"><img src="img/waiting_list/trashcan.svg" alt="Trash Can"></div>'
        + '</div>';
       
    }

    document.getElementById("waiting_list_body").innerHTML += content;
