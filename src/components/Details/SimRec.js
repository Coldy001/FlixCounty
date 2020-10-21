import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { url, query_string } from "../../api/Links";
import Header from "../Header/Header";
import Common from "../SearchPage/Common";

function SimRec() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const contentType = window.sessionStorage.getItem("contentType");
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const { value, id } = useParams();

    useEffect(() => {
        const fetch = async () => {
            if (contentType === "movie") {
                const movie = await axios.get(
                    `${url}/movie/${id}/${value}?${query_string}&page=${page}`
                );
                setTotalPages(movie.data.total_pages);
                setData(movie.data.results);
            }
            if (contentType === "tv") {
                const tv = await axios.get(
                    `${url}/tv/${id}/${value}?${query_string}&page=${page}`
                );
                setTotalPages(tv.data.total_pages);
                setData(tv.data.results);
            }
        };
        fetch();
    }, [contentType, id, page, value]);

    return (
        <>
            <Header />
            <Common
                data={data}
                totalPages={totalPages}
                page={page}
                contentType={contentType}
                handleChange={handleChange}
            />
        </>
    );
}

export default SimRec;
