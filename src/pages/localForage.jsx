import React from 'react';
import localforage from 'localforage';

export default function localForage() {

        const keyVal = 'forageKey';
        let setForge = () => {
            const val = document.querySelector('.localForage .forageVal');
            localforage.setItem(keyVal, val.innerHTML)
        }
        let getForge = () => {
            let resDisplay = document.getElementById('forageDisplay');
            localforage.getItem(keyVal).then((val) => {
                if(val){
                    resDisplay.innerHTML = `<h1>${val}</h1>`;
                } else {
                    resDisplay.innerHTML = `<h1>Set the value First!</h1>`;
                }
            })
        }
        let removeForge = () => {
            let resDisplay = document.getElementById('forageDisplay');
            localforage.removeItem(keyVal).then(() => {
                    resDisplay.innerHTML = `<h1>LocalForage is now empty</h1>`;
                }
            )
        }

    return (
        <div className="localForage">
            <h1>localForage</h1>
            <div className="controls">
                <button className="cyan" name='set' onClick={setForge}>Set LocalForage</button>
                <button className="yellow" name='get' onClick={getForge}>Get LocalForage</button>
                <button className="orange" name='remove' onClick={removeForge}>Remove LocalForage</button>
            </div>
            <p className="forageVal">This is the text to be copied!</p>
            <div className="centerAndBox" id="forageDisplay">
                <i>Value displayed here</i>
            </div>
        </div>
    )
}