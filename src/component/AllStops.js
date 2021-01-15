import React, {useState, useEffect} from 'react'

function AllStops(props) {
    const {stops, setStopSelection} = props;

    async function onClick(e) {
        console.log(e.target)
        setStopSelection(e.target.value);
    } 

    useEffect(async() => {
        console.log("AllStops", await stops)
      }, [stops])
    return (
        <div className='panel'>
            <h2 className="text-lg my-4 underline">Matching Stops</h2>
            <div>
                {stops.map(stop=>{
                    return (
                        <button value={stop.attributes.stopid} className='text-left w-5/6 mb-6 pb-6 pt-2 px-2 border-b-2' onClick={e=>onClick(e)}>
                            <b>StopID:</b> {stop.attributes.stopid}<b>StopName:</b> {stop.attributes.stopname}
                        </button>
                )})}
            </div>
        </div>
    )
}

export default AllStops
