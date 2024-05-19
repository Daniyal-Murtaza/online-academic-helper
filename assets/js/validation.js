/* Sign In */
$("#signInForm").validate({
    rules: {
        fullname: {
            // minlength: 7,
            required: !0,
        },
        phone: {
            minlength: 7,
            required: !0,
        }
    },
    highlight: function(e, i, t) {
        $(e).closest(".input-group").addClass("has-error")
        $("#signInForm button").attr("disabled", true);
    },
    unhighlight: function(e, i, t) {
        $(e).closest(".input-group").removeClass("has-error")
        $("#signInForm button").attr("disabled", false);
    },
    errorPlacement: function (e, i) {
        i.parent(".input-group").length || "checkbox" === i.prop("type") || "radio" === i.prop("type") ? e.insertAfter(i.parent()) : e.insertAfter(i)
    },
    submitHandler: function (e) {   
        $("#signInForm button").html("Processing..."),
        $("#signInForm button").prop("disabled", !0);

        var i = $(e).serializeArray();

        $.ajax({
            url: "https://liftmygrades.com/includes/inc/textme.php",
            type: "POST",
            data: i,
            success: function (e) {
                // debugger;
                $("#signInForm__header").hide();
                window.location = 'https://liftmygrades.com/thank-you.php';
            },
            error: function () {
                $("#signInForm__header").html('<div class="alert alert-danger alert-dismissible mt-4"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>There is error while submit</div>')
            }
        })
    }
});

// Contact Page Form
$("#contactForm").validate({
    rules: {
        name: {
            required: !0
        },
        email: {
            required: !0,
            email: !0
        },
        phone: {
            required: !0
        }, 
        message: {
            required: !0
        },
    },
    highlight: function(e, i, t) {
        $(e).closest(".form-control").addClass("has-error")
        $("#contactForm button").attr("disabled", true);
    },
    unhighlight: function(e, i, t) {
        $(e).closest(".form-control").removeClass("has-error")
        $("#contactForm button").attr("disabled", false);
    },
    errorPlacement: function (e, i) {
        i.parent(".input-group").length || "checkbox" === i.prop("type") || "radio" === i.prop("type") ? e.insertAfter(i.parent()) : e.insertAfter(i)
    },
    submitHandler: function (e) {
        $("#contactForm button span").html("Processing..."),
        $("#contactForm button").prop("disabled", !0);
        var i = $(e).serializeArray();
        $.ajax({
            url: "https://liftmygrades.com/includes/inc/contact.php",
            type: "POST",
            data: i,
            success: function (e) {
                $("#contactForm__header").hide(),
                window.location = 'https://liftmygrades.com/thank-you.php';
            },
            error: function () {
                $("#contactForm__header").html('<div class="alert alert-danger alert-dismissible mt-4"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>There is error while submit</div>')
            }
        })
    }
});