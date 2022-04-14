import ChatApi from "../ChatApi.js";

class Collection {
    constructor(config) {
        this.config = config;
        this.socket = ChatApi.socket;

        this.socket.onmessage = (e) => {
            this.config.onmessage(e.data);
        };
    }

    createMessage(userData) {
        this.socket.send(userData);
    }
}

export default Collection;
