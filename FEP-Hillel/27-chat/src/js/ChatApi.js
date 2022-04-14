class ChatApi {
    static URL = "wss://fep-app.herokuapp.com";
    static socket = new WebSocket(this.URL);
}

export default ChatApi;
