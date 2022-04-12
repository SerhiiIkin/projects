import ChatApi from "../ChatApi.js";

class Collection {
    socket = ChatApi.socket;

    createMessage(userData) {
        this.socket.send(userData);
    }
}

export default Collection;
