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
