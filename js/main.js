$(function () {

    TweenMax.to(".headercontent-p1", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".headercontent-h1-1", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".headercontent-h1-2", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".headercontent-btn", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header-image", .5, { delay: 2.5, transform: "scale(1)", opacity: 1 });

    var featuresdiv1 = new Waypoint({
        element: document.getElementById('featuresdiv1'),
        handler: function (down) {
            TweenMax.to(".featuresdiv1 h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".featuresdiv1 p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".featuresdiv1 .col-6", 1.2, { delay: 1, transform: "translateY(0)", opacity: 1 }, .3);
        },
        offset: '60%'
    });

    var featuresdiv2 = new Waypoint({
        element: document.getElementById('featuresdiv2'),
        handler: function (down) {
            TweenMax.to(".featuresdiv2 h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".featuresdiv2 p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".featuresdiv2 .col-4", .9, { delay: 1, transform: "translateY(0)", opacity: 1 }, .3);
            TweenMax.to(".featuresdiv2 .f2-img", .5, { delay: 1.9, transform: "scale(1)", opacity: 1 });
        },
        offset: '60%'
    });

    var featuresdiv3 = new Waypoint({
        element: document.getElementById('featuresdiv3'),
        handler: function (down) {
            TweenMax.to(".featuresdiv3 .row:nth-child(1) .col-md-6:nth-child(2)", .5, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".featuresdiv3 .row:nth-child(2) .col-md-6:nth-child(1)", .5, { delay: .5, transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    });

    var shop = new Waypoint({
        element: document.getElementById('shop'),
        handler: function (down) {
            TweenMax.to(".featuresdiv4 .f4-img", .5, { transform: "scale(1)", opacity: 1 });
            TweenMax.to(".featuresdiv4 h2", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".featuresdiv4 p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".featuresdiv4 .colorsdiv div", 1.2, { delay: 1.5, transform: "translateY(0)", opacity: 1 }, .3);
        },
        offset: '60%'
    });

    var customerreview = new Waypoint({
        element: document.getElementById('customerreview'),
        handler: function (down){
            TweenMax.to(".customerreview h2", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".customerreview .col-md-4", .9, { delay: .5, transform: "translateY(0)", opacity: 1 }, .3);
        },
        offset: '60%'
    });

    var features = new Waypoint({
        element: document.getElementById('features'),
        handler: function (down){
            TweenMax.to(".featuresdiv5 h2", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".featuresdiv5 p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".featuresdiv5 .col-6", 1.2, { delay: 1, transform: "translateY(0)", opacity: 1 }, .3);
            TweenMax.to(".featuresdiv5 .features5content2 img", .5, { delay: 2.2, transform: "translate(-50%,-50%) scale(1)", opacity: 1 });
            TweenMax.to(".featuresdiv5 .features5content2 h1", .5, { delay: 2.7, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".featuresdiv5 .features5content2 h4", .5, { delay: 3.2, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    });

    var contact = new Waypoint({
        element: document.getElementById('contact'),
        handler: function (down) {
            TweenMax.staggerTo(".footer .col-md-4", .9, { transform: "translateY(0)", opacity: 1 }, .3);
            // TweenMax.to(".footer .col-md-4", .5, { transform: "translateX(0)", opacity: 1 });
            // TweenMax.to(".featuresdiv3 .row:nth-child(2) .col-md-6:nth-child(1)", .5, { delay: .5, transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    });
});
