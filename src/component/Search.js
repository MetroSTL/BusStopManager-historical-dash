import React from 'react';
import TextField from '@material-ui/core/TextField';


export function Search({setSearch, setStopIDHistory}) {
    
    function textInput(e) {
        e.preventDefault()
        
        setStopIDHistory('')
        setSearch(e.target.value)
    }

    return (
            <div id='init-search' className="w-70" style={{marginLeft:'auto', marginRight:'auto'}}>
            <form id="form-search" className="px-40 black-80">
                <div className="measure" className='mx-auto pt-3'>
                    <TextField onChange={e=>textInput(e)} id="standard-search" label="StopID Search" type="number" />
                </div>       
            </form>   
        </div>
    )
}

export default Search
