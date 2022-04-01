class Collection {
    #list = [];

    fetch() {
        return AlbumApi.listAlbum().then((list) => this.setList(list));
    }

    setList(list) {
        this.#list = list;
    }

    getList() {
        return this.#list;
    }
}
