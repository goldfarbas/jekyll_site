let inCoinLeft1 = $('#in_left_coin1');
let inCoinLeft2 = $('#in_left_coin2');
let inCoinLeft3 = $('#in_left_coin3');
let inCoinLeft4 = $('#in_left_coin4');
let inCoinLeft5 = $('#in_left_coin5');
let inCoinLeft6 = $('#in_left_coin6');
let inCoinLeft7 = $('#in_left_coin7');
let inCoinLeft8 = $('#in_left_coin8');

let inCoinRight1 = $('#in_right_coin1');
let inCoinRight2 = $('#in_right_coin2');
let inCoinRight3 = $('#in_right_coin3');
let inCoinRight4 = $('#in_right_coin4');
let inCoinRight5 = $('#in_right_coin5');
let inCoinRight6 = $('#in_right_coin6');
let inCoinRight7 = $('#in_right_coin7');
let inCoinRight8 = $('#in_right_coin8');

let lineDown1 = $('#line_down1');
let lineDown2 = $('#line_down2');
let lineDown3 = $('#line_down3');
let lineDown4 = $('#line_down4');

let leftDown1 = $('#down_left_1');
let leftDown2 = $('#down_left_2');
let leftDown3 = $('#down_left_3');

let rightDown1 = $('#down_right_1');
let rightDown2 = $('#down_right_2');
let rightDown3 = $('#down_right_3');

let lineLeft1 = $('#line_left1');
let lineLeft2 = $('#line_left2');
let lineLeft3 = $('#line_left3');

let lineRight1 = $('#line_right1');
let lineRight2 = $('#line_right2');
let lineRight3 = $('#line_right3');

let dotLeft = $('#dot_left');
let dotRight = $('#dot_right');

let in_cart1Way1 = $('#in_cart1_way1');
let in_cart2Way1 = $('#in_cart2_way1');
let in_cart3Way1 = $('#in_cart3_way1');
let in_cart4Way1 = $('#in_cart4_way1');

let in_cart1Way2 = $('#in_cart1_way2');
let in_cart2Way2 = $('#in_cart2_way2');
let in_cart3Way2 = $('#in_cart3_way2');
let in_cart4Way2 = $('#in_cart4_way2');

let in_cart1_with_coin = $('#in_cart1_with_coin');
let in_cart2_with_coin = $('#in_cart2_with_coin');
let in_cart3_with_coin = $('#in_cart3_with_coin');
let in_cart4_with_coin = $('#in_cart4_with_coin');

let in_cart1 = $('#in_cart_1');
let in_cart2 = $('#in_cart_2');
let in_cart3 = $('#in_cart_3');
let in_cart4 = $('#in_cart_4');

const defOptions = {
    xPercent: 0,
    yPercent: 4
};
const defOptionsinContainer = {
    autoAlpha: 1,
    xPercent: 0,
    yPercent: 0
};

