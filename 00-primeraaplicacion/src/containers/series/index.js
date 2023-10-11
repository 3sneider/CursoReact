import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        fetch: false
    }

    onChangeList = e => {
        this.setState({ seriesName: e.target.value, fetch: true });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json, fetch: false }));
    }

    render() {
        const { series, seriesName, fetch } = this.state
        return (
            <>
                {this.state.series.length}
                <p>Listado de series</p>
                <div>
                    <input
                        value={seriesName}
                        type="text"
                        onChange={this.onChangeList} />
                </div>
                {
                    !fetch && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>please enter name into the input</p>
                }
                {
                    !fetch && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>no TV series have been found with this name</p>
                }
                {
                    fetch && <p>loading....</p>
                }
                {
                    !fetch && <SeriesList List={series} />
                }
            </>
        )
    }
}

export default Series;