var cboxOptions = {
    width: '95%',
    height: '95%',
    maxWidth: '960px',
    maxHeight: '960px',
}

$('.cbox-link').colorbox(cboxOptions);

$(window).resize(function(){
    $.colorbox.resize({
        width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
        height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
    });
});
function lightbox() {
    //Examples of how to assign the Colorbox event to elements
    $(".group1").colorbox({rel: 'group1'});
    $(".group2").colorbox({rel: 'group2', transition: "fade"});
    $(".group3").colorbox({rel: 'group3', transition: "none", width: "75%", height: "75%"});
    $(".kepek").colorbox({rel: 'kepek', slideshow: true, width: "75%", height: "75%"});
    $(".ajax").colorbox();
    $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
    $(".vimeo").colorbox({iframe: true, innerWidth: 500, innerHeight: 409});
    $(".iframe").colorbox({iframe: true, width: "80%", height: "80%"});
    $(".inline").colorbox({inline: true, width: "50%"});
    $(".callbacks").colorbox({
        onOpen: function () {
            alert('onOpen: colorbox is about to open');
        },
        onLoad: function () {
            alert('onLoad: colorbox has started to load the targeted content');
        },
        onComplete: function () {
            alert('onComplete: colorbox has displayed the loaded content');
        },
        onCleanup: function () {
            alert('onCleanup: colorbox has begun the close process');
        },
        onClosed: function () {
            alert('onClosed: colorbox has completely closed');
        }
    });

    $('.non-retina').colorbox({rel: 'group5', transition: 'none'})
    $('.retina').colorbox({rel: 'group5', transition: 'none', retinaImage: true, retinaUrl: true});

    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function () {
        $('#click').css({
            "background-color": "#f00",
            "color": "#fff",
            "cursor": "inherit"
        }).text("Open this window again and this message will still be here.");
        return false;
    });
};


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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
    var user = getCookie("sor");


    if (user !== "") {

    } else {
        alert("This site use cookie");
        user = ["1", "2", "3", "4", "5", "6"];
        setCookie("sor", user, 30);
        kiiras();

    }
}

$(document).ready(function () {

    var kep = 0;


    var sor = getCookie("sor");
    if (sor !== '') {


        var k = 0;
        $.getJSON('items.json', function (data) {

            while (kep !== 6) {
                $.each(data.items, function (i, f) {

                    if (f.id === sor[kep + k]) {
                        $('#images').append("<a class='kepek' id=" + f.id + "  href=" + f.src + " title='<h4>"+f.title+"</h4> "+f.description+" '  > <img  src=" + f.src + " ></a>");
                        kep++;
                        k++;


                    }


                });


            }
            lightbox();

        });
    }
});


function kiiras() {

    var kep = 0;


    var sor = getCookie("sor");
    if (sor !== '') {


        var k = 0;
        $.getJSON('items.json', function (data) {

            while (kep !== 6) {
                $.each(data.items, function (i, f) {

                    if (f.id === sor[kep + k]) {
                        $('#images').append("<a class='kepek' id=" + f.id + "  href=" + f.src + "  title=" +  f.description + "   > <img  src=" + f.src + " ></a>");
                        kep++;
                        k++;


                    }


                });


            }
            lightbox();
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
                            $('#images').append("<a class='kepek' id=" + f.id + "  href=" + f.src + "  title=" +  f.description + "   > <img  src=" + f.src + " ></a>");
                        } else {

                        }

                    });
                    lightbox();
                });
                // Loop through the comment list


            }
        });
    })
})(jQuery)

dragula([document.querySelector('#images')])
    .on("dragend", function (el, target, src) {
        elems = []; // reset elems
        $('.kepek').each(function (i, obj) {
            //test
            elems.push(obj.id);

        });

        setCookie("sor", elems, 30);
        // validate that elems are in correct order
        // ...
    });


