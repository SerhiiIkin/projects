import React from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import OneAlbum from "./OneAlbum.js";
import Photos from "../Photos/Photos.js";
import Spinner from "../../components/Spinner.js";
import useAlbum from "../../hooks/useAlbum.js";
import ErrorMessage from "../../components/ErrorMessage";
import "./Albums.css";

function Albums() {
    const [param] = useSearchParams();
    const id = param.get("userId");
    const { albums, loading, textError } = useAlbum(id);

    if (textError) return ErrorMessage(textError);

    return (
        <>
            <div className="albums__container">
                <div className="album__list">
                    <h2>Album list</h2>
                    <div>
                        {loading ? (
                            <Spinner />
                        ) : (
                            albums.map((album) => (
                                <OneAlbum key={album.id} album={album} />
                            ))
                        )}
                    </div>
                </div>
                <div>
                    <Routes>
                        <Route path="/photos" element={<Photos />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Albums;
