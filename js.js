
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("sor");



    if (user !== "") {

    } else {
        alert("This site use cookie");
        user = ["1","2","3","4","5","6"];
        setCookie("sor", user, 30);
       kiiras();
    }
}
$(document).ready(function () {

    var kep =0;


      var sor=getCookie("sor");
      if (sor !== ''){
      

    var k=0;
    $.getJSON('items.json', function (data) {

        while (kep !==6) {
            $.each(data.items, function (i, f) {

                if (f.id === sor[kep+k]) {
                    $('#images').append("<a class='kepek' id=" + f.id + "  href=" + f.src + " data-lightbox= \"images\" data-title=" + f.description + "   > <img  src=" + f.src + " ></a>");
                    kep++;
                    k++;


                }


            });




        }

    });
      }
});


function kiiras () {

    var kep =0;


    var sor=getCookie("sor");
    if (sor !== ''){


        var k=0;
        $.getJSON('items.json', function (data) {

            while (kep !==6) {
                $.each(data.items, function (i, f) {

                    if (f.id === sor[kep+k]) {
                        $('#images').append("<a class='kepek' id=" + f.id + "  href=" + f.src + " data-lightbox= \"images\" data-title=" + f.description + "   > <img  src=" + f.src + " ></a>");
                        kep++;
                        k++;


                    }


                });




            }

        });
    }
}


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

            $('#images a').remove();

            if (filter === '') {
               kiiras();
            } else {


                $.getJSON('items.json', function (data) {
                    $.each(data.items, function (i, f) {
                        if (f.title.includes(filter) || f.description.includes(filter)) {
                            $('#images').append("<a class='kepek' id=" + f.id + "  href=" + f.src + " data-lightbox= \"images\" data-title=" + f.description + "   > <img  src=" + f.src + " ></a>");
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
    .on("dragend", function(el, target, src) {
        elems = []; // reset elems
        $('.kepek').each(function(i, obj) {
            //test
            elems.push(obj.id);

        });

        setCookie("sor", elems, 30);
        // validate that elems are in correct order
        // ...
    });


