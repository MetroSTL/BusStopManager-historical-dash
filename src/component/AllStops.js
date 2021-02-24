import React, {useState, useEffect} from 'react'
import {LocationOn, LocationOff} from '@material-ui/icons';

function AllStops(props) {
    const {stops, setStopSelection, setSurveyDetails} = props;

    async function onClick(stopid) {
        setStopSelection(stopid);
        setSurveyDetails('')
    } 

    useEffect(async() => {
        console.log("AllStops", await stops)
      }, [stops])
    return (
        <div className='panel'>
            <h2 className="text-lg my-4 underline">Matching Stops</h2>
            <div className='m-0 w-100'>
                {stops ?
                stops.map(stop=>{
                    return (
                        <li key={stop.attributes.stopid} className='item flex flex-column border-b-2 py-6 m-0 w-100' onClick={e=>onClick(stop.attributes.stopid)}>
                            {stop.attributes.routes ? <LocationOn className=" align-middle" color='primary'/> : <LocationOff color='secondary' className=" align-middle" />}
                            
                            <li className='flex flex-column mx-auto text-left w-5/6 px-2'>
                                <ul>
                                    <li className='flex flex-row '>
                                        <b>StopID: </b> {' ' + stop.attributes.stopid} 
                                    </li>
                                    <li className='flex flex-row '>
                                        <b>StopName: </b> {stop.attributes.stopname} 
                                    </li>
                                    <li className='flex flex-row '>
                                        <b>Status: </b> {stop.attributes.routes ? 'Active' : 'Ghoststop'} 
                                    </li>
                                </ul>
                            </li>
                        </li>
                )}) :
            ''
            }
            </div>
        </div>
    )
}

export default AllStops
