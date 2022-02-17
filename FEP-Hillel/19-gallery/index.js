import AlbumApi from "./AlbumApi.js";

const photoHtml = document.querySelector("#photo").innerHTML;
const albumHtml = document.querySelector("#album").innerHTML;
const albumList = document.querySelector(".list-album");
const photoAlbum = document.querySelector(".photo-album");
const CURRENT_ALBUM_ID = 1;

albumList.addEventListener("click", onAlbumListClick);

function onAlbumListClick(e) {
    if (e.target.classList.contains("list-album__title")) {
        const photoList = e.target
            .closest(".container")
            .querySelectorAll(".photo__img");
        const listEl = e.target;

        clearPhotosList(photoList);
        showPhotos(listEl.dataset.id);
    }
}

function clearPhotosList(photoList) {
    photoList.forEach((photo) => photo.remove());
}

showAlbumList();
showPhotos(CURRENT_ALBUM_ID);

function showAlbumList() {
    AlbumApi.listAlbum().then((albumList) => {
        showAlbumListHtml(albumList);
    });
}

function showAlbumListHtml(album) {
    const html = album.map(replaceHtmlAlbum).join("");

    albumList.insertAdjacentHTML("beforeend", html);
}

function replaceHtmlAlbum(album) {
    return albumHtml
        .replace("{{title}}", album.title)
        .replace("{{id}}", album.id);
}

function showPhotos(id) {
    AlbumApi.photoAlbum(id).then((photo) => {
        showPhotosHtml(photo);
    });
}

function showPhotosHtml(photo) {
    const html = photo.map(replaceHtmlPhoto).join("");

    photoAlbum.insertAdjacentHTML("beforeend", html);
}

function replaceHtmlPhoto(photo) {
    return photoHtml.replace("{{url}}", photo.thumbnailUrl);
}
