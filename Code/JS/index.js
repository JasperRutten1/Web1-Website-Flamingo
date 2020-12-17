achtergrondGroote();
welkomBerichtHoogte();

window.onresize = () => {
    achtergrondGroote();
    welkomBerichtHoogte();
}

function achtergrondGroote(){
    let pic = document.getElementById("achtergrond-afbeelding");

    let offSetY = pic.offsetTop;
    let totalY = screen.availHeight;

    pic.style.height = Math.max(totalY - offSetY - 100, 400) + "px";
}

function welkomBerichtHoogte(){
    let pic = document.getElementById("achtergrond-afbeelding");
    let titel = pic.children.item(0);

    let top = pic.offsetTop;
    let bot = pic.offsetHeight;

    titel.style.top = ((bot/2) + top) + "px";
}