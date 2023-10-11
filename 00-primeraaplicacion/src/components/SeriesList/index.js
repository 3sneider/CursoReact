import React from "react";

const SeriesItem = ({ name }) => (
    <li>{name}</li>
)

const SeriesList = (props) => {
    return (
        <>
            <ul>
                {props.List.map(series => (
                    <SeriesItem key={series.show.id} name={series.show.name} />
                ))}
            </ul>
        </>
    );
}

export default SeriesList;