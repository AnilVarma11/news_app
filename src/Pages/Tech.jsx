import React from 'react';
import { useEffect, useState } from 'react';
import TechContainer from '../Components/TechContainer';

const Tech = () => {

    const API_URL = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6e141b98997d40fcb539f0bb6825e17e";

    const [sport, setSport] = useState([]);

    useEffect(()=>{
         sportsNews();
    }, [])
    
    
    const sportsNews = async() =>{
        const response = await fetch(API_URL);
        const data = await response.json();
        setSport(data.articles);
    }
    
    


    return (
        <div>
              <div className='sports-flexx'>
                {sport.slice(0,3).map((sport)=>{
                     return(
                        <div className='sports-card'>
                            <div className='sport-img'>
                                <img src={sport.urlToImage} alt={sport.title} />
                            </div>
                            <div className='sport-content'>
                               <h2>{sport.title.slice(0,57)}</h2>
                               <p>By {sport.author}</p>
                            </div>     
                        </div>
                     );
                })}
            </div>
            <TechContainer/>
        </div>
    );
}

export default Tech;
