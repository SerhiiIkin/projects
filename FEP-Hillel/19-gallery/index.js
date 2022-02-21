import AlbumApi from "./AlbumApi.js";

const CURRENT_ALBUM_ID = 1;

const photoHtml = document.querySelector("#photo").innerHTML;
const albumHtml = document.querySelector("#album").innerHTML;
const albumList = document.querySelector(".list-album");
const photoAlbum = document.querySelector(".photo-album");

showAlbumList();
showPhotos(CURRENT_ALBUM_ID);

albumList.addEventListener("click", onAlbumListClick);

function showAlbumList() {
    AlbumApi.listAlbum().then(showAlbumListHtml).catch(handleError);
}

function showPhotos(id) {
    AlbumApi.photoAlbum(id).then(showPhotosHtml).catch(handleError);
}

function onAlbumListClick(e) {
    e.preventDefault();

    if (e.target.classList.contains("list-album__title")) {
        const listEl = e.target;

        clearPhotosList(listEl);
        showPhotos(listEl.dataset.id);
    }
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

function showPhotosHtml(photo) {
    const html = photo.map(replaceHtmlPhoto).join("");

    photoAlbum.insertAdjacentHTML("beforeend", html);
}

function replaceHtmlPhoto(photo) {
    return photoHtml.replace("{{url}}", photo.thumbnailUrl);
}

function clearPhotosList(listEl) {
    const photoList = listEl
        .closest(".container")
        .querySelectorAll(".photo__img");

    photoList.forEach((photo) => photo.remove());
}

function handleError(e) {
    console.log(e.message);
}
