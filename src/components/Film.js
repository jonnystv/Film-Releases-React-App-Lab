import React from "react";

const Film = ({name, url}) => {

    return (
        <>
            <h4>{name}</h4>
            <p>{url}</p>
        </>
    )
}

export default Film;