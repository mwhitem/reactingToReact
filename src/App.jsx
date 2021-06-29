import React, { useState } from 'react';
import Greeter from './components/Greeter';

const App = () => {
    const [username, setUsername] = useState('');
    return (
        <div>
        <Greeter name='madison' phrase='hello its'/>
        <Greeter name='spongebob' phrase='aloha its'/>
        <Greeter name='kylo ren' phrase='good evening its'/>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
<p>You are logging in as: {username}</p>
        </div>
    );

};

export default App; 