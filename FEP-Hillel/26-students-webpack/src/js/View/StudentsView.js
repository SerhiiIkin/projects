import $ from "jquery";
import StudentsApi from "../StudentsApi";
import TableListHtml from "./TableListHtml.html";
import TableHeaderHtml from "./TableHeaderHtml.html";

class StudentsView {
    constructor(options) {
        this.options = options;
        this.$rootEl = this.initView();

        this.$rootEl.on("focusout", ".inputMark", (e) => this.onInputOut(e));
        this.$rootEl.on("click", ".btnDel", (e) => this.onBtnDelClick(e));
    }

    initView() {
        return $(TableHeaderHtml);
    }

    appendTo($container) {
        $container.append(this.$rootEl);
    }

    onInputOut(e) {
        const item = this.getItem(e);
        const id = item.dataset.id;
        const num = e.target.dataset.num;
        const value = e.target.value;

        StudentsApi.listStudents().then((students) => {
            let student = this.findStudent(students, id);
            let markNumber = Object.keys(student.marks).find(
                (item) => item === num
            );

            student.marks[markNumber] = value;

            this.options.mouseOut(id, student);
        });
    }

    findStudent(students, id) {
        return students.find((student) => student.id === id);
    }

    onBtnDelClick(e) {
        const el = this.getItem(e);

        this.options.onDelete(el);
    }

    getItem(e) {
        return e.target.closest("tr");
    }

    showStudentsListHtml(students) {
        const htmlList = students.map(this.replaceHtmlStudent).join("");

        this.$rootEl.append(htmlList);
    }

    showOneStudent(student) {
        const htmlStudent = this.replaceHtmlStudent(student);

        this.$rootEl.append(htmlStudent);
    }

    replaceHtmlStudent(student) {
        const num = Object.keys(student.marks);
        let html = TableListHtml.replace("student.id", student.id).replace(
            "student.name",
            student.name
        );

        for (let i = 0; i < num.length; i++) {
            const number = num[i];

            html = html
                .replace("{num}", number)
                .replace(`{student.marks}`, student.marks[i]);
        }

        return html;
    }

    updateId(newStudent) {
        const newEl = $(`tr[data-id="undefined"]`)[0];

        newEl.dataset.id = newStudent.id;
    }
}

export default StudentsView;
