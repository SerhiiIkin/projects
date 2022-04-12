class ChatApi {
    static URL = "wss://fep-app.herokuapp.com";
    static socket = new WebSocket(this.URL);

    static send(userData) {
        ChatApi.socket.send(userData);
    }
}

export default ChatApi;
