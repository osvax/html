import jquery from "jquery";

jQuery(function($) {
	
	$(function() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: !0,
        submitError: function(t, e, s) {},
        submitSuccess: function(t, e) {
            e.preventDefault();
            var s = $("input#name").val(),
                a = $("input#email").val(),
                n = $("input#phone").val(),
                c = $("textarea#message").val(),
                i = s;
            0 <= i.indexOf(" ") && (i = s.split(" ").slice(0, -1).join(" ")), $this = $("#sendMessageButton"), $this.prop("disabled", !0), $.ajax({
                url: "/form/form.php",
                type: "POST",
                data: {
                    name: s,
                    phone: n,
                    email: a,
                    message: c
                },
                cache: !1,
                success: function() {
                    $("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-success").append("<strong>Ваше сообщение успешно отправлено!. </strong>"), $("#success > .alert-success").append("</div>"), $("#contactForm").trigger("reset")
                },
                error: function() {
                    $("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append($("<strong>").text("Извините " + i + ", кажется, что почтовый сервер не отвечает. Пожалуйста, попробуйте позже!")), $("#success > .alert-danger").append("</div>"), $("#contactForm").trigger("reset")
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", !1)
                    }, 1e3)
                }
            })
        },
        filter: function() {
            return $(this).is(":visible")
        }
    }), $('a[data-toggle="tab"]').click(function(t) {
        t.preventDefault(), $(this).tab("show")
    })
}), $("#name").focus(function() {
    $("#success").html("");
	
});

});