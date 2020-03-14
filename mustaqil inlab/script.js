$(function() {
    $(".nav__li").mouseenter(function() {
        $(".nav__ul-2-1").slideToggle(200);
    })
    $(".nav__li").mouseleave(function() {
        $(".nav__ul-2-1").slideToggle(200);
    })
    $(".nav__li-1").mouseenter(function() {
        $(".nav__ul-2-2").slideToggle(200);
    })
    $(".nav__li-1").mouseleave(function() {
        $(".nav__ul-2-2").slideToggle(200);
    })

    $(".slide-1").click(function() {

        $(".slide").toggleClass("t");


    })

    $(".box").click(function() {

        $(".nav__ul").toggleClass("d");


    })

    $(".forma__p-1").click(function() {
        $(".forma").css("min-height", "40rem");
        // $(".forma").draggable({ axis: "x" });
        $(".fa-times-circle").css("display", "block");
        $(this).css("cursor", "grab");

    })

    $(".fa-times-circle").click(function() {
        $(".forma").css("min-height", "4rem");
        $(this).css("display", "none");
        $(".forma__p-1").css("cursor", "pointer");
    })
})