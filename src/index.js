import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Moon from './svg/moon-svgrepo-com.svg';
import Earth from './svg/planet-earth-svgrepo-com.svg';
import Ship from './svg/space-ship-rocket-svgrepo-com.svg';
import Penguin from './svg/penguin-svgrepo-com.svg'


function App () {
    
    const [travel,setTravel] = useState(true)
    const [status,setStatus] = useState("")

    console.log(status)
    
    return (
      <div className="wrapper">
        <img src={Moon} alt="Moon" className='moon' />
        <img src={Earth} alt="Earth" className='earth' />
        {travel ? <img src={Ship} alt="Ship" className={`ship ${status}`} /> :
        <img src={Penguin} alt="Penguin" className={`penguin ${status}`} />}
        <div className='toMoon' 
            onClick={() => {setStatus("flyMoon");
                            setTimeout(() => {
                            setTravel(!travel)    
                            }, 3000);
            
            }}>To moon</div>
        <div className='toEarth'onClick={() => {setStatus("flyEarth")
    
        }}>To earth</div>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)