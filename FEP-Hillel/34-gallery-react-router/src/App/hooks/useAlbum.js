import { useState, useEffect } from "react";
import Api from "../services/Api";

function useAlbum(id) {
    const [albums, setAlbums] = useState([]);

    const [loading, setLoading] = useState(true);
    const [textError, setTextError] = useState("");

    useEffect(() => {
        Api.listAlbum(id)
            .then((albumList) => {
                setLoading(false);
                setAlbums(albumList);
            })
            .catch((e) => setTextError(e.message));
    }, [id]);

    return {
        albums,
        loading,
        textError,
    };
}

export default useAlbum;
