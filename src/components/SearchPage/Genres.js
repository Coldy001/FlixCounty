import React, { useEffect, useState } from "react";
import axios from "axios";
import { movieDiscover, tvDiscover } from "../../api/Links";
import Common from "./Common";
import "./Genres.scss";

function Genres() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [contentType, setContentType] = useState("movie");
    const genresList =
        contentType === "movie"
            ? Object.keys(movieDiscover)
            : Object.keys(tvDiscover);
    const [genreType, setGenreType] = useState(genresList[0]);

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setGenreType(genresList[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentType]);

    useEffect(() => {
        setPage(1);
    }, [genreType]);

    const fetch = async () => {
        if (contentType === "movie") {
            const request = await axios.get(
                `${movieDiscover[genreType]}&page=${page}`
            );
            setTotalPages(request.data.total_pages);
            setData(request.data.results);
        } else {
            const request = await axios.get(
                `${tvDiscover[genreType]}&page=${page}`
            );
            setTotalPages(request.data.total_pages);
            setData(request.data.results);
        }
    };

    useEffect(() => {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const genreHandler = (event) => {
        setGenreType(event.target.value);
    };

    const contentHandler = (event) => {
        setContentType(event.target.value);
    };

    return (
        <div className="genres">
            <div className="filter">
                <select onChange={genreHandler} value={genreType}>
                    {genresList.map((x, i) => (
                        <option key={i} value={x}>
                            {x}
                        </option>
                    ))}
                </select>
                <select onChange={contentHandler}>
                    <option value="movie">Movie</option>
                    <option value="tv">Tv</option>
                </select>
                <button onClick={fetch}>Filter</button>
            </div>
            {data !== undefined ? (
                <Common
                    data={data}
                    totalPages={totalPages}
                    page={page}
                    contentType={contentType}
                    handleChange={handleChange}
                />
            ) : null}
        </div>
    );
}

export default Genres;
