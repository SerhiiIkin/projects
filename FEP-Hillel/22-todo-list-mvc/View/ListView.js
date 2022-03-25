class ListView {
    static CHANGE_BG_EL = "color";
    static TODO_ITEM_SELECTOR = ".list__row";

    constructor(options) {
        this.options = options;
        this.$rootEl = this.initView();
    }

    initView() {
        return $(`<ul></ul>`).on("click", ".btn__del", (e) =>
            this.onBtnDelClick(e)
        );
    }

    appendTo($container) {
        $container.append(this.$rootEl);
    }

    onBtnDelClick(e) {
        const id = this.getTodoElId(e.target);

        this.options.onDelete(id);
    }

    getListHtml(list) {
        const html = list.map(this.todoHtml).join("");

        this.$rootEl.html(html);
    }

    todoHtml(todoList) {
        const trueStatus = todoList.status ? ListView.CHANGE_BG_EL : "";

        return `<li data-id="${todoList.id}" class= "list__row">
        <span  data-status="${todoList.status}" class = "list__text ${trueStatus}">${todoList.title}</span>
        <button class="btn__del" type="button"> Delete</button>
        </li>`;
    }

    getTodoElId(el) {
        return el.closest(ListView.TODO_ITEM_SELECTOR).dataset.id;
    }
}

export default ListView;
