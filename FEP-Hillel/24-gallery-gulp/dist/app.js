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

class Controller {
    constructor($container) {
        this.$container = $container;

        this.collection = new Collection();
        this.photoView = new PhotoView();
        this.albumView = new AlbumView({
            onClick: (listEl) => {
                this.photoView.clearPhotosList(listEl);
                this.photoView.showPhoto(listEl.dataset.id);
            },
        });

        this.albumView.appendTo(this.$container);
        this.photoView.appendTo(this.$container);
        this.collection.fetch().then(() => this.getList());
    }

    getList() {
        this.albumView.showAlbumListHtml(this.collection.getList());
    }
}

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

class AlbumView {
    constructor(options) {
        this.options = options;
        this.$rootEl = this.initView();
    }

    initView() {
        return $(`<ul>
        <h2>Album Titles</h2>
    </ul>`).on("click", ".list-album__title", (e) => this.onAlbumListClick(e));
    }

    appendTo($container) {
        $container.append(this.$rootEl);
    }

    onAlbumListClick(e) {
        e.preventDefault();

        const listEl = e.target;

        this.options.onClick(listEl);
    }

    showAlbumListHtml(album) {
        const html = album.map(this.replaceHtmlAlbum).join("");

        this.$rootEl.append(html);
    }

    replaceHtmlAlbum(album) {
        return `<li class="list-album__item"><span data-id="${album.id}" class="list-album__title">${album.title}</span> </li>`;
    }
}

class PhotoView {
    static CURRENT_ALBUM_ID = 1;
    constructor() {
        this.$elPhoto = this.getPhotoAlbum();

        this.showPhoto(PhotoView.CURRENT_ALBUM_ID);
    }

    getPhotoAlbum() {
        return $(`<div class="photo-album"><h2>Photos</h2></div>`);
    }

    appendTo($container) {
        $container.append(this.$elPhoto);
    }

    showPhoto(id) {
        AlbumApi.photoAlbum(id).then((photos) => this.showPhotosHtml(photos));
    }

    showPhotosHtml(photo) {
        const html = photo.map(this.replaceHtmlPhoto).join("");

        this.$elPhoto.append(html);
    }

    replaceHtmlPhoto(photo) {
        return `<img class="photo__img" src="${photo.thumbnailUrl}">`;
    }

    clearPhotosList(listEl) {
        const photoList = listEl
            .closest("#container")
            .querySelectorAll(".photo__img");

        photoList.forEach((photo) => photo.remove());
    }
}

new Controller($("#container"));
