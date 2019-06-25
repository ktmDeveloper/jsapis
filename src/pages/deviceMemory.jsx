import React from 'react';
export default function deviceMemory() {

    let mem = null;
        
    if(navigator.deviceMemory){
        mem = navigator.deviceMemory
    }

    return (
        <div>
            <h1>Memory of your Device</h1>
            <div className="centerAndBox">
            
                <h2>
                    {mem ? `Your device has ${mem}MB RAM` : 'This device doesnot support navigator.deviceMemory'}
                </h2>
            </div>
        </div>
        
    )
}