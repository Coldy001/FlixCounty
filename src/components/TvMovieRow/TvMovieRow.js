import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import "./TvMovieRow.scss";
import Images from "../Images/Images";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import { MOVIE, TV } from "../../api/Links";

const TvMovieRow = ({ path }) => {
    const [data, setData] = useState([]);
    const [cType, setCType] = useState("");
    const [newPath, setNewPath] = useState(path);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        const fetch = async () => {
            const request = await axios.get(`${newPath}&page=${page}`);
            if (newPath.split("/")[4] === "discover") {
                const mediaType = newPath
                    .split("/")[5]
                    .match(/\bmovie|tv\b/g)[0];
                setCType(mediaType);
            } else {
                setCType(newPath.split("/")[4]);
            }
            setTotalPages(request.data.total_pages);
            setData(request.data.results);
        };
        fetch();
    }, [newPath, page]);

    return (
        <>
            {data && (
                <div className="tv-movie-row">
                    <span className="name">{cType.toUpperCase()}</span>
                    <select
                        onChange={(e) => {
                            setPage(1);
                            setNewPath(e.target.value);
                        }}
                    >
                        {cType === "movie" ? (
                            <>
                                <option value={MOVIE.POPULAR}>Popular</option>
                                <option value={MOVIE.TOPRATED}>
                                    Top Rated
                                </option>
                                <option value={MOVIE.UPCOMING}>Upcoming</option>
                                <option value={MOVIE.NOWPLAYING}>
                                    Now Playing
                                </option>
                            </>
                        ) : (
                            <>
                                <option value={TV.POPULAR}>Popular</option>
                                <option value={TV.TOPRATED}>Top Rated</option>
                                <option value={TV.ONTHEAIR}>On The Air</option>
                                <option value={TV.AIRINGTODAY}>
                                    Airing Today
                                </option>
                            </>
                        )}
                    </select>
                    <div className="movies">
                        {data.map((x, i) => (
                            <Images data={x} media_type={cType} key={i} />
                        ))}
                    </div>
                    <Pagination
                        color={"primary"}
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                    />
                </div>
            )}
        </>
    );
};

export default memo(TvMovieRow);
