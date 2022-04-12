import ChatView from "../View/ChatView.js";
import FormView from "../View/FormView.js";
import Collection from "../Model/Collection.js";

class Controller {
    constructor($container) {
        this.$container = $container;

        this.collection = new Collection();
        this.chatView = new ChatView();

        this.formView = new FormView({
            onsubmit: (userData) => {
                this.collection.createMessage(userData);
            },
        });

        this.chatView.appendTo(this.$container);
        this.formView.appendTo(this.$container);

        this.collection.socket.onmessage = (e) => {
            let serverUserData = JSON.parse(e.data);
            this.chatView.showChatHtml(serverUserData);
        };
    }
}

export default Controller;
