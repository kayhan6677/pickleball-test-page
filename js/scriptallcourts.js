var content ="";

content += '<div class=courts_row>'

for (i=0; i<4; i++) {
    content += '<div class="courts">' 
    + '<div class="court_players_1 court_play">Roderick D.</div>'
    + '<div class="court_players_2 court_play">Devon M.</div>'
    + '<div class="court_red-box">12 min.</div>'
    + '<div class="court_players_3 court_play">Rick W.</div>'
    + '<div class="court_players_4 court_play">Dori D.</div></div>';
}

content += '</div><div class=courts_row>'

for (i=4; i<6; i++) {
    content += '<div class="courts">' 
    + '<div class="court_players_1 court_play">Roderick D.</div>'
    + '<div class="court_players_2 court_play">Devon M.</div>'
    + '<div class="court_red-box">12 min.</div>'
    + '<div class="court_players_3 court_play">Rick W.</div>'
    + '<div class="court_players_4 court_play">Dori D.</div></div>';
}

for (i=6; i<8; i++) {
    content += '<div class="courts inactive-court">' 
    + '<div class="court_players_1 court_play">Roderick D.</div>'
    + '<div class="court_players_2 court_play">Devon M.</div>'
    + '<div class="court_red-box">12 min.</div>'
    + '<div class="court_players_3 court_play">Rick W.</div>'
    + '<div class="court_players_4 court_play">Dori D.</div></div>';
}

content += '</div>'

document.getElementById("all_courts_container").innerHTML += content;
