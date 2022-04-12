import $ from "jquery";
import FormHtml from "./FormHtml.html";

class FormView {
    constructor(options) {
        this.options = options;
        this.$rootEl = this.initView();

        this.$rootEl.on("submit", (e) => this.onSubmitForm(e));
    }

    initView() {
        return $(FormHtml);
    }

    onSubmitForm(e) {
        e.preventDefault();

        let inputName = e.target.querySelector(".input__name");
        let inputMessage = e.target.querySelector(".input__message");

        const user = JSON.stringify({
            name: inputName.value,
            message: inputMessage.value,
        });

        this.resetForm(inputMessage);

        this.options.onsubmit(user);
    }

    appendTo($container) {
        $container.append(this.$rootEl);
    }

    resetForm(input) {
        input.value = "";
    }
}

export default FormView;
