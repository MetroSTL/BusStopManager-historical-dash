import React, { useEffect } from 'react'
import formatDate from './formatDate'

export default function SurveyRecord({surveyDetails, setShowSurvey, setSurveyURL, surveyURL, token}) {

    const surveyID = '5112a8568fc34207b4a1b6b8c3777633'
    const portalURL = 'https://maps.metrostlouis.org/arcgis'

    const revealSurvey = (e, globalid) => {
        console.log(globalid)
        setSurveyURL(`https://survey123.arcgis.com/share/${surveyID}?portalUrl=${portalURL}&mode=edit&globalId=${globalid}&token=${token}`)
        setShowSurvey(true)
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
                <h3><b>Last Edit Date: </b>{formatDate(parseInt(1609185748773))}</h3>
                <button className='border-2 p-5 ml-3 mt-3' onClick={e=>revealSurvey(e, surveyDetails.attributes.globalid)}>Full Survey</button>
            </div>
            }
        </div>
    )
}

