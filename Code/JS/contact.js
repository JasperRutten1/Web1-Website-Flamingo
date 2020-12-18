document.getElementById("submitButton").addEventListener("click", (event) => {
    let button = document.getElementById("submitButton");
    let name = document.getElementById("name");
    let firstName = document.getElementById("firstName");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let confirm = document.getElementById("TOS");

    clearErrorMessages();
    if(name.value.trim().length < 2) addErrorMessage("naam mag niet leeg zijn");
    if(firstName.value.trim().length < 2) addErrorMessage("voornaam mag niet leeg zijn");
    if(email.value.trim().length < 3 || !email.value.includes("@")) addErrorMessage("Ongeldig Email adres")
    if(message.value.trim().length < 10) addErrorMessage("berich moeten minstens 10 karakters zijn");
    console.log(confirm.value);
    if(!(confirm.checked === true)) addErrorMessage("bevestig astublieft dat we u gegevens mogen gebruiken");
})

function addErrorMessage(message){
    let responseDiv = document.getElementById("response");
    let element = document.createElement("p");
    element.innerHTML = message;
    responseDiv.appendChild(element);
}

function clearErrorMessages(){
    let responseDiv = document.getElementById("response");
    for(let i = 0 ; i < responseDiv.children.length ; ){
        responseDiv.children.item(0).remove();
    }
}
