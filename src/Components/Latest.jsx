import React from 'react';
import {useEffect, useState} from 'react';
import LatestCard from './LatestCard';

const Latest = () => {

   
    const API_URL = "http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e141b98997d40fcb539f0bb6825e17e";

    const [latest, setLatest] = useState([]);

    useEffect(()=>{
         latestNews();
    }, []);
    
    
    const latestNews = async() =>{
            const response = await fetch(API_URL);
            const data = await response.json();
            setLatest(data.articles);
    }

    return (
        <>
         <div>
            <h2 style={{textAlign: 'center'}}>Latest News</h2>
         </div>
          <div>
              {latest.map((latest)=>{
                 return(
                    <div>
                        <LatestCard latest={latest} />
                    </div>
                 );
              })}
          </div>

        </>
    );
}

export default Latest;
