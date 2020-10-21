import React, { memo } from "react";
import Common from "./Common";

function Search({ data, totalPages, page, handleChange }) {
    return (
        <Common
            data={data}
            totalPages={totalPages}
            page={page}
            handleChange={handleChange}
        />
    );
}

export default memo(Search);
