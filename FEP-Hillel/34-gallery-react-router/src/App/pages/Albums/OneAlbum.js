import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function OneAlbum({ album }) {
    const [param] = useSearchParams();
    const id = param.get("userId");

    return (
        <div>
            <span key={album.id}>{album.title}</span>{" "}
            <button className="btn btn-danger">
                <Link
                    to={{
                        pathname: "/albums/photos",
                        search: `?userId=${id}&albumId=${album.id}`,
                    }}>
                    Photo
                </Link>
            </button>
        </div>
    );
}

export default OneAlbum;
