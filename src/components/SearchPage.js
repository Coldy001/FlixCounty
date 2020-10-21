import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { url, query_string } from "../api/Links";
import Header from "./Header/Header";
import Search from "./SearchPage/Search";

function SearchPage() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const { value } = useParams();

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setPage(1);
    }, [value]);

    useEffect(() => {
        const fetch = async () => {
            const request = await axios.get(
                `${url}/search/multi?&query=${value}${query_string}&page=${page}`
            );
            setTotalPages(request.data.total_pages);
            setData(request.data.results);
        };
        fetch();
    }, [value, page]);

    return (
        <>
            <Header />
            <Search
                data={data}
                page={page}
                totalPages={totalPages}
                handleChange={handleChange}
            />
        </>
    );
}

export default SearchPage;
