function achtergrondGroote(){
    let pic = document.getElementById("achtergrond-afbeelding");

    let offSetY = pic.offsetTop;
    let headerY = document.getElementsByTagName("header").item(0).offsetTop;
    let totalY = screen.availHeight;

    pic.style.height = totalY - offSetY - 100 + "px";
}

achtergrondGroote();

window.onresize = () => {
    achtergrondGroote();
}
