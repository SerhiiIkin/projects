import Collection from "../Model/Collection.js";
import FormView from "../View/FormView.js";
import ListView from "../View/ListView.js";

class Controller {
    constructor($container) {
        this.$container = $container;

        this.collection = new Collection();
        this.listView = new ListView({
            onDelete: (id) =>
                this.collection.delete(id).then(() => this.getList()),
        });
        this.formView = new FormView({
            onSubmit: (value) =>
                this.collection.submit(value).then(() => this.getList()),
        });

        this.listView.appendTo(this.$container);
        this.collection.fetch().then(() => this.getList());
        this.formView.appendTo(this.$container);
    }

    getList() {
        this.listView.getListHtml(this.collection.getList());
    }
}

export default Controller;
