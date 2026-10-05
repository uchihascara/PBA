
function openContactModal() {

    $("#contactModal").popup("open");

}


function closeContactModal() {

    $("#contactModal").popup("close");

}


$(document).on("submit", "#contactForm", function(event) {

    event.preventDefault();


    var name =
        $("#contactName").val().trim();


    var email =
        $("#contactEmail").val().trim();


    var message =
        $("#message").val().trim();


    var consent =
        $("#consent").is(":checked");


    var error = "";





    if (name === "") {

        error = "Please enter your name.";

    }




    else if (email === "") {

        error = "Please enter your email.";

    }




    else if (!email.includes("@")) {

        error = "Please enter a valid email.";

    }




    else if (message === "") {

        error = "Please enter your message.";

    }




    else if (!consent) {

        error =
            "Please agree to the privacy consent.";

    }




    if (error !== "") {

        $("#contactError")
            .css("color", "red")
            .text(error);

    }


    else {

        $("#contactError")
            .css("color", "green")
            .text(
                "Message submitted successfully!"
            );


        $("#contactForm")[0].reset();

    }

});




$(document).on("submit", "#bookingForm", function(event) {

    event.preventDefault();


    var name =
        $("#bookingName").val().trim();


    var phone =
        $("#phone").val().trim();


    var email =
        $("#bookingEmail").val().trim();


    var date =
        $("#travelDate").val();


    var participants =
        $("#participants").val();


    var package =
        $("#tourPackage").val();




    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        date === "" ||
        participants === "" ||
        package === ""
    ) {


        $("#bookingMessage")
            .css("color", "red")
            .text(
                "Please complete all booking information."
            );

    }



    else {


        $("#bookingMessage")
            .css("color", "green")
            .text(
                "Booking submitted successfully!"
            );


        $("#bookingForm")[0].reset();

    }

});