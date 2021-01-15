import React, {useState, useEffect} from 'react'

export default function StopHistory(props){
    const {stopIDHistory, setGlobalId} = props;

    useEffect(async() => {
        console.log("AllStops", await stopIDHistory)
      }, [stopIDHistory])

    return (
        <div className='panel'>
            <h2 className="text-lg my-4 underline">Stop History</h2>
            
        </div>
    )
}
