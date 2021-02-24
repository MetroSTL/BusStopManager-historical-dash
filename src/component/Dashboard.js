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
    const [surveyDetails, setSurveyDetails] = useState('');
    const [stops, setStops] = useState([]);
    
    const {token} = props;

    // page load
    useEffect(async () => {
        setStopIDHistory([])
        setStopSelection('')
        setSurveyDetails('')
        setStops([])
    }, [])
    
    // updated search
    useEffect(async () => {
        search.length > 2? 
            setStops(await getRecords(token, search)) : 
            setStops([])
    }, [search])

    // click on AllStops
    useEffect(async () => {
        setStopIDHistory(await filterRecords(token, stopSelection) )

    }, [stopSelection])

    const updateSearch =(e, data) => {
        e.preventDefault()
        if(data == ''){
            setStopIDHistory('')
        }
        setSearch(data)
    }
    
    return (
        <div className='' >
            <div className='w-100 flex search'>
                <Search setSearch={e=>setSearch(e)} />
            </div>
            <div className='flex dashboard'>
                <AllStops token={token} setStopSelection={setStopSelection} setSurveyDetails={setSurveyDetails} stops={stops} />
                <StopHistory stopIDHistory={stopIDHistory} setSurveyDetails={setSurveyDetails} />
                <SurveyRecord surveyDetails={surveyDetails} />

            </div>
        </div>
    )
}
