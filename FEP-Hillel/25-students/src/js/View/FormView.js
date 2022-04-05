class FormView {
    constructor(options) {
        this.options = options;
        this.$rootEl = this.initView();
    }

    initView() {
        return $(`<form>
        <input class="input" type="text" />
        <button type="submit">Save</button>
    </form>`).on("submit", (e) => this.onSubmitForm(e));
    }

    onSubmitForm(e) {
        e.preventDefault();

        let input = e.target.querySelector("input");

        const newStudent = {
            name: input.value,
            marks: this.newStudentMarks(),
        };

        input.value = "";

        this.options.onsubmit(newStudent);
    }

    newStudentMarks() {
        let newStudentMarks = [];

        for (let i = 0; i < 10; i++) {
            newStudentMarks[i] = 0;
        }

        return newStudentMarks;
    }

    appendTo($container) {
        $container.append(this.$rootEl);
    }
}