function animateInsured() {

    let timeline = new TimelineMax();
    let timelineRepeat = new TimelineMax({ repeat: -1 });
    const coinSpeed = 1;
    const coinSpeedinContainer = 0.6;
    const coinSpeedinTrumpet = 0.3;

    TweenLite.set(
        [inCoinLeft5, inCoinLeft6, inCoinLeft7, inCoinRight5, inCoinRight6, inCoinRight7],
        { xPercent: 0, yPercent: 0 });

    let resetPrecentinCoinLeft8 = moveByPAth(
        inCoinLeft8,
        dotLeft,
        {
            defOptionsinContainer
        }
    );
    let resetPrecentinCoinRight8 = moveByPAth(
        inCoinRight8,
        dotRight,
        {
            defOptionsinContainer
        }
    );

    let CoinLeft1WayLeft1 = moveByPAth(
        inCoinLeft1,
        lineLeft1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft1, { autoAlpha: 1 });
                TweenLite.set(
                    [inCoinLeft5, inCoinLeft6, inCoinLeft7, inCoinLeft8, inCoinRight5, inCoinRight6, inCoinRight7, inCoinRight8],
                    { autoAlpha: 1 });
                TweenLite.set(
                    [inCoinLeft5, inCoinLeft6, inCoinLeft7, inCoinRight5, inCoinRight6, inCoinRight7],
                    { xPercent: 0, yPercent: 0 });
            },

        }
    );
    let CoinLeft1WayDown4 = moveByPAth(
        inCoinLeft1,
        lineDown4,
        {
            duration: coinSpeedinTrumpet,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft1, { autoAlpha: 1 });
            },
            onComplete: () => {
                TweenLite.set(in_cart4, { autoAlpha: 0 });
                TweenLite.set(in_cart4_with_coin, { autoAlpha: 1 });
            }

        }
    );
    let CoinLeft2WayLeft1 = moveByPAth(
        inCoinLeft2,
        lineLeft1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft2, { autoAlpha: 1 });
            },

        }
    );

    let CoinLeft3WayLeft2 = moveByPAth(
        inCoinLeft3,
        lineLeft2,
        {
            duration: coinSpeedinContainer,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft3, { autoAlpha: 1 });
            },

        },
        true
    );
    let CoinLeft4WayLeft3 = moveByPAth(
        inCoinLeft4,
        lineLeft3,
        {
            duration: 0.1,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft4, { autoAlpha: 1 });
            }
        }
    );
    let CoinLeft8WayDown2 = moveByPAth(
        inCoinLeft8,
        lineDown2,
        {
            duration: coinSpeedinTrumpet,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft8, { autoAlpha: 1 });
            },
            onComplete: () => {
                TweenLite.set(in_cart2, { autoAlpha: 0 });
                TweenLite.set(in_cart2_with_coin, { autoAlpha: 1 });
                TweenLite.set(inCoinLeft8, { autoAlpha: 0 });

            },
            defOptionsinContainer
        }
    );
    let CoinRight1WayRight1 = moveByPAth(
        inCoinRight1,
        lineRight1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight1, { autoAlpha: 1 });
            }
        }
    );

    let CoinRight1WayDown1 = moveByPAth(
        inCoinRight1,
        lineDown1,
        {
            duration: coinSpeedinTrumpet,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight1, { autoAlpha: 1 });
            },
            onComplete: () => {
                TweenLite.set(in_cart1, { autoAlpha: 0 });
                TweenLite.set(in_cart1_with_coin, { autoAlpha: 1 });
            }

        }
    );
    let CoinRight2WayRight1 = moveByPAth(
        inCoinRight2,
        lineRight1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight2, { autoAlpha: 1 });
            }
        }
    );

    let CoinRight3WayRight2 = moveByPAth(
        inCoinRight3,
        lineRight2,
        {
            duration: coinSpeedinContainer,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight3, { autoAlpha: 1 });
            }
        },
        false
    );

    let CoinRight4WayRight3 = moveByPAth(
        inCoinRight4,
        lineRight3,
        {
            duration: 0.1,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight4, { autoAlpha: 1 });
            }
        }
    );
    let CoinRight8WayDown3 = moveByPAth(
        inCoinRight8,
        lineDown3,
        {
            duration: coinSpeedinTrumpet,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight8, { autoAlpha: 1 });
            },
            onComplete: () => {
                TweenLite.set(in_cart3, { autoAlpha: 0 });
                TweenLite.set(in_cart3_with_coin, { autoAlpha: 1 });
                TweenLite.set(inCoinRight8, { autoAlpha: 0 });

            },
            defOptionsinContainer
        }
    );
    //move 
    let inCoinLeft5Down = TweenLite
        .to(inCoinLeft5, 0.1, {
            ease: Power0.easeNone,
            x: -237.3,
            y: 31.7
        });
    let inCoinLeft6Down = TweenLite
        .to(inCoinLeft6, 0.1, {
            ease: Power0.easeNone,
            x: -268.8,
            y: 33.1
        });
    let inCoinLeft7Down = TweenLite
        .to(inCoinLeft7, 0.1, {
            ease: Power0.easeNone,
            x: -240,
            y: 32
        });
    let inCoinRight5Down = TweenLite
        .to(inCoinRight5, 0.1, {
            ease: Power0.easeNone,
            x: -237.3,
            y: 31.87
        });
    let inCoinRight6Down = TweenLite
        .to(inCoinRight6, 0.1, {
            ease: Power0.easeNone,
            x: -268.8,
            y: 33
        });
    let inCoinRight7Down = TweenLite
        .to(inCoinRight7, 0.1, {
            ease: Power0.easeNone,
            x: -237.6,
            y: 30
        });

    let inCart1Way1 = moveByPAth(
        in_cart1,
        in_cart1Way1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(in_cart1, { autoAlpha: 1 });
            }
        }
    );
    let inCart2Way1 = moveByPAth(
        in_cart2,
        in_cart2Way1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(in_cart2, { autoAlpha: 1 });
            }
        }
    );
    let inCart3Way1 = moveByPAth(
        in_cart3,
        in_cart3Way1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(in_cart3, { autoAlpha: 1 });
            }
        }
    );
    let inCart4Way1 = moveByPAth(
        in_cart4,
        in_cart4Way1,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(in_cart4, { autoAlpha: 1 });
            }
        }
    );
    let inCart1Way2 = moveByPAth(
        in_cart1_with_coin,
        in_cart1Way2,
        {
            duration: 0.8,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight1, { autoAlpha: 0 });
                TweenLite.set(in_cart1, { autoAlpha: 0 });
            },
            defOptions,
            onComplete: () => {
                TweenLite.set([
                    inCoinLeft1,
                    inCoinLeft2,
                    inCoinLeft3,
                    inCoinLeft4,
                    inCoinRight1,
                    inCoinRight2,
                    inCoinRight3,
                    inCoinRight4,
                    in_cart1,
                    in_cart2,
                    in_cart3,
                    in_cart4
                ], { clearProps: 'all' });
                TweenLite.set(in_cart1_with_coin, { autoAlpha: 0 });
                TweenLite.set(in_cart2_with_coin, { autoAlpha: 0 });
                TweenLite.set(in_cart3_with_coin, { autoAlpha: 0 });
                TweenLite.set(in_cart4_with_coin, { autoAlpha: 0 });
                TweenLite.set(in_cart1_with_coin, { xPercent: -46, yPercent: -54 });
                TweenLite.set(in_cart2_with_coin, { xPercent: -35, yPercent: -53 });
                TweenLite.set(in_cart3_with_coin, { xPercent: -52, yPercent: -53 });
                TweenLite.set(in_cart4_with_coin, { xPercent: -44, yPercent: -54 });
                TweenLite.set([inCoinLeft5, inCoinLeft6, inCoinLeft7, inCoinLeft8], { autoAlpha: 1 });
                TweenLite.set([inCoinRight5, inCoinRight6, inCoinRight7, inCoinRight8], { autoAlpha: 1 });

                TweenLite.set(inCoinLeft5, defOptionsinContainer);
                TweenLite.set(inCoinLeft6, defOptionsinContainer);
                TweenLite.set(inCoinLeft7, defOptionsinContainer);
                TweenLite.set(inCoinLeft8, { xPercent: -55, yPercent: -80 }); //-90

                TweenLite.set(inCoinRight5, defOptionsinContainer);
                TweenLite.set(inCoinRight6, defOptionsinContainer);
                TweenLite.set(inCoinRight7, defOptionsinContainer);
                TweenLite.set(inCoinRight8, { xPercent: -50, yPercent: -65 }); //-50 -50
            },

        }
    );
    let inCart2Way2 = moveByPAth(
        in_cart2_with_coin,
        in_cart2Way2,
        {
            duration: 0.7,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft8, { autoAlpha: 0 });
                TweenLite.set(in_cart2, { autoAlpha: 0 });
            },
            defOptions
        }
    );
    let inCart3Way2 = moveByPAth(
        in_cart3_with_coin,
        in_cart3Way2,
        {
            duration: 0.6,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinRight8, { autoAlpha: 0 });
                TweenLite.set(in_cart3, { autoAlpha: 0 });
            },
            defOptions
        }
    );
    let inCart4Way2 = moveByPAth(
        in_cart4_with_coin,
        in_cart4Way2,
        {
            duration: 0.5,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(inCoinLeft1, { autoAlpha: 0 });
                TweenLite.set(in_cart4, { autoAlpha: 0 });
            },
            defOptions
        }
    );

    timeline
        .add(resetPrecentinCoinLeft8)
        .add(resetPrecentinCoinRight8)

    timelineRepeat
        .add(CoinLeft1WayLeft1, '-=0.2')
        .add(CoinRight1WayRight1, '-=0.4')

        .add(CoinLeft3WayLeft2, '+=0.2')
        .add(CoinRight3WayRight2, '+=0.2')

        .add(inCart4Way1, '-=1.6')
        .add(inCart3Way1, '-=1.8')
        .add(inCart2Way1, '-=1.6')
        .add(inCart1Way1, '-=1.6')

        .add(CoinLeft1WayDown4, '+=0.4')
        .add(CoinRight1WayDown1, '-=1.0')

        .add(CoinLeft2WayLeft1, '-=1')
        .add(CoinRight2WayRight1, '-=0.8')
        .add(CoinLeft4WayLeft3, '-=0.5')

        .add(CoinLeft8WayDown2, '-=0.8')
        .add(CoinRight4WayRight3, '-=0.6')
        .add(CoinRight8WayDown3, '-=0.8')

        .add(inCoinLeft7Down, '-=1.0')
        .add(inCoinLeft6Down, '-=0.8')
        .add(inCoinLeft5Down, '-=0.6')
        .add(inCoinRight7Down, '-=0.8')
        .add(inCoinRight6Down, '-=0.8')
        .add(inCoinRight5Down, '-=0.6')

        .add(inCart4Way2, '-=0.2')
        .add(inCart3Way2, '-=0.4')
        .add(inCart2Way2, '-=0.4')
        .add(inCart1Way2, '-=0.4');

}

var targetInsured = document.getElementById('visible-insured');
var options = {
    threshold: 0
};

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            animateInsured();
        }
    });
}, options);

if (targetInsured && window.innerWidth > 579) {
    observer.observe(targetInsured);
}