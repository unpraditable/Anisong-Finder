import React, {Component} from 'react';
import axios from 'axios';

function getSeason(month) {
    let season ="";
    switch (month) {
        case 0:
            season = "winter";
            break;
        case 1:
            season = "winter";
            break;
        case 2:
            season = "winter";
            break;
        case 3:
            season = "spring";
            break;
        case 4:
            season = "spring";
            break;
        case 5:
            season = "spring";
            break;
        case 6:
          season = "summer";
          break;
        case 7:
            season = "summer";
            break;
        case 8:
            season = "summer";
            break;
        case 9:
            season = "fall";
            break;
        case 10:
            season = "fall";
            break;
        case 11:
            season = "fall";
            break;
      }
      return season;
}

class AnimeList extends Component {
    state = {
        animes: []
    }

    componentDidMount() {
        axios.get(`https://api.jikan.moe/v3/season/2020/${getSeason(0)}`)
        .then(res => {
            const animes = res.data.anime;
            this.setState({ animes });
        })
    }

    

    render () {
        return (
            <div className="App-body row">
            { 
                this.state.animes.map(anime =>
                
                anime.r18 === false ? (
                    <div className ="col-md-4">
                        <img src={anime.image_url} />
                        <h3>{anime.title}</h3>
                    </div>
                ) : (null)
                
                )
            }
            
            </div>

        )
    }
}

export default AnimeList; 
