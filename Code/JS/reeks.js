let products = document.getElementsByClassName("product");


for(let i = 0 ; i < products.length ; i++){
    const prod = products.item(i);
    prod.addEventListener("click", (event) => {
        let showing = document.getElementById("showing-info");
        if(showing != null){
            showing.removeAttribute('id');
            let dummy = document.getElementById("dummy");
            dummy.remove();
        }
        if(!(showing === prod)){
            let dummy = prod.cloneNode(true);
            dummy.setAttribute('id', "dummy");
            prod.parentNode.insertBefore(dummy, prod);

            prod.setAttribute('id', "showing-info")
            prod.style.top = dummy.offsetTop - 10 + "px";
            prod.style.left = dummy.offsetLeft - 8 + "px";

            console.log(dummy.width)
        }
    })
}

window.onresize = () => {
    let dummy = document.getElementById("dummy");
    if(dummy == null) return;
    let showing = document.getElementById("showing-info");
    showing.style.top = dummy.offsetTop - 10 + "px";
    showing.style.left = dummy.offsetLeft - 8 + "px";
}


