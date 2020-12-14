import React from 'react';
import './FetureMovie.css'

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres =[];
    for(let i in item.genres){
        genres.push( item.genres [i].name )
    }


    return (
        <section className="feture" style = {{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="feture--vertical">
                <div className="feture--horizoltal">
                    <div className="feture--name">{item.original_name}</div>
                    <div className="feture--info">
                      <div className="feture--points"> {item.vote_average} Pontos </div> 
                      <div className="feture--date">  {firstDate.getFullYear()} </div>
                      <div className="feture--numberSeasons">  {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>
                    </div>

                    <div className="feture--description">{item.overview}</div>
                    <div className= "feture--buttons">
                        <a href = "" className="feture--watch">Assistir</a>
                        <a href = "" className="feture--mylist">+ minha lista</a>
                    </div>
                   <div className="feture--genres"><strong>Gêneros: {genres.join(', ')} </strong></div>
                </div>
            </div>
        </section>
    )
}