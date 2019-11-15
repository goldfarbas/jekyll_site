let bigWheel = $('#big-wheel');

var targetWheel = document.getElementById('visible-wheel');


var options = {
    threshold: 0
};

function startRotateWheel() {
    let timeline = new TimelineMax();
    TweenLite.set(bigWheel, { transformOrigin: 'center center' });
    let allAnimation = new TimelineMax({ repeat: -1 })
        .to(bigWheel, 10, { ease: Power0.easeNone, rotation: 360 });

    timeline
        .add(allAnimation)
}


if (targetWheel && window.innerWidth > 1024) {
    startRotateWheel();
}