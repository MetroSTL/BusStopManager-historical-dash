import React, { useEffect } from 'react'

export default function SurveyRecord({surveyDetails, setShowSurvey, setSurveyURL, surveyURL, token}) {

    const surveyID = '5112a8568fc34207b4a1b6b8c3777633'

    const revealSurvey = (e, globalid) => {
        console.log(globalid)
        setSurveyURL(`https://survey123.arcgis.com/share/5112a8568fc34207b4a1b6b8c3777633?portalUrl=https://maps.metrostlouis.org/arcgis&mode=edit&globalId=${globalid}&token=${token}`)
        setShowSurvey(true)
        console.log(surveyURL)
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
                <button className='' onClick={e=>revealSurvey(e, surveyDetails.attributes.globalid)}>Full Survey</button>
            </div>
            }
        </div>
    )
}

