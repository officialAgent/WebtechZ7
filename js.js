

$(document).ready(function () {

    $.getJSON('items.json', function (data) {
        $.each(data.items, function (i, f) {
            $('#images').append("<a  href=" + f.src + " data-lightbox= \"images\" data-title=" + f.description + "   > <img  src=" + f.src + " ></a>" );


        });
    });
});

/*
$(document).ready(function() {

    $.getJSON('items.json', function(data) {
        $.each(data.items, function(i, f) {
            $("#images").append("<img  src=" + f.src + " >");

        });
    });
});
*/

(function ($) {
    $(document).ready(function () {
        $("#inputT").keyup(function () {

            // Retrieve the input field text and reset the count to zero
            escape = function (text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            };

            var filter = escape($(this).val());

            $('#images img').remove();

            if (filter === '') {
                $.getJSON('items.json', function (data) {
                    $.each(data.items, function (i, f) {
                        $("#images").append("<img src=" + f.src + " >");

                    });
                });
            } else {


                $.getJSON('items.json', function (data) {
                    $.each(data.items, function (i, f) {
                        if (f.title.includes(filter) || f.description.includes(filter)) {
                            $("#images").append("<img src=" + f.src + " >");
                        } else {

                        }

                    });
                });
                // Loop through the comment list


            }
        });
    })
})(jQuery)

dragula([document.querySelector('#images')])


