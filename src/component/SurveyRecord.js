import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'

export default function SurveyRecord(props) {
    const {surveyDetails} = props;

    return (
        <div className='panel'>
            <h2 className="text-lg my-4 underline">Survey Record</h2>
            {!surveyDetails ? '' :
            <div>
                <h3><b>Stop ID: </b>{surveyDetails.attributes.stop_id}</h3>
                <h3><b>Stop Name: </b>{surveyDetails.attributes.stop_name}</h3>
                <h3><b>Bench: </b>{surveyDetails.attributes.stop_id}</h3>
                <h3><b>Shelter: </b>{surveyDetails.attributes.stop_id}</h3>
                <h3><b>Last Edit Date: </b>{surveyDetails.attributes.last_edited_date}</h3>
                <Button color='secondary'>Full Survey</Button>
            </div>
            }
        </div>
    )
}

