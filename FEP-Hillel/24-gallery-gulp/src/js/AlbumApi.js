class AlbumApi {
    static URL = "https://jsonplaceholder.typicode.com/";

    static listAlbum() {
        return fetch(this.URL + "albums").then(this.checkRes);
    }

    static photoAlbum(id) {
        return fetch(this.URL + "photos?albumId=" + id).then(this.checkRes);
    }

    static checkRes(res) {
        return res.ok ? res.json() : new Error(`Can't get elements from list`);
    }
}
