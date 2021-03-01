import React from "react";

const Film = ({name, url}) => {

    return (
        <>

        <ul>

            <li><a href={url}  target="blank">{name}</a></li>

        </ul>
            
        </>
    )
}

export default Film;