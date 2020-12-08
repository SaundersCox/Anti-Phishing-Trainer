
window.onload = function(){

    // generating email message, based on user choice
    var generated = "";

    document.getElementById('email').onclick = function() {
        document.getElementById("generatedEmail").value = "IDK0";
        generated = "IDK0"
        console.log(generated)
    };

    document.getElementById('spear').onclick = function() {
        document.getElementById("generatedEmail").value = "IDK1";
        generated = "IDK1"
        console.log(generated)
    };

    document.getElementById('whale').onclick = function() {
        document.getElementById("generatedEmail").value = "IDK2";
        generated = "IDK2"
        console.log(generated)
    };

    // document.getElementById('smish').onclick = function() {
    //     document.getElementById("generatedEmail").value = "IDK3";
    //     generated = "IDK3"
    //     console.log(generated)
    // };

    // document.getElementById('angler').onclick = function() {
    //     document.getElementById("generatedEmail").value = "IDK4";
    //     generated = "IDK4"
    //     console.log(generated)
    // };


    // sending an email to recipients, based on user list of recipients emails 
    document.getElementById('sub').onclick = function() {             
        var recipients = document.getElementById("lname").value;
        // console.log(recipients);
        var recipientsList = recipients.split(" ");
        recipientsList.forEach(item => {
            Email.send({
                SecureToken : "6ca1ac5d-a4af-44e3-8725-53371ef5ff89",
                To : item,
                From : "antiphishing0@gmail.com",
                Subject : "I'm your BOSS!",
                Body : "give me your stuff, just to verify stuff"
            }).then(
              message => alert(message)
            );
        });

    };

}


