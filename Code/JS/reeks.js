let products = document.getElementsByClassName("product");


for(let i = 0 ; i < products.length ; i++){
    const prod = products.item(i);
    prod.addEventListener("click", (event) => {
        let showing = document.getElementById("showing-info");
        if(showing != null){
            showing.removeAttribute('id');
        }
        let children = prod.children;
        if(!(showing === children.item(1))){
            children.item(1).setAttribute('id', "showing-info")
        }
    })
}


