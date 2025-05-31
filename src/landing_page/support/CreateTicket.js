import React from 'react';
import { Link } from 'react-router-dom';


function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2 text-center'>To create a ticket, selec a relevent topic</h1>

        

            <div className='col-4 p-5 mt-2 '>
                <h4 className=''> <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> individual</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Minor</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Non Resident Indian (NRI)</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Company, Partnership, HUF and LLP</Link> <br/>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Glossary</Link>
            </div>

           

            <div className='col-4 p-5 mt-2 '>
                <h4 className=''> <i class="fa fa-user-o" aria-hidden="true"></i>Your Zerodha Account</h4>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Your Profile</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Account modification</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Client Master Report (CMR) and Depository Participant (DP)</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Nomination</Link> <br/>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}>  Transfer and conversion of securities
               Kite</Link>
            </div>


            <div className='col-4 p-5 mt-2 '>
                <h4 className=''><i class="fa fa-link" aria-hidden="true"></i> Kite</h4>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> IPO</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Trading FAQs</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Margin Trading Facility (MTF) and Margins</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Charts and orders</Link> <br/>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Alerts and Nudges</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> General</Link>
            </div>


            <div className='col-4 p-5 mt-2 '>
                <h4 className=''> <i class="fa fa-id-card-o" aria-hidden="true"></i> Funds</h4>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Add money</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Withdraw money</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Add bank accounts</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> eMandtes</Link>
            </div>

            <div className='col-4 p-5 mt-2 '>
                <h4 className=''> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Console</h4>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Portfolio</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Funds statement</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Reports</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Porofile</Link> <br/>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Segments</Link>
            </div>

            <div className='col-4 p-5 mt-2 '>
                <h4 className=''>  <i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</h4>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Understanding mutual funds and coin</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Coin app</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > coin web</Link>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}} > Transaction and reports</Link> <br/>
               <Link to={""} style={{ textDecoration:"none" , lineHeight: "2.5"}}> Namtional Pention Scheme (NSP)</Link>
            </div>

            </div>
        </div>
            );
}

            export default CreateTicket;