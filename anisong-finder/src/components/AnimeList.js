import React, {Component} from 'react';
import axios from 'axios';

class AnimeList extends Component {
    state = {
        animes: []
    }

    componentDidMount() {
        axios.get(`https://api.jikan.moe/v3/season/2020/winter`)
        .then(res => {
            const animes = res.data.anime;
            this.setState({ animes });
            console.log(this.state.animes.length);

        })

        function isSFW() {
            
        }
    }

    render () {
        return (
            <div>

            { 
                this.state.animes.map(anime =>
                <div>
                    <img src={anime.image_url} />
                    <h3>{anime.title}</h3>
                </div>
                )
            }
            
            </div>

        )
    }
}

export default AnimeList; 
