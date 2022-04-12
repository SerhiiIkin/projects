import $ from "jquery";
import TableListHtml from "./TableListHtml.html";
import TableHeaderHtml from "./TableHeaderHtml.html";

class ChatView {
    constructor() {
        this.$rootEl = this.initView();
    }

    initView() {
        return $(TableHeaderHtml);
    }

    appendTo($container) {
        $container.append(this.$rootEl);
    }

    showChatHtml(user) {
        const htmlStudent = this.replaceHtmlChat(user);

        this.$rootEl.append(htmlStudent);
    }

    replaceHtmlChat(user) {
        let html = TableListHtml.replace("user.name", user.name).replace(
            "user.message",
            user.message
        );

        return html;
    }
}

export default ChatView;
