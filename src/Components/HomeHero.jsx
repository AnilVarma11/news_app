
import React from 'react';
import { useEffect, useState } from 'react';
import '../Styles/Homeh1.css';




const HomeHero = () => {

    const API_URL = 'https://newsdata.io/api/1/news?apikey=pub_1378745506b3c2dae0512720c898282e44ee5&q=trending%20news&country=in&language=en&category=world';
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;

   
    const [hnews, setHnews] = useState([]);


    useEffect(()=>{
        homeContainer();
    }, []);

    const homeContainer = async() =>{
        const response = await fetch(API_URL);
        const data = await response.json();
        setHnews(data.results);
    }

    
    return (
        <div className='hero-section'>


     
              <p style={{textAlign: 'center'}}>{date}</p>
            {hnews.slice(0,1).map((h1)=>{
                  return(
                  <div className='containerss'>
                   <div className='h2-container'>
                          <p>World News</p>
                   </div>
                    <div className='h1-container'>
                      <div>
                        <img src={h1.image_url} alt={h1.title} />
                      </div>
                      <div className='h1-content'>
                        <h2>{h1.title}</h2>
                        <p>{h1.content.slice(0, 121)}</p>
                      </div>
                   </div>
                   </div>)
            })}
        </div>
    );
}

export default HomeHero;
