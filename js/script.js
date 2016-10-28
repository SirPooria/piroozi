$(document).ready(function() {
    $('.checkradios-fontawesome').checkradios({
        radio: {
            iconClass: 'fa fa-check'
        }
    });
    //	............
    //	............ custom scroll bar
    $(window).on("load", function() {
        $(".tab-pane.side-news").mCustomScrollbar({
            theme: "dark"
        });
        setInterval(function() {
            var x = $('.get-size').outerHeight();
            $('.news-category.index .tab-pane.side-news').height(x - 57);
        }, 1000)
    });
    //	............
    //	............automaticaly copy menu to right-sidebar
    var x = $('.navigaion ul').clone();
    $('.right-sidebar').append(x);
    //	............
    //	............automaticaly copy left news box to left-sidebar
    var i = 0;
    for (i; i <= 3; i++) {
        var x = $('.desktop').find('li a').eq(i).text();
        $('.mobile').find('li a').eq(i).text(x);

    }
    var y = $('#hame').find('ul').clone();
    $('#all').html(y);
    var y = $('#dakheli').find('ul').clone();
    $('#internal').html(y);
    var y = $('#khareji').find('ul').clone();
    $('#external').html(y);
    var y = $('#ekhtesasi').find('ul').clone();
    $('#exclusive').html(y);
    //	............
    //	............ toggle right and left sidebars
    $(document).click(function(e) {
        if ($(e.target).is('.left-sidebar') || $(e.target).closest('.left-sidebar').length || $(e.target).is('.right-sidebar') || $(e.target).closest('.right-sidebar').length) {

        } else {
            $('.right-sidebar').removeClass('open');
            $('.left-sidebar').removeClass('open');
            $('.overlay').hide();
        }
    });

    $('.menu-btn').click(function(e) {
        e.stopImmediatePropagation();
        $('.right-sidebar').addClass('open');
        $('.overlay').show();
    });
    $('.news-btn').click(function(e) {
        e.stopImmediatePropagation();
        $('.left-sidebar').addClass('open');
        $('.overlay').show();
    });
    //	............
    //	............ create circle
    setInterval(function() {
        var x = $('.circle').width();
        $('.circle').height(x);
    }, 1000);

    //	............
    //	............ slick slider s

    $('.news-items-big').slick({
        dots: true,
        arrows: true
    });
    $('.news-items-little').slick({
        arrows: false,
        dots: false
    });

    $('.slider').slick({
        dots: true,
        arrows: true
    });
    //	............
    //	............

    var slickDots1 = $('.news-items-big .slick-dots');
    var slickNext1 = $('.news-items-big .slick-next');
    var slickPrev1 = $('.news-items-big .slick-prev');
    slickDots1.prepend(slickNext1).append(slickPrev1);
    var slickDots2 = $('.slider.one .slick-dots');
    var slickNext2 = $('.slider.one .slick-next');
    var slickPrev2 = $('.slider.one .slick-prev');
    slickDots2.prepend(slickNext2).append(slickPrev2);
    var slickDots3 = $('.slider.two .slick-dots');
    var slickNext3 = $('.slider.two .slick-next');
    var slickPrev3 = $('.slider.two .slick-prev');
    slickDots3.prepend(slickNext3).append(slickPrev3);
    var slickDots4 = $('.slider.three .slick-dots');
    var slickNext4 = $('.slider.three .slick-next');
    var slickPrev4 = $('.slider.three .slick-prev');
    slickDots4.prepend(slickNext4).append(slickPrev4);
    //	............
    //	............

    $('#callback-checkbox').checkradios({
        onChange: function(checked) {
            if (checked) {
                $('.status').html('Checked').css('color', 'green');
            } else {
                $('.status').html('Not Checked').css('color', 'red');
            }
        }

    });
    //	............
    //	............video js
    var options = {
        controlBar: {
            volumeMenuButton: {
                inline: false,
                vertical: true
            }
        }
    };
    videojs('my-video', options);
    $(".vjs-volume-menu-button-vertical").insertAfter($(".vjs-remaining-time"));
});