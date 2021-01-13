import React, {useState} from 'react'
import AllStops from './AllStops'
import StopHistory from './StopHistory'
import SurveyRecord from './SurveyRecord'

export default function Dashboard(props) {
    const [stopSelection, setStopSelection] = useState('');
    const [globalId, setGlobalId] = useState('');

    
    const {token} = props;

    return (
        <div className='w-100 flex' id='dashboard'>
            <AllStops token={token} setStopSelection={setStopSelection} />
            <StopHistory stopSelection={stopSelection} setGlobalId={setGlobalId} />
            <SurveyRecord globalId={globalId} />
        </div>
    )
}
