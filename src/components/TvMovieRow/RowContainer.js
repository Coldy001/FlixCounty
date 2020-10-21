import React from "react";
import "./RowContainer.scss";
import TvMovieRow from "./TvMovieRow";
import { MOVIE, TV } from "../../api/Links";

function RowContainer() {
    return (
        <div className="row-container">
            <TvMovieRow title="Popular-TV" path={TV.POPULAR} />
            <hr />
            <TvMovieRow title="Upcoming-Movie" path={MOVIE.POPULAR} />
        </div>
    );
}

export default RowContainer;
