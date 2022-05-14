import React from "react";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import usePhoto from "../../hooks/usePhoto";
import OnePhotoAlbum from "./OnePhotoAlbum";
import "./Photos.css";
import ErrorMessage from "../../components/ErrorMessage";

function Photos() {
    const [param] = useSearchParams();
    const id = param.get("albumId");
    const { photos, loading, textError } = usePhoto(id);

    if (textError) return ErrorMessage(textError);

    return (
        <>
            <h2>Photos</h2>
            <div>
                {loading ? (
                    <Spinner />
                ) : (
                    photos.map((photo) => (
                        <OnePhotoAlbum key={photo.id} photo={photo} />
                    ))
                )}
            </div>
        </>
    );
}

export default Photos;
