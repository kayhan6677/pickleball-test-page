var content ="";

content += '<div id=courtstopcontainer>'

for (i=0; i<4; i++) {
    content += '<div class="courts">' 
    + '<div class="courtplayers1 courtplay">Roderick D.</div>'
    + '<div class="courtplayers2 courtplay">Devon M.</div>'
    + '<div class="courtred-box">12 min.</div>'
    + '<div class="courtplayers3 courtplay">Rick W.</div>'
    + '<div class="courtplayers4 courtplay">Dori D.</div></div>';
}

content += '</div><div id=courtsbottomcontainer>'

for (i=4; i<6; i++) {
    content += '<div class="courts">' 
    + '<div class="courtplayers1 courtplay">Roderick D.</div>'
    + '<div class="courtplayers2 courtplay">Devon M.</div>'
    + '<div class="courtred-box">12 min.</div>'
    + '<div class="courtplayers3 courtplay">Rick W.</div>'
    + '<div class="courtplayers4 courtplay">Dori D.</div></div>';
}

for (i=6; i<8; i++) {
    content += '<div class="courts inactive-court">' 
    + '<div class="courtplayers1 courtplay">Roderick D.</div>'
    + '<div class="courtplayers2 courtplay">Devon M.</div>'
    + '<div class="courtred-box">12 min.</div>'
    + '<div class="courtplayers3 courtplay">Rick W.</div>'
    + '<div class="courtplayers4 courtplay">Dori D.</div></div>';
}

content += '</div>'

document.getElementById("allcourtscontainer").innerHTML += content;
