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

    appendTo($container) {
        $container.append(this.$rootEl);
    }

    onSubmitForm(e) {
        e.preventDefault();

        let input = e.target.querySelector("input");

        const newStudent = {
            name: input.value,
            marks: this.newStudentMarks(),
        };

        this.resetForm(input);

        this.options.onsubmit(newStudent);
    }

    newStudentMarks() {
        let newStudentMarks = [];

        for (let i = 0; i < 10; i++) {
            newStudentMarks[i] = 0;
        }

        return newStudentMarks;
    }

    resetForm(input) {
        input.value = "";
    }
}

export default FormView;
