$(function () {
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      // var data = {
      //   service_id: "service_88lb8rs",
      //   template_id: "template_w95566d",
      //   user_id: "user_KuGTDa4ByzuG91N2OW7pr",
      //   template_params: {
      //     from_name: name,
      //     to_name: "Aubrey",
      //     message: message,
      //     subject: subject,
      //     reply_to: email,
      //     "g-recaptcha-response": capres,
      //   },
      // };
      // var templateParams = {
      //   from_name: name,
      //   to_name: "Aubrey",
      //   message: message,
      //   subject: subject,
      //   reply_to: email,
      //   "g-recaptcha-response": capres,
      // }
      $.ajax({
        cache: false,
        success: function () {
          // console.log(grecaptcha.getResponse());
          emailjs
            .send(
              "service_88lb8rs",
              "template_w95566d",
              {
                from_name: name,
                to_name: "Aubrey",
                message: message,
                subject: subject,
                reply_to: email,
              },
              "user_KuGTDa4ByzuG91N2OW7pr"
            )
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success")
                  .html(
                    "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                  )
                  .append("</button>");
                $("#success > .alert-success").append(
                  "<strong>Your message has been sent. </strong>"
                );
                $("#success > .alert-success").append("</div>");
                $("#contactForm").trigger("reset");
              },
              function (error) {
                console.log("FAILED...", error);
                $("#success").html("<div class='alert alert-danger'>");
                $("#success > .alert-danger")
                  .html(
                    "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                  )
                  .append("</button>");
                $("#success > .alert-danger").append(
                  $("<strong>").text(
                    "Sorry " +
                      name +
                      ", we could not send the email. Please try again later!"
                  )
                );
                $("#success > .alert-danger").append("</div>");
                $("#contactForm").trigger("reset");
              }
            );
        },
        error: function () {
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-danger").append(
            $("<strong>").text(
              "Sorry " +
                name +
                ", it seems that our mail server is not responding. Please try again later!"
            )
          );
          $("#success > .alert-danger").append("</div>");
          $("#contactForm").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  $("#success").html("");
});
