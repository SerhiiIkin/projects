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
