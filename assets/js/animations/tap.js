
let coin1 = $('#coin_1');
let hdCoin1 = $('#hidden_coin_1');
let coin2 = $('#coin_2');

let coin1Path = $("#token_line_left");
let coin2Path = $("#token_line_right");

let cart1 = $('#token_cart_1');
let token_cart2 = $('#cart_2');

let cart1Path1 = $('#coin-1-way-1');
let cart1Path2 = $('#coin-1-way-2');
let cart2Path1 = $('#coin-2-way-1');
let cart2Path2 = $('#coin-2-way-2');

let cart1WithCoin = $('#cart1-with-coin');
let token_cart2WithCoin = $('#cart2-with-coin');


function startAnim() {

    const cartsSpeed = 1;
    const rightGreenDelay = 0.3;
    const fadeOutDuration = 0.1;
    timeline = new TimelineMax({ repeat: -1 });

    let coin1Tween = moveByPAth(
        coin1,
        coin1Path,
        {
            ease: Power4.ease,
            duration: cartsSpeed,
            autoAlpha: 1,
            onStart: () => {
                TweenLite.to(hdCoin1, 0, { autoAlpha: 0 });
            },
        },
        false
    );
    let cart1Tween = moveByPAth(
        cart1WithCoin,
        cart1Path1,
        {
            ease: Power4.ease,
            duration: cartsSpeed,
            autoAlpha: 1,
            onStart: () => {
                TweenLite.to(cart1WithCoin, 0, { autoAlpha: 1 });
            },

        },
        true
    );
    let cart1Tween2 = moveByPAth(
        cart1WithCoin,
        cart1Path2,
        {
            ease: Power4.ease,
            duration: cartsSpeed,
            autoAlpha: 1,
            onStart: () => {
                TweenLite.to(hdCoin1, 0, { autoAlpha: 0 });
            }, onComplete: () => {
                cart1Tweens();
            },
        },
        true
    );

    let coin2Tween = moveByPAth(
        coin2,
        coin2Path,
        {
            ease: Power4.ease,
            duration: cartsSpeed,
            autoAlpha: 1,
            onStart: () => {
                TweenLite.to(coin2, 0, { autoAlpha: 1 });
            },
            onComplete: () => {
                TweenLite.to(coin1, 0, { autoAlpha: 1 });
                TweenLite.to(coin2, 0, { autoAlpha: 0 });
                TweenLite.to(token_cart2, 0, { autoAlpha: 0 });
                TweenLite.to(token_cart2WithCoin, 0, { autoAlpha: 1 });
            }
        },
        true
    );


    let cart2Tween = moveByPAth(
        token_cart2,
        cart2Path1,
        {
            ease: Power4.ease,
            duration: cartsSpeed,
            autoAlpha: 1,
            onStart: () => {
                TweenLite.to(token_cart2, 0, { autoAlpha: 1 });
            },
        },
        true
    );
    let cart2Tween2 = moveByPAth(
        token_cart2WithCoin,
        cart2Path2,
        {
            ease: Power4.ease,
            duration: cartsSpeed,
            autoAlpha: 1,
            onComplete: () => {
                cart2Tweens();
            },
        },
        true
    );
    timeline
        .add(cart1Tween, '-=0.5')
        .add(cart2Tween)
        .add(coin2Tween, '-=0.5')
        .add(coin1Tween)
        .add(cart1Tween2)
        .add(cart2Tween2, '-=0.5')

}

function cart1Tweens() {
    TweenLite.set([
        coin1,
        hdCoin1,
        cart1,
        cart1WithCoin,
    ], { clearProps: 'all' });
}

function cart2Tweens() {
    TweenLite.set([
        coin2,
        token_cart2,
        token_cart2WithCoin,
    ], { clearProps: 'all' });
}

startAnim();