import React from 'react';
import '../Styles/LatestCard.css';

const LatestCard = ({latest: {author, title, description, url, urlToImage, content}}) => {
    return (
        <div className='latest-card'>
            <div className='l-author'>
               <p>{author}</p> 
            </div>
            <div className='card-flex'>
                 <div className='l-image'>
                    <img src={urlToImage} alt={title} />
                 </div>
                 <div className='l-content'>
                     <h2>{title}</h2>
                     <p>{description}</p>
                    <div>
                        <p>{content}</p> 
                        <a href={url}>Read More.....</a>
                    </div>
                 </div>
            </div> 
        </div> 
    );
}

export default LatestCard;
