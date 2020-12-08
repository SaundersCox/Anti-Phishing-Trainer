var prefix = 'https://us2.admin.mailchimp.com/';



// Antiphishing0
// 


$(document).ready(function () {
    $("#email").click(function () {
        $("#generatedEmail").text("Email Phishing");
    });
    $("#spear").click(function () {
        $("#generatedEmail").text("Spear Phishing");
    });
    $("#whale").click(function () {
        $("#generatedEmail").text("Whale Phishing");
    });
    $("#smish").click(function () {
        $("#generatedEmail").text("Smishing and Vishing");
    });
    $("#angler").click(function () {
        $("#generatedEmail").text("Angler Phishing");
    });

    let endpoint = 'https://api.linkpreview.net'
    let apiKey = '79947b122cdc62890074e0b0fc7f033a-us2'

    console.log('hello');
    console.log(process.env.API_KEY);

    $(".content a").each(function (index, element) {

        $.ajax({
            url: endpoint + "?key=" + apiKey + " &q=" + $(this).text(),
            contentType: "application/json",
            dataType: 'json',
            success: function (result) {
                console.log(result);
            }
        })
    });
});

var mandrill = require('node-mandrill')(apiKey);

function sendEmail(_name, _email, _subject, _message) {
    mandrill('/messages/send', {
        message: {
            to: [{ email: _email, name: _name }],
            from_email: 'noreply@yourdomain.com',
            subject: _subject,
            text: _message
        }
    }, function (error, response) {
        if (error) console.log(error);
        else console.log(response);
    });
}

// define your own email api which points to your server.

app.post('/api/sendemail/', function (req, res) {

    var _name = req.body.name;
    var _email = req.body.email;
    var _subject = req.body.subject;
    var _messsage = req.body.message;

    //implement your spam protection or checks. 

    sendEmail(_name, _email, _subject, _message);

});

