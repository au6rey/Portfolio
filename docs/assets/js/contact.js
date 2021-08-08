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

      $.ajax({
        cache: false,
        success: function () {
          console.log(grecaptcha.getResponse());
          var data = {
            service_id: "service_88lb8rs",
            template_id: "template_w95566d",
            user_id: "user_KuGTDa4ByzuG91N2OW7pr",
            accessToken: "2dd7d8cff2f758d2a94e59982235a445",
            template_params: {
              from_name: name,
              to_name: "Aubrey",
              message: message,
              subject: subject,
              reply_to: email,
              "g-recaptcha-response": grecaptcha.getResponse(),
            },
          };

          $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
          })
            .done(function () {
              alert("Your mail is sent!");
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
            })
            .fail(function (error) {
              alert("Oops... " + JSON.stringify(error));
              console.log(JSON.stringify(error));
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
            });
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
