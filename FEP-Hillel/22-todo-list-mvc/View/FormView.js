class FormView {
    constructor(options) {
        this.options = options;
        this.$rootEl = this.initView();
    }

    initView() {
        return $(` <form class="form">
        <div class="input-container">
            <input class="input" type="text" />
        </div>

        <button type="submit" class="btn">Add text to list</button>
    </form>`).on("submit", (e) => this.onSubmitForm(e));
    }

    appendTo($container) {
        $container.append(this.$rootEl);
    }

    onSubmitForm(e) {
        e.preventDefault();
        let value = $(".input")[0].value;

        this.options.onSubmit(value);

        this.clearInput();
    }

    clearInput() {
        $(".input")[0].value = "";
    }
}

export default FormView;
