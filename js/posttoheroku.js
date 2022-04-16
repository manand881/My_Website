var RecievedForm = function (form) {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    let namevalue = name.value
    let emailvalue = email.value
    let messagevalue = message.value
    let data = {
        "name": namevalue,
        "email": emailvalue,
        "message": messagevalue
    }

    let xhr = new XMLHttpRequest();
    
}