import React from "react";
import "./Common.scss";
import Images from "../Images/Images";
import Pagination from "@material-ui/lab/Pagination";

function Common({ data, totalPages, page, contentType, handleChange }) {
    return (
        <React.Fragment>
            <div className="commonImages">
                {data.map((x) => (
                    <Images data={x} media_type={contentType} key={x.id} />
                ))}
            </div>
            <Pagination
                color={"primary"}
                count={totalPages}
                page={page}
                onChange={handleChange}
            />
        </React.Fragment>
    );
}

export default Common;
