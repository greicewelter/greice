(function ($) {
    "use strict";

    // Fixed username and password values
    var fixedUsername = "teste";
    var fixedPassword = "teste123";

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        // Get the entered username and password
        var enteredUsername = $('#username').val().trim();
        var enteredPassword = $('#password').val().trim();

        // Check if the entered values match the fixed values
        if (enteredUsername !== fixedUsername || enteredPassword !== fixedPassword) {
            showValidate(input);
            check = false;
        }

        return check;
    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);