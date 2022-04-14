import ChatView from "../View/ChatView.js";
import FormView from "../View/FormView.js";
import Collection from "../Model/Collection.js";

class Controller {
    constructor($container) {
        this.$container = $container;

        this.collection = new Collection({
            onmessage: (data) => this.chatView.showChatHtml(JSON.parse(data)),
        });
        this.chatView = new ChatView();

        this.formView = new FormView({
            onsubmit: (userData) => {
                this.collection.createMessage(userData);
            },
        });

        this.chatView.appendTo(this.$container);
        this.formView.appendTo(this.$container);
    }
}

export default Controller;
