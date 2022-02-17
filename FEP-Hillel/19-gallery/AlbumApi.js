class AlbumApi {
    static URL_ALBUM = "https://jsonplaceholder.typicode.com/albums";
    static URL_PHOTO = " https://jsonplaceholder.typicode.com/photos?albumId=";

    static listAlbum() {
        return fetch(this.URL_ALBUM).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't get album list`);
        });
    }

    static photoAlbum(id) {
        return fetch(this.URL_PHOTO + id).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't get photo`);
        });
    }
}

export default AlbumApi;
