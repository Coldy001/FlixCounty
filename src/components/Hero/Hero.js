import React, { memo } from "react";
import "./Hero.scss";
import Images from "../Images/Images";
import PropTypes from "prop-types";

function Hero({
    data,
    overview,
    title,
    name,
    original_name,
    original_title,
    backdrop_path,
}) {
    const customStyles = {
        background: `linear-gradient(to top, black,transparent),black url(https://image.tmdb.org/t/p/original${backdrop_path}) center/cover no-repeat fixed`,
    };

    const overviewMod = () => {
        const para =
            overview?.length <= 200
                ? overview
                : `${overview?.slice(0, 201)}...`;
        return para;
    };

    return (
        <div className="hero" style={customStyles}>
            <div className="details">
                <Images data={data} media_type={"tv"} />
                <h1>{title || name || original_name || original_title}</h1>
                <div className="overview">{overviewMod()}</div>
            </div>
        </div>
    );
}

Hero.propTypes = {
    overview: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    original_name: PropTypes.string,
    original_title: PropTypes.string,
    backdrop_path: PropTypes.string,
};

export default memo(Hero);
