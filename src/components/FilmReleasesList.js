import React from 'react';
import Film from '../components/Film';

const FilmReleasesList = ({ title, films }) => {

    const filmNodes = films.map(({ name, url, id }) => {
        return (
            <Film name={name} url={url} key={id}></Film>
        )
    })

    return (
        <>
            
            <h2>{title}</h2>
            
            {filmNodes}
        </>
    )


}

export default FilmReleasesList;