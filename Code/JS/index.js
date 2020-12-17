function achtergrondGroote(){
    let pic = document.getElementById("achtergrond-afbeelding");

    let offSetY = pic.offsetTop;
    let totalY = screen.availHeight;

    pic.style.height = Math.max(totalY - offSetY - 100, 400) + "px";
}

achtergrondGroote();

window.onresize = () => {
    achtergrondGroote();
}
