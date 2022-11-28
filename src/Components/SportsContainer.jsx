import React from 'react';
import {useEffect, useState} from 'react';
import '../Styles/SportsContainer.css';

const SportsContainer = () => {

    const API_URL = "https://newsapi.org/v2/top-headlines?country=in&us&category=sports&apiKey=6e141b98997d40fcb539f0bb6825e17e";

    const[sportContainer, setSportContainer] = useState([]);

    useEffect(()=>{
          sportsContainer();
    }, []);

    const sportsContainer = async() =>{
        const response = await fetch(API_URL);
        const data = await response.json();
        setSportContainer(data.articles);
    }

    return (
        <div>
              <h1 className='sport-title'>More in <span>Sports</span> </h1>
              <div className='sportContainer'>
                   {sportContainer.slice(5,20).map((sports)=>{
                        return(
                            <div className='sportCard'>
                                   <div className='sports-image'>
                                      <img src={sports.urlToImage} alt={sports.title} />
                                   </div>
                                   <div className='sports-content'>
                                        <h2>{sports.title}</h2>
                                        <p>{sports.description}</p>
                                        <p>By <span> {sports.author} </span></p>
                                        <i>{sports.publishedAt}</i>
                                   </div>
                            </div>
                        );
                   })}
              </div>
        </div>
    );
}

export default SportsContainer;
