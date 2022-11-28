import React from 'react';
import { useEffect, useState } from 'react';
import '../Styles/Sports.css';
import SportsContainer from '../Components/SportsContainer';
import Marquee from "react-fast-marquee";
import sImg from '../helpers/sports.jpg';
import s2Img from '../helpers/olympics.jpg';
import s3Img from '../helpers/sportswomen.jpg';

const Sports = () => {

    const API_URL = "https://newsapi.org/v2/top-headlines?country=in&us&category=sports&apiKey=6e141b98997d40fcb539f0bb6825e17e";

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
            <Marquee speed={80}>
                <div className='s-images'>
                  <img src={sImg} alt="" style={{height:'300px'}}/>
                  <img src={s2Img} alt="" style={{height:'300px'}} />
                  <img src={s3Img} alt="" style={{height:'305px'}} />
                </div>
            </Marquee>
     
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
             
             <SportsContainer/>

        </div>
    );
}

export default Sports;
