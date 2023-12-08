$(document).ready(function() {
    var clickCount = 0;
    var coin = $("#mg");
    var gameAudio = $("#GameAudio")[0]; // Get the raw DOM element for audio

    // each time we click the element with the text or value "coin" we incremment the counter.
    coin.click(function() {
        clickCount++;

        // the condition is that, if we click the element coin 3 times, the easter triggers.
        if (clickCount === 3) {
            // activate the mini-game 
            playMiniGame();
        }
    });

    // Function to play the mini-game
    function playMiniGame() {
        /* we noticed that when we use the arrows to play the mini game, the website scrolls, so we can simply use overflow so that
            the screens stays still and the mini game becomes more immersive*/
        $('body').css('overflow', 'hidden');

        // Reset the click counter to 0.
        clickCount = 0;

        // Play the audio that serves as a background music to the mini game, for more immersion.
        gameAudio.play();

        // Create a small window for the mini game
        var tetrisWindow = $('<div id="tetris-window"></div>').css({
            'position': 'fixed',
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)',
            'width': '600px',
            'height': '600px',
            'background-color': '#f0f0f0',
            'border': '2px solid #333',
            'z-index': '1000',
            'overflow': 'hidden'
        }).appendTo('body');

        // Create an iframe for the mini game
        var tetrisIframe = $('<iframe>').css({
            'width': '100%',
            'height': '100%',
            'border': 'none'
        }).attr('src', 'https://kubowania.github.io/Tetris/'); // the source for the mini game, we mainly prepared a frame or a small window within the website to display it on, with a button to close it when we are done.

        // Append the iframe to the mini game window
        tetrisWindow.append(tetrisIframe);

        // we added a button to close the window and exit the mini game.
        var closeButton = $('<button id="close-button">Close</button>').css({
            'position': 'absolute',
            'top': '10px',
            'right': '10px',
            'padding': '5px',
            'cursor': 'pointer'
        }).appendTo(tetrisWindow);

        // when we click the close button of he mini game, we can return to scrolling the website normally, because we disabled it as stated earlier.
        closeButton.click(function() {
            $('body').css('overflow', 'auto');

            gameAudio.pause(); // we also close the mini game music when we close the window.
            tetrisWindow.remove();
        });
    }
});
