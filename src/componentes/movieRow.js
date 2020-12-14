import react, { useState }from 'react';
import './movieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {

    const [ScrollList,SetScrollList] = useState(0)

    const clickLArrow = () => {
        let x = ScrollList + Math.round(window.innerWidth /2)
        if(x > 0){
            x = 0 
        }
        SetScrollList(x)
    }
    
    const clickRArrow = () => {
        let x = ScrollList - Math.round(window.innerWidth /2)
        let y = items.results.length * 250 


       if ((window.innerWidth - y) > x){
           x = (window.innerWidth - y) - 60
       }
       SetScrollList(x)
    }
    return (

        <div className = "movieRow">
            <h2>{title}</h2>

            <div className= "movieRow--left" onClick={clickLArrow}>
                <NavigateBeforeIcon style = {{fontSize: 50}}/>
            </div>
            <div className = "movieRow--right">
                <NavigateNextIcon style = {{fontSize:50}} onClick={clickRArrow}/>
            </div>


            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: ScrollList,
                                                        width: items.results.length * 250 }} >
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item"> 
                        <img src = {`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} />
                    </div>

                ))}
                </div>
            </div>


        </div>
        
    )

}

//https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif
