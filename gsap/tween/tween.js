// http://gregfranko.com/jquery-best-practices

// IIFE - Immediately Invoked Function Expression
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife
(function (f) {

    // The global jQuery object is passed as a parameter
    f(window.jQuery, window, document);

}(function ($, window, document) {

    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    // https://learn.jquery.com/using-jquery-core/document-ready/
    $(function () {

        console.log('The DOM is ready');

        var tl = new TimelineLite();

        var circle = $('.circle');
        var squares = $('.square');
        var bar = $('.bar');

        TweenLite.to(circle, 2, {
            y: "100%",
            ease: Power1.easeInOut,
            delay: 1
        });

        tl.staggerFrom(squares, 2, {
                x: -500,
                rotation: "-=600",
                ease: Power1.easeInOut,
                autoAlpha: -3 // fade in
            }, 0.1)
            .fromTo(bar, 5, {
                y: -100
            }, {
                bezier: {
                    type: "soft",
                    values: [{
                        x: 150,
                        y: 300
                    }, {
                        x: 200,
                        y: 100
                    }, {
                        x: 260,
                        y: 300
                    }, {
                        x: 330,
                        y: 140
                    }],
                    autoRotate: [["x", "y", "rotation", 0, false],
                    ["x", "y", "rotation", 90, false],
                    ["x", "y", "rotation", -180, false],
                    ["x", "y", "rotation", 0, false]]
                },
                ease: Power1.easeOut
            });

    });

    console.log('The DOM may not be ready');

}));
