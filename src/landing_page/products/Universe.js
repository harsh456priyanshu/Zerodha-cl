import React from 'react'

function Universe() {
    return ( 
        <div className='conatainer mt-5'>
        <div className='row text-center'>
             <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
             
            <div className='col-4  p-3 mt-5'>
             <img src="Media/images/smallcaseLogo.png" />
             <p className='text-small text-muted'>Themantic investment Platform</p>
            </div>
            <div className='col-4  p-3 mt-5'>
             <img src="Media/images/streakLogo.png" style={{width:"30%"}} />
             <p className='text-small text-muted'>Algo & strategy Platform</p>
            </div>
            <div className='col-4  p-3 mt-5'>
             <img src="Media/images/sensibullLogo.svg" />
             <p className='text-small text-muted'>Option trading Platform</p>
            </div>
            <div className='col-4  p-3'>
             <img src="Media/images/zerodhaFundhouse.png"  style={{width:"40%"}}/>
             <p className='text-small text-muted'>Asset magement</p>
            </div>
            <div className='col-4  p-3'>
             <img src="Media/images/goldenpiLogo.png" />
             <p className='text-small text-muted'>Bonds trading Platform</p>
            </div>
            <div className='col-4  p-3'>
             <img src="Media/images/dittoLogo.png"  style={{width:"30%"}} />
             <p className='text-small text-muted'>Insurance</p>
            </div>
            <button className='p-2  mt-5 btn btn-primary fs-5 mb-5' style={{width: "20%" , margin: "0 auto"}}>Signup Now</button>
        </div>
    </div>
     );
}

export default Universe;