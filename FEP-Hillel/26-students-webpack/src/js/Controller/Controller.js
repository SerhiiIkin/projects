import StudentsView from "../View/StudentsView.js";
import FormView from "../View/FormView.js";
import Collection from "../Model/Collection.js";

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
            onsubmit: (createdStudent) => {
                this.collection.create(createdStudent).then((student) => {
                    this.studentsView.showOneStudent(student.newStudent);
                    student.setId.then(() => this.studentsView.updateId(student.newStudent));
                });
            },
        });

        this.studentsView.appendTo(this.$container);
        this.formView.appendTo(this.$container);
        this.collection.fetch().then(() => this.showList());
    }

    showList() {
        this.studentsView.showStudentsListHtml(this.collection.getList());
    }
}

export default Controller;
