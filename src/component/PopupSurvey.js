import React from 'react'

export default function PopupSurvey({surveyURL}) {
    return (
        <div id='popup-survey' className='w-3/4 h-2/3 absolute' style={{top: '140px', right: '100px', height:'75vh'}}>
            <iframe className='w-full h-full' src={surveyURL}></iframe>
        </div>
    )
}
