import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import RowContainer from "./TvMovieRow/RowContainer";
import { fetchHero } from "../redux/HeroReducer";
import { TV } from "../api/Links";
import { CircularProgress } from "@material-ui/core";

function HomePage() {
    const dispatch = useDispatch();
    const { hero, heroLoading, heroError } = useSelector(
        (state) => state.HeroReducer
    );

    useEffect(() => {
        //Change media_type prop in Images Component in Hero.js
        dispatch(fetchHero(TV.TOPRATED));
    }, [dispatch]);

    const heroHandler = () => {
        if (heroLoading) return <CircularProgress />;
        if (heroError) return <p>{heroError}</p>;

        return <Hero data={hero} {...hero} />;
    };

    return (
        <>
            <Header />
            {heroHandler()}
            <RowContainer />
        </>
    );
}

export default HomePage;
