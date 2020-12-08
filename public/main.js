window.onload = function () {
    // helper for generating company info
    var emailSamples = {
        companies: ["Apple", "YouTube", "PayPal", "Netflix", "Hulu", "Spotify"],
    };

    // helper function to make a string of current date
    function getDate() {
        var d = new Date();
        return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    }

    // instructs the specified email to be generated
    document.getElementById('email').onclick = function () {
        // email templates to create the generated email
        var emailTemplate = [
            "To view a copy of this email in the cloud, go to the following address<br>" +
            "<a href=\"www.google.com\" > <h4>link here</h4></a >",

            "Thanks again for subscribing to " + emailSamples.companies[Math.floor(Math.random() * 6)] + " <br>Your free 12-months trial has ended, and you'll be charged $18.99/month starting today.<br>Click <a href=\"www.google.com\" >here</a > to manage your subscription.",

            "<a href=\"www.google.com\"><strong>Order details</strong></a><br> Order number: 7187370<br> Receipt date: " + getDate()
        ]

        document.getElementById("generatedEmail").value = emailTemplate[Math.floor(Math.random() * 3)];
    };

    document.getElementById('spear').onclick = function () {
        // email templates to create the generated email
        var spearTemplate = [
            "Hi, <br>We need to start planning for our upcoming meeting.<br>Please <a href=\"www.google.com\">send me your agenda items</a> as soon as you can.",

            "Thanks for using " + emailSamples.companies[Math.floor(Math.random() * 6)] + ". We are currently undergoing a major upgrade to our product line have a new service that we think you'll be interested in. Our new package includes a number of updates, such as premium support, improved data analysis, and state of the art security features.<hr>Currently, this service is being offered as a free trial. To update your account simply click the link below.<br><a href=\"www.google.com\"><h2> Update: (800) 555-2345</h2></a>",

            "<h1>TrustedBank</h1><p>Dear valued customer of TrustedBank,<br><br>We have received notice that you have recently attempted to withdraw the following amount from your checking account while in another country: $135.25.<br><br>If this information is not correct, someone unknown may have access to your account. As a safety measure, please visit our website via the link below to verify your personal information.<br><br><a href=\"www.google.com\"><h2> Click here</h2></a>"
        ]

        document.getElementById("generatedEmail").value = spearTemplate[Math.floor(Math.random() * 3)];
    };

    document.getElementById('whale').onclick = function () {
        // email templates to create the generated email
        var whaleTemplate = [
            "<h1>ACTION REQUIRED</h1><br><h3>Your investment account's security has been breached.</h3><br> Please update your authentication to access your portfolio.<hr></em>Investments Banking Inc.</em>",

            "<h1>Interal Revenue Systems IRS</h1><p>Dear Sir/Madam,<br><br>Out records indicate that you are a non - resident entity. As a result, you are exempted from United States of America Tax reporting and withholding, on interest paid on your bank account and other financial benefit held in the USA. We are required by law to update our records in order to rectify your exempt status.</p><br>" +
            "Therefore, you are to authenticate the following by completing form W-8BEN-E attached, and return to us as soon as possible through the below email:<br><br><mailto>antiphishing0@gmail.com</mailto>",

            "<h1>VIVA</h1><p>Dear Viva customer,<br><br>This email is to inform you of a recent update we made to our systems,<br>To avoid service interruption we require that you confirm your account as soon as possible.<br><br>Please take a moment to confirm your account by going to the following address:<br><br><a href=\"www.google.com\"><h2> Viva</h2></a></p>"
        ]

        document.getElementById("generatedEmail").value = whaleTemplate[Math.floor(Math.random() * 3)];
    };

    // sending an email to recipients, based on user list of recipients emails 
    document.getElementById('sub').onclick = function () {
        var recipients = document.getElementById("lname").value;
        // console.log(recipients);
        var recipientsList = recipients.split(" ");
        recipientsList.forEach(item => {
            Email.send({
                SecureToken: "81f4e12d-57ee-4327-9232-c43697819b41",
                To: item,
                From: "antiphishing0@gmail.com",
                Subject: "Dear " + item.substr(0, item.indexOf('@')),
                Body: document.getElementById("generatedEmail").value + "<br><em><span class=\"small\">Brought to you by AntiPhishing Trainer</span></em>"
            }).then(
                message => alert(message)
            );
        });

    };

}


