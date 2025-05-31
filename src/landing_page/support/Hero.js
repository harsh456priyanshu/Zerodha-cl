import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>

            <div className='p-5' id='supportWrapper'>
                <h3 className='fs-2 text-center'>Support Portal</h3>
                <Link to={""} style={{ color: "white" }}>Track Tickets</Link>
            </div>

            <div className=' row p-5 '>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O , why my ordered is getting rejected ' />
                    <br />
                    <Link to={""} style={{ color: "white"   , paddingRight: "10px"}}> Track account opening  </Link>
                    <Link to={""} style={{ color: "white" , paddingRight: "10px"}}> Track segment activation </Link>
                    <Link to={""} style={{ color: "white", paddingRight: "10px" }}> Intraday margins</Link>
                    <Link to={""} style={{ color: "white"  ,paddingRight: "10px"}}> Kite user manual</Link>
                </div>

                <div className='col-6 p-5 mt-5 mb-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol style={{lineHeight: "2.5"}}>
                        <li> <Link to={""} style={{ color: "white" }}>BSE StAR mutual fund platform downtime</Link></li>
                        <li><Link to={""} style={{ color: "white" }}>
                            Surveillance measure on scrips - March 2025
                        </Link> </li>
                    </ol>

                </div>
            </div>

        </section>
    );
}

export default Hero;