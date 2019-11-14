import Section from '../../core/section.js';
import CreateSmoke from '../../modules/smoke.js';


export default class SaferSection extends Section {

    resize() {
        this.isTouchDevice();
        this.initSmoke();
    }

    // SETUP -------------------------------------------------------------------

    _setupSection() {
        this.isAnimationFinished = true;
        this.isMobile = false;

        this.mobileSmoke = document.getElementById('mobile-smoke');

        this.isTouchDevice();
        this.initSmoke();
    }


    // STATE -------------------------------------------------------------------

    isTouchDevice() {
        if (window.innerWidth < 1024) {
            this.isMobile = true;
            this.mobileSmoke.style.opacity = 0.5;
            this.mobileSmoke.style.transform = 'translate(510px, 40px) scale(0.8)';
            if (this.smoke)
                this.smoke.pause();
        } else {
            this.isMobile = false;
            this.mobileSmoke.style.opacity = 0;
        }
    }

    initSmoke() {
        if (!this.isMobile) {
            this.smokingTube = document.querySelector('.smoking-tube');
            this.smokePosition = document.getElementById('smoke-position');
            this.smokePositionX = this.getCoords(this.smokePosition).left + 10;

            const canvasSettings = {
                canvasWidth: this.smokingTube.offsetWidth,
                canvasHeight: this.smokingTube.offsetHeight,
                emitterX: this.smokePositionX,
                emitterY: this.smokingTube.offsetHeight / 2,
            };

            const smokeSettings = {
                size: 1,
                startSize: 12,
                maxSize: 30,
                speed: 0.25,
                alpha: 1,
                angle: Math.random() * 359,
                startLife: new Date().getTime(),
                velYkoef: 20,
                velX: 1,
                maxLifeTime: 5200,
                minSpawnTime: 90,
            };

            if (this.smoke) {
                this.smoke.pause();
            }

            this.smoke = new CreateSmoke(document.getElementById('safer-smoke'), canvasSettings, smokeSettings);
            this.smoke.pause();
            this._activate();

        }

    }

    _activate() {

        this.smoke.play();

    }

    _deactivate() {
        if (this.isMobile) {
            return;
        }
        this.smoke.pause();
    }


    getCoords(elem) {
        const smokeCoords = elem.getBoundingClientRect();
        return {
            top: smokeCoords.top,
            left: smokeCoords.left
        };
    }
}



