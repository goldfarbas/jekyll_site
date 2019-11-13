let shLeftCoin = $('#sh_left_x5F_coin');
let shRightCoin = $('#sh_right_x5F_coin');
let shUpCoin = $('#sh_up_x5F_coin');

let spWheel = $('#sh_wheel');
let leftArrow = $('#Etherium');
let rightArrow = $('#arrow');

let shLeftEye = $('#sh_sp-left-eye');
let shRightEye = $('#sh_sp-right-eye');

let circleRight = $('#sh_sp-right-button');
let circleLeft = $('#sh_sp-left-button');
let strokes = $('.box-stroke');

let lenderPath = $('#sh_way_x5F_up');

let leftWheelPath = $('#sh_way_x5F_left');
let centerWheelPath = $('#sh_way_x5F_center');
let rightWheelPath = $('#sh_way_x5F_right');

function startAnimation() {

    timeline = new TimelineMax({ repeat: -1 });
    
    TweenLite.set(spWheel, { transformOrigin: 'center center' });
    TweenLite.set(strokes,{'stroke-dasharray': 40, 'stroke-dashoffset': -40});

    let strokesTl = new TimelineMax({ repeat: -1, repeatDelay: 0.9666, ease: Power4.ease });

    const coinSpeed = 0.8;
    const eyeSpeed = 0.3;
    const restartDelay = 2000;

    // coins 
    let upCoinLenderDown = moveByPAth(
        shUpCoin,
        lenderPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(shUpCoin, { autoAlpha: 1 });
            }
        }
    );

    let upCoinLeftWheel = moveByPAth(
        shUpCoin,
        leftWheelPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                shLeftEyeRight.reverse();
                TweenLite.set(shUpCoin, { autoAlpha: 1 });
            },
            onComplete: () => { shLeftEyeRight.pause() }
        },
        true
    );
    let rightCoinRightWheel = moveByPAth(
        shRightCoin,
        rightWheelPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                shRightEyeLeft.restart();
                TweenLite.set(shRightCoin, { autoAlpha: 1 });
            },
            onComplete: () => { shRightEyeLeft.pause() }
        },
        true
    );
    let rightCoinCenterWheel = moveByPAth(
        shRightCoin,
        centerWheelPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                setTimeout(() => { wheelTween.restart(); }, coinSpeed * 1000 - 200);
            },
        },
        true
    );
    let rightCoinLenderUp = moveByPAth(
        shRightCoin,
        lenderPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                setTimeout(() => { wheelTween.restart(); }, coinSpeed * 1000 - 200);
            },
        },
        true
    );

    let leftCoinLeftWheel = moveByPAth(
        shLeftCoin,
        leftWheelPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                shLeftEyeRight.restart();
                TweenLite.set(shLeftCoin, { autoAlpha: 1 });
                setTimeout(() => { wheelTween.restart(); }, coinSpeed * 1000 - 200);
            },
            onComplete: () => { shLeftEyeRight.pause(); }
        }
    );
    let leftCoinCentertWheel = moveByPAth(
        shLeftCoin,
        centerWheelPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                TweenLite.set(shLeftCoin, { autoAlpha: 1 });
                setTimeout(() => { wheelTween.restart(); }, coinSpeed * 1000 - 200);
            },
        }
    );
    let leftCoinRightWheel = moveByPAth(
        shLeftCoin,
        rightWheelPath,
        {
            duration: coinSpeed,
            ease: Power4.ease,
            onStart: () => {
                shRightEyeLeft.reverse();
                TweenLite.set(shLeftCoin, { autoAlpha: 1 });
                setTimeout(() => { wheelTween.restart(); }, coinSpeed * 1000 - 200);
            },
            onComplete: () => { shRightEyeLeft.pause() }
        }
    );
    let wheelTweenFirst = TweenLite.to(
        spWheel, 1, { rotation: 360 }

    );
    let wheelTween = TweenLite.to(
        spWheel, 1, { rotation: 720 }
    );

    // eyes

    let shLeftEyeRight = TweenLite
        .to(shLeftEye, 1, {
            x: 9
        });
    let shRightEyeLeft = TweenLite
        .to(shRightEye, 1, {
            x: -9
        });

    // ======== STROKES TIMELINE

    strokesTl
        .staggerTo(strokes, 0.5333, { 'stroke-dashoffset': 0 }, 0.02, 0)
        .staggerTo(strokes, 0.5333, { 'stroke-dashoffset': 40 }, 0.02, '+=0.4333');

    // ======== MAIN TIMELINE

    timeline
        .add(rightCoinRightWheel)
        .add(wheelTweenFirst)
        .add(upCoinLenderDown)
        .add(leftCoinLeftWheel)
        .add(leftCoinCentertWheel)
        .add(wheelTween)
        .add(leftCoinRightWheel)
        .add(getArrowsAnimation())
        .add(rightCoinCenterWheel)
        .add(rightCoinLenderUp)
        .add(upCoinLeftWheel)
}

function getArrowsAnimation() {
    arrowsTimeline = new TimelineMax({
        onStart: () => { TweenLite.to(shRightEye, 0.3, { y: '-=2' }); },
        onComplete: () => { TweenLite.to(shRightEye, 0.3, { y: '+=2', x: '-=9' }); },
    });

    leftArrowBlinkTween = TweenMax.to(leftArrow, 0.2, { autoAlpha: 0, yoyo: true, repeat: 5 });
    rightArrowBlinkTween = TweenMax.to(rightArrow, 0.2, { autoAlpha: 0, yoyo: true, repeat: 5 });

    circlesAppear = TweenLite.to([circleLeft, circleRight], 0.1, { fill: '#407BF7' });
    circlesDisappear = TweenLite.to([circleLeft, circleRight], 0.1, { fill: '#BED1F4' });

    return arrowsTimeline
        .add(circlesAppear)
        .add('appeared')
        .add(leftArrowBlinkTween, 'appeared')
        .add(rightArrowBlinkTween, 'appeared')
        .add(circlesDisappear);
}

function clearTweens() {
    timeline.kill();
    timeline.clear();

    strokesTl.kill();
    strokesTl.clear();

    clearParams();
}

function clearParams() {
    TweenLite.set(
        [
            shLeftCoin,
            shRightCoin,
            shUpCoin,
            shLeftEye,
            shRightEye,
            strokes
        ],
        { clearProps: 'all' }
    );
}
startAnimation();