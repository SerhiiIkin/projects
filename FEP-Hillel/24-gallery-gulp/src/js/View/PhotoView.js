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
