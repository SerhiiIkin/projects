import { useState, useEffect } from "react";
import Api from "../services/Api";

function usePhoto(id) {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [textError, setTextError] = useState("");

    useEffect(() => {
        Api.photoAlbum(id)
            .then((photosList) => {
                setPhotos(photosList);
                setLoading(false);
            })
            .catch((e) => setTextError(e.message));
    }, [id]);

    return {
        photos,
        loading,
        textError,
    };
}

export default usePhoto;
