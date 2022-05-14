class Api {
    static URL = "https://jsonplaceholder.typicode.com/";

    static photoAlbum(id) {
        return fetch(this.URL + "photos?albumId=" + id).then(this.checkRes);
    }

    static listUsers() {
        return fetch(this.URL + "users").then(this.checkRes);
    }

    static listAlbum(id) {
        return fetch(this.URL + "albums?userId=" + id).then(this.checkRes);
    }

    static checkRes(res) {
        return res.ok ? res.json() : new Error(`Can't get elements from list`);
    }
}

export default Api;
