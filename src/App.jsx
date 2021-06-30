import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = () => {
    const [loaded, setLoaded] = useState(false);
    const [username, setUsername] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
        }, []);

            if (loaded) {
                return (
                    <div>
            <Greeter name='madison' phrase='hello its'/>
            <Greeter name='spongebob' phrase='aloha its'/>
            <Greeter name='kylo ren' phrase='good evening its'/>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    <p>You are logging in as: {username}</p>
            </div>
        );
    } else {
        return (
            <>
        <h1>page is loading </h1>
        <button onClick={() => {setLoaded(true)}}> click to load </button>
        </>
        )
    }
    
};

export default App; 