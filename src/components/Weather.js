import './weather.css'
import SearchBar from './SearchBar'
import ToggleMode from './ToggleMode'
import Information from './Information'
import { useState } from 'react'
export default function Weather() {
    const [text, setText] = useState('Nairobi');
    const [value, setValue] = useState('Nairobi');
    const [light, setLight] = useState(true);
    return (
        <div className={light ? 'weather-light' : 'weather-dark'}>
            <div className='top-bar'>
                <SearchBar
                {...{setText,text, setValue}} />
                <ToggleMode
                {...{setLight, light}} />
            </div>
            <hr />
            <div className='bottom-bar'>
                <Information
                {...{text, value}} />
            </div>
        </div>
    )
}