import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div className='conatainer'>
            <div className='row p-5'>
                <div className='col-6 '>
                    <img src={imageURL}  />
                </div>
                <div className='col-6  mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                   <div>
                   <a href={tryDemo}>tryDemo</a>
                   <a href={learnMore} style={{marginLeft: "50px"}}>learnMore</a>
                   </div>

                    <div className='mt-3'>
                    <a href={googlePlay}><img src="Media/images/googlePlayBadge.svg" /></a>
                    <a href={appStore}><img src="Media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;