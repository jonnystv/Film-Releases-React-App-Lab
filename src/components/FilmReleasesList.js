import React from 'react';
import Film from '../components/Film';

const FilmReleasesList = ({ films }) => {

    const filmNodes = films.map(({ name, url, id }) => {
        return (
            <Film name={name} url={url} key={id}></Film>
        )
    })

    return (
        <>
            {filmNodes}
        </>
    )


}

export default FilmReleasesList;