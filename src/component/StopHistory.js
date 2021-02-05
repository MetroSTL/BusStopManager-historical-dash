import React, {useState, useEffect} from 'react'
import formatDate from './formatDate';

export default function StopHistory(props){
    const {stopIDHistory, setSurveyDetails} = props;

    const onClick = (stop) => {
        console.log(stop)
        setSurveyDetails(stop)
    }

    useEffect(async() => {
        console.log("AllStops", await stopIDHistory)
      }, [stopIDHistory])

    return (
        <div className='panel'>
            <h2 className="text-lg my-4 underline">Stop History</h2>
            {stopIDHistory ?
            stopIDHistory.map(stop=>{
                    return (
                        <a key={stop.attributes.stop_id} className='item flex flex-column border-b-2 py-6 m-0 w-100' onClick={e=>onClick(stop)}>
                            
                            <li className='flex flex-column mx-auto text-left w-5/6 px-2'>
                                <ul>
                                    <li className='flex flex-row '>
                                        <b>StopID: </b> {' ' + stop.attributes.stop_id} 
                                    </li>
                                    <li className='flex flex-row '>
                                        <b>StopName: </b> {stop.attributes.stop_name} 
                                    </li>
                                    <li className='flex flex-row '>
                                        <b>Last Edit: </b> {`${formatDate(new Date(stop.attributes.last_edited_date))}`} 
                                    </li>
                                </ul>
                            </li>
                        </a>
                )}) :
            ''
            }
        </div>
    )
}
