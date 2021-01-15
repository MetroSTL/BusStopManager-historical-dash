import React, {useState, useEffect} from 'react'
import AllStops from './AllStops'
import StopHistory from './StopHistory'
import SurveyRecord from './SurveyRecord'
import Search from './Search'
import getRecords from '../hooks/getRecords';
import filterRecords from '../hooks/filterRecords'

export default function Dashboard(props) {
    const [search, setSearch] = useState('');
    const [stopSelection, setStopSelection] = useState('');
    const [stopIDHistory, setStopIDHistory] = useState('');
    const [globalId, setGlobalId] = useState('');
    const [stops, setStops] = useState([]);
    
    const {token} = props;

    // page load
    useEffect(async () => {
    }, [])
    
    // updated search
    useEffect(async () => {
        if(search.length > 2){
            setStops(await getRecords(token, search))
        }
    }, [search])

    // click on AllStops
    useEffect(async () => {
        console.log(await stopSelection)
        setStopIDHistory(await filterRecords(token, await stopSelection) )
    }, [stopSelection])
    
    return (
        <div className='' >
            <div className='w-100 flex search'>
                <Search setSearch={setSearch} />
            </div>
            <div className='flex dashboard'>
                <AllStops token={token} setStopSelection={setStopSelection} stops={stops} />
                <StopHistory stopIDHistory={stopIDHistory} setGlobalId={setGlobalId} />
                <SurveyRecord globalId={globalId} />

            </div>
        </div>
    )
}
