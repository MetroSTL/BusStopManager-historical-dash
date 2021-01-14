import React, {useState, useEffect} from 'react'
import AllStops from './AllStops'
import StopHistory from './StopHistory'
import SurveyRecord from './SurveyRecord'
import Search from './Search'
import getRecords from '../hooks/getRecords';

export default function Dashboard(props) {
    const [search, setSearch] = useState('');
    const [stopSelection, setStopSelection] = useState('');
    const [globalId, setGlobalId] = useState('');
    const [stops, setStops] = useState([]);
    
    const {token} = props;
    useEffect(async () => {
        console.log(search)
        if(search.length > 3){
            setStops(await getRecords(token, search))
        }
        console.log('search: ', search)
      }, [token, search])
      
    return (
        <div className='' >
            <div className='w-100 flex search'>
                <Search setSearch={setSearch} />
            </div>
            <div className='flex dashboard'>
                <AllStops token={token} setStopSelection={setStopSelection} stops={stops} />
                <StopHistory stopSelection={stopSelection} setGlobalId={setGlobalId} />
                <SurveyRecord globalId={globalId} />

            </div>
        </div>
    )
}
