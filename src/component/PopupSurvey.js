import React, {useState} from 'react'

function CloseSurvey({setShowCloseAlert, setShowSurvey, setSurveyURL}) {

    const clickYes = (e) => {
        e.preventDefault()
        setShowCloseAlert(false)
        setShowSurvey(false)
        setSurveyURL('')
    }
    const clickNo = (e) => {
        e.preventDefault()
        setShowCloseAlert(false)
    }

    return (
        <div className='bg-white w-1/2 h-1/2 p-4 rounded-md border-2 absolute' style={{top: '50%', left: '50%', transform: 'translateX(-50%)'}}>   
            <h2>Would you like to close the survey? All unsaved data will be lost</h2>
            <button className='border-2 p-5 ml-3 mt-3' onClick={e=>clickYes(e)}>Yes</button>
            <button className='border-2 p-5 ml-3 mt-3' onClick={e=>clickNo(e)}>No</button>
        </div>
    )
}


export default function PopupSurvey({surveyURL, setShowSurvey, setSurveyURL}) {
    const [showCloseAlert, setShowCloseAlert] = useState(false);

    return (
        <div id='popup-survey' className='bg-white w-3/4 h-2/3 absolute' style={{top: '140px', right: '100px', height:'75vh'}}>
            <iframe className='w-full h-full' src={surveyURL}></iframe>
            <div id='close-iframe'>
                <button className='border-2 p-5 ml-3 mt-3' onClick={e=>setShowCloseAlert(true)}>Close</button>
            </div>
            {showCloseAlert ? <CloseSurvey 
                                setShowSurvey={setShowSurvey} 
                                setShowCloseAlert={setShowCloseAlert} 
                                setSurveyURL={setSurveyURL} /> : '' }
        </div>
    )
}
