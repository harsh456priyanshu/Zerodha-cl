import React from 'react'


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='Media/images/largestBroker.svg'  alt=''/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <div className='row'>
                        <div className='col-6'>
                    <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Future and Options</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6'>
                    <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                    </ul> 
                        </div> 
                    </div>
                    <img src='Media/images/pressLogos.png'  alt='press' style={{width:"90%"}}/>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;