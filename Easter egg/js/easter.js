$(document).ready(function() {
    var items = ["images/monkas.jpg", "images/waltuh.jpg", "images/cnpanda.jpg", "images/sonic.gif"];
    // we map the images to have specific, fitting tooltip to better hint to their reference.
    var tooltipMap = {
        "images/waltuh.jpg": "Yo mr.white",
        "images/monkas.jpg": ">be me.",
        "images/cnpanda.jpg": "H-Huh?!",
        "images/sonic.gif": "Gotta go fast!"
    };

    var clickCount = 0;

    // we generate a random number here, 5 per click.
    function generateRandomImages() {
        for (var i = 0; i < 5; i++) {
            var divsize = ((Math.random() * 10) + 30).toFixed();
            var rot = Math.random() * 360;
            var h = Number(divsize) + 20;
            var posx = (Math.random() * ($(document).width())).toFixed();
            var posy = (Math.random() * ($(document).height())).toFixed();

            // selects one of the predefine items in "randomItems"...wait for it..randomly.
            var randomItem = items[Math.floor(Math.random() * items.length)];
            
            // we could get rid of this line but, to look more professional we will keep it ;)
            var randomTooltip = tooltipMap[randomItem] || "there's no predefined lines";

            // Create an image element and append it to the body of the html with it's apropriate message or tooltip based on the map
            var img = $('<img class="spawned-image" src="' + randomItem + '">').css({
                'width': divsize + 'px',
                'height': h + 'px',
                'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px',
                'z-index': 999,
                'transform': 'rotate(' + rot + 'deg)'
            }).attr('title', randomTooltip).appendTo('body');
        }

    }

    // when we click the specific html element with id "Btn", we increment a counter.."
    $("#Btn").click(function() {
        clickCount++;
            // if the element has been pressed once, we display random images in random areas on the site.
        if (clickCount <= 1) {
            generateRandomImages();
        } else {
            /* if we click more than once or 0 times, it means that the easter are already displayed, so a 2nd click will remove them
                this is in order to avoid filling the screen with easters if we spam click the element, we want to create an easter, not a nightmare :p */
            $(".spawned-image").remove();
            // Reset click count before we leave
            clickCount = 0;
        }
    });

        // for better quality upgrade, we also remove the spawned elements when we click outside of the element that spawned them in the first place.
        $(document).click(function(event) {
            if (!$(event.target).closest("#Btn").length && clickCount >= 1) {
                $(".spawned-image").remove();
                // Reset click count before we leave also.
                clickCount = 0;
            }
    });

});
