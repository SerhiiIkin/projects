class Controller {
    constructor($container) {
        this.$container = $container;

        this.collection = new Collection();
        this.studentsView = new StudentsView({
            onDelete: (item) => {
                item.remove();
                this.collection.delete(item.dataset.id);
            },

            mouseOut: (id, student) => {
                this.collection.update(id, student);
            },
        });
        this.formView = new FormView({
            onsubmit: (newStudent) => {
                this.collection.create(newStudent);
                this.studentsView.showOneStudentHtml(newStudent);
            },
        });

        this.studentsView.appendTo(this.$container);
        this.formView.appendTo(this.$container);
        this.collection.fetch().then(() => this.getList());
    }

    getList() {
        this.studentsView.showStudentsListHtml(this.collection.getList());
    }
}
