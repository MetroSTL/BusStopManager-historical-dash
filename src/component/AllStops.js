import React, {useState, useEffect} from 'react'

function Stop(props) {
    const onClick = () => {

    }

    const {stopid, stopname, routes} = props;
    return (
        <div key={stopid}>
            <button>
                {/* <img src={}></img> */}
                <h3>StopID: {stopid} StopName: {stopname}</h3>
            </button>
        </div>
    )
}

function AllStops(props) {
    const {stops} = props;

    useEffect(async() => {
        console.log("AllStops", await stops)
      }, [stops])
    return (
        <div className='panel'>
            <h2 className="text-lg my-4 underline">Matching Stops</h2>
            <div>
                {stops.map(stop=>{
                    return (
                        <button value={stop.attributes.stopid} className='text-left w-5/6 mb-6 pb-6 pt-2 px-2 border-b-2' onClick={e=>props.setStopSelection(e.target.value)}>
                            {/* <img src={}></img> */}
                            <h3 className=''><b>StopID:</b> {stop.attributes.stopid}</h3>
                            <h3 className=''><b>StopName:</b> {stop.attributes.stopname}</h3>
                        </button>
                )})}
            </div>
        </div>
    )
}

export default AllStops
