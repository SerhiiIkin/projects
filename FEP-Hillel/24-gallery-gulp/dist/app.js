class AlbumApi{static URL="https://jsonplaceholder.typicode.com/";static listAlbum(){return fetch(this.URL+"albums").then(this.checkRes)}static photoAlbum(t){return fetch(this.URL+"photos?albumId="+t).then(this.checkRes)}static checkRes(t){return t.ok?t.json():new Error("Can't get elements from list")}}class Controller{constructor(t){this.$container=t,this.collection=new Collection,this.photoView=new PhotoView,this.albumView=new AlbumView({onClick:t=>{this.photoView.clearPhotosList(t),this.photoView.showPhoto(t.dataset.id)}}),this.albumView.appendTo(this.$container),this.photoView.appendTo(this.$container),this.collection.fetch().then(()=>this.getList())}getList(){this.albumView.showAlbumListHtml(this.collection.getList())}}class Collection{#list=[];fetch(){return AlbumApi.listAlbum().then(t=>this.setList(t))}setList(t){this.#list=t}getList(){return this.#list}}class AlbumView{constructor(t){this.options=t,this.$rootEl=this.initView()}initView(){return $(`<ul>
        <h2>Album Titles</h2>
    </ul>`).on("click",".list-album__title",t=>this.onAlbumListClick(t))}appendTo(t){t.append(this.$rootEl)}onAlbumListClick(t){t.preventDefault();t=t.target;this.options.onClick(t)}showAlbumListHtml(t){t=t.map(this.replaceHtmlAlbum).join("");this.$rootEl.append(t)}replaceHtmlAlbum(t){return`<li class="list-album__item"><span data-id="${t.id}" class="list-album__title">${t.title}</span> </li>`}}class PhotoView{static CURRENT_ALBUM_ID=1;constructor(){this.$elPhoto=this.getPhotoAlbum(),this.showPhoto(PhotoView.CURRENT_ALBUM_ID)}getPhotoAlbum(){return $('<div class="photo-album"><h2>Photos</h2></div>')}appendTo(t){t.append(this.$elPhoto)}showPhoto(t){AlbumApi.photoAlbum(t).then(t=>this.showPhotosHtml(t))}showPhotosHtml(t){t=t.map(this.replaceHtmlPhoto).join("");this.$elPhoto.append(t)}replaceHtmlPhoto(t){return`<img class="photo__img" src="${t.thumbnailUrl}">`}clearPhotosList(t){const o=t.closest("#container").querySelectorAll(".photo__img");o.forEach(t=>t.remove())}}new Controller($("#container"));