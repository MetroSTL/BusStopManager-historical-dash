import React, { useEffect } from 'react'

export default function SurveyRecord({surveyDetails, setShowSurvey}) {
    const openSurvey = (globalID) => {
        document.getElementById('popup-survey').setAttribute('display', 'block')
    }

    return (
        <div className='panel'>
            <h2 className="text-lg my-4 underline">Survey Record</h2>
            {!surveyDetails ? '' :
            <div>
                <h3><b>Stop ID: </b>{surveyDetails.attributes.stop_id}</h3>
                <h3><b>Stop Name: </b>{surveyDetails.attributes.stop_name}</h3>
                <h3><b>Bench: </b>{surveyDetails.attributes.bench}</h3>
                <h3><b>Shelter: </b>{surveyDetails.attributes.shelter}</h3>
                <h3><b>Last Edit Date: </b>{surveyDetails.attributes.last_edited_date}</h3>
                <button className='' onClick={e=>setShowSurvey(true)}>Full Survey</button>
            </div>
            }
        </div>
    )
}

