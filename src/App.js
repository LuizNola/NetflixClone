import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './tmdb';
import MovieRow from './componentes/movieRow'
import TopMovie from './componentes/FetureMovie'
import Header from './componentes/header'

export default () => {
  
  const [MovieList, setMovieList] = useState([])
  const [DataTopMovie, setDataMovie] = useState (null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {

    const load = async () => {
      //pegando os filmes
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //pegando filme em destaque
      let origin = list.filter(i =>i.slug === 'origin')
      let radomNumber = Math.floor(Math.random() * (origin[0].items.results.length - 1))
      let chosen = origin[0].items.results[radomNumber]

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      console.log(chosenInfo)
      setDataMovie(chosenInfo)
    }

    load()
  },[]
  )

  useEffect(() =>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll',scrollListener)

    return() => {
      window.removeEventListener('scroll',scrollListener)
    }
  },[])

  
  return (
    <div className = "page">


       <Header black = {blackHeader}/>


       {DataTopMovie && 
       <TopMovie item = {DataTopMovie}/>}


      <section className="lists">
        {MovieList.map((item,key) =>(
        <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
          {MovieList.length <= 0 &&
      <div className="load">
         <img src = 'https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif' alt = "Carregando"/>
      </div>}
    </div>
    )
}