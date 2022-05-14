import React from "react";

function OnePhotoAlbum({ photo }) {
    return <img key={photo.id} src={photo.thumbnailUrl} alt="Album photos" />;
}

export default OnePhotoAlbum;
