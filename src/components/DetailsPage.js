import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Details from "./Details/Details";
import { query_string, url } from "../api/Links";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailsPage() {
    const [Content, setContent] = useState({ similar: [], recomm: [] });
    const [details, setDetails] = useState({});
    const contentType = window.sessionStorage.getItem("contentType");
    const { id } = useParams();

    useEffect(() => {
        const fetch = async () => {
            if (contentType === "movie") {
                const movie = await axios.get(
                    `${url}/movie/${id}?${query_string}`
                );
                const similarMovie = await axios.get(
                    `${url}/movie/${id}/similar?${query_string}`
                );
                const recommMovie = await axios.get(
                    `${url}/movie/${id}/recommendations?${query_string}`
                );
                const [sM, rM, movieRes] = await axios.all([
                    similarMovie,
                    recommMovie,
                    movie,
                ]);
                const similar = await sM.data.results;
                const recomm = await rM.data.results;
                setDetails(movieRes.data);
                setContent({
                    similar: similar,
                    recomm: recomm,
                });
            }
            if (contentType === "tv") {
                const tv = await axios.get(`${url}/tv/${id}?${query_string}`);
                const similarTv = await axios.get(
                    `${url}/tv/${id}/similar?${query_string}`
                );
                const recommTv = await axios.get(
                    `${url}/tv/${id}/recommendations?${query_string}`
                );
                const [sT, rT, tvRes] = await axios.all([
                    similarTv,
                    recommTv,
                    tv,
                ]);
                const similar = await sT.data.results;
                const recomm = await rT.data.results;
                setDetails(tvRes.data);
                setContent({
                    similar: similar,
                    recomm: recomm,
                });
            }
        };
        fetch();
    }, [id, contentType]);

    return (
        <>
            <Header />
            <Details
                details={details}
                similar={Content.similar}
                recomm={Content.recomm}
                contentType={contentType}
                contentId={id}
            />
        </>
    );
}

export default DetailsPage;
