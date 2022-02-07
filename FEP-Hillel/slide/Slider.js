class Slider {
    #slider;
    #backBtn;
    #forwardBtn;

    static OPEN_FROM_LEFT = "openL";
    static OPEN_FROM_RIGTH = "openR";

    constructor(sliderUrl) {
        this.#slider = document.querySelector(sliderUrl);
        this.container = this.#slider.children[0];
        this.#backBtn = this.container.children[1];
        this.#forwardBtn = this.container.children[2];
        this.content = this.container.children[0];
        this.slides = this.content.children;
        this.index = 0;

        this.addClassBody();

        this.#forwardBtn.addEventListener("click", (e) =>
            this.onForwardBtnClick(e)
        );
        this.#backBtn.addEventListener("click", (e) => this.onBackBtnClick(e));

        setInterval(() => {
            if (this.index === 0) {
                this.onForwardBtnClick();
            }
            if (this.index === this.slides.length - 1) {
                this.onBackBtnClick();
            }
        }, 3000);
    }

    addClassBody() {
        this.container.classList.add("slider__container");
        this.content.classList.add("slider__content");
        this.#backBtn.classList.add("btn", "btn__back");
        this.#forwardBtn.classList.add("btn", "btn__forward");
        this.slides[this.index].classList.add(Slider.OPEN_FROM_RIGTH);

        this.hideOrVisBackBtn();

        for (let slide of this.slides) {
            slide.classList.add("slide");
        }

        for (let i = 1; i < this.#slider.children.length; i++) {
            const element = this.#slider.children[i];
            element.classList.add("slider__btn");
        }
    }

    onForwardBtnClick() {
        let i = this.index;
        this.index += 1;

        this.removeClass(
            this.slides[i],
            Slider.OPEN_FROM_RIGTH,
            Slider.OPEN_FROM_LEFT
        );
        this.addClass(this.slides[i], "left");
        this.addClass(this.slides[this.index], Slider.OPEN_FROM_RIGTH);

        this.hideOrVisFowardBtn();
        this.hideOrVisBackBtn();
    }

    onBackBtnClick() {
        let i = this.index;
        this.index -= 1;

        this.removeClass(
            this.slides[i],
            Slider.OPEN_FROM_RIGTH,
            Slider.OPEN_FROM_LEFT
        );
        this.removeClass(this.slides[this.index], "left");
        this.addClass(this.slides[this.index], Slider.OPEN_FROM_LEFT);

        this.hideOrVisFowardBtn();
        this.hideOrVisBackBtn();
    }

    addClass(item, ...arg) {
        arg.forEach((el) => item.classList.add(el));
    }

    removeClass(item, ...arg) {
        arg.forEach((el) => item.classList.remove(el));
    }

    hideOrVisBackBtn() {
        if (this.index <= 0) {
            this.addClass(this.#backBtn, "none");
        } else {
            this.removeClass(this.#backBtn, "none");
        }
    }

    hideOrVisFowardBtn() {
        if (this.index >= this.slides.length - 1) {
            this.addClass(this.#forwardBtn, "none");
        } else {
            this.removeClass(this.#forwardBtn, "none");
        }
    }
}

export default Slider;
