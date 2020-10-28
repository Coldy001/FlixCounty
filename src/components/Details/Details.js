import React, { memo } from "react";
import Images from "../Images/Images";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import "./Details.scss";

function Details({ details, similar, recomm, contentType, contentId }) {
    const customStyles = {
        background: `#191919 url(https://image.tmdb.org/t/p/original${details?.backdrop_path}) center/cover no-repeat fixed`,
    };

    return (
        <>
            {details && (
                <div className="detailsPage">
                    <div className="backdrop" style={customStyles}></div>
                    <div className="details">
                        <Images data={details} />
                        <section>
                            <div className="name">
                                {details?.name ||
                                    details?.title ||
                                    details?.original_name ||
                                    details?.original_title}
                            </div>
                            {details?.runtime && (
                                <Runtime runtime={details?.runtime} />
                            )}
                            {details?.genres && (
                                <ul className="genres">
                                    {details?.genres.map((x, i) => (
                                        <li key={i} className="name">
                                            {x.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className="date">
                                <b>Release Date:</b>{" "}
                                {details?.release_date ||
                                    details?.first_air_date}
                            </div>
                            {details?.production_companies && (
                                <ul className="genres">
                                    {details?.production_companies.map(
                                        (x, i) => (
                                            <li className="name" key={i}>
                                                {x.name}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                            {details?.homepage && (
                                <div className="homepage">
                                    <a href={`${details?.homepage}`}>
                                        {details?.homepage}
                                    </a>
                                </div>
                            )}
                        </section>
                    </div>
                    <div className="overview">{details?.overview}</div>
                    {"seasons" in details && (
                        <>
                            <hr />
                            <Seasons seasons={details?.seasons} />
                        </>
                    )}
                    {similar && (
                        <>
                            <hr />
                            <div className="similar">
                                <div className="title">
                                    <Link to={`/sim-rec/similar/${contentId}`}>
                                        Similar
                                    </Link>
                                </div>
                                <div className="images">
                                    {similar.map((x) => (
                                        <Images
                                            data={x}
                                            media_type={contentType}
                                            key={x.id}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    {recomm && (
                        <>
                            <hr />
                            <div className="similar">
                                <div className="title">
                                    <Link
                                        to={`/sim-rec/recommendations/${contentId}`}
                                    >
                                        Recommendations
                                    </Link>
                                </div>
                                <div className="images">
                                    {recomm.map((x) => (
                                        <Images
                                            data={x}
                                            media_type={contentType}
                                            key={x.id}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}

function Seasons({ seasons }) {
    return (
        <div className="seasons">
            <b>Seasons</b>
            {seasons.map((season, i) => (
                <div className="season" key={i}>
                    <Images data={season} />
                    <div className="s-details">
                        <div className="s-name">{season.name}</div>
                        <div className="s-overview">{season.overview}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Runtime({ runtime }) {
    const newRuntime = (runtime / 60).toFixed(2).split(".");
    const hr = newRuntime[0];
    const min = newRuntime[1];
    return (
        <div className="runtime">
            <b>Runtime:</b>{" "}
            <span>
                {hr}hr {min}min
            </span>
        </div>
    );
}

export default memo(Details);
