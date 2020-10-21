import React, { memo } from "react";
import "./Images.scss";
import { Link } from "react-router-dom";

function Images({ data, media_type }) {
    const common =
        data?.name ||
        data?.title ||
        data?.original_name ||
        data?.original_title;

    let newData = data;

    if (media_type !== undefined) {
        newData = { ...data, media_type };
    }

    return (
        <Link to={`/details/${newData.id}`}>
            <img
                className="poster"
                key={newData.id}
                alt={
                    newData?.name ||
                    newData?.title ||
                    newData?.original_name ||
                    newData?.original_title
                }
                src={
                    "poster_path" in newData === false
                        ? `https://fakeimg.pl/200x300/?text=${common}`
                        : newData.poster_path === undefined
                        ? `https://fakeimg.pl/200x300/?text=${common}`
                        : newData.poster_path === null
                        ? `https://fakeimg.pl/200x300/?text=${common}`
                        : `https://image.tmdb.org/t/p/w500${newData.poster_path}`
                }
                loading="lazy"
                onClick={() => {
                    window.sessionStorage.setItem(
                        "contentType",
                        newData.media_type
                    );
                }}
            />
        </Link>
    );
}

export default memo(Images);
