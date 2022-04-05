class StudentsView {
    constructor(options) {
        this.options = options;
        this.$rootEl = this.initView();

        this.$rootEl.on("focusout", ".inputMark", (e) => this.onInputOut(e));
        this.$rootEl.on("click", ".btnDel", (e) => this.onBtnDelClick(e));
    }

    initView() {
        return $(`<table><tr class="header">
        <td>Student's name</td>
        <td>Marks</td>
        <td>Options</td>
    </tr></table>`);
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
        const html = students.map(this.replaceHtmlStudent).join("");

        this.$rootEl.append(html);
    }

    replaceHtmlStudent(student) {
        const num = Object.keys(student.marks);

        return `<tr data-id="${student.id}">
        <td>${student.name}</td>
        <td>
            <input class="inputMark" data-num="${num[0]}" value="${student.marks[0]}" type="text" />
            <input class="inputMark" data-num="${num[1]}" value="${student.marks[1]}" type="text" />
            <input class="inputMark" data-num="${num[2]}" value="${student.marks[2]}" type="text" />
            <input class="inputMark" data-num="${num[3]}" value="${student.marks[3]}" type="text" />
            <input class="inputMark" data-num="${num[4]}" value="${student.marks[4]}" type="text" />
            <input class="inputMark" data-num="${num[5]}" value="${student.marks[5]}" type="text" />
            <input class="inputMark" data-num="${num[6]}" value="${student.marks[6]}" type="text" />
            <input class="inputMark" data-num="${num[7]}" value="${student.marks[7]}" type="text" />
            <input class="inputMark" data-num="${num[8]}" value="${student.marks[8]}" type="text" />
            <input class="inputMark" data-num="${num[9]}" value="${student.marks[9]}" type="text" />
        </td>
        <td> <button class="btnDel">Delete</button></td>
    </tr>`;
    }

    showOneStudentHtml(student) {
        const html = this.replaceHtmlStudent(student);

        this.$rootEl.append(html);
    }
}
