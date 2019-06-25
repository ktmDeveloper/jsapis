import React from 'react';
import localforage from 'localforage';

export default function intersectionObserver() {

    window.addEventListener('load', () => {
        const keyVal = 'forageKey';
        const set = document.querySelector('.localForage button[name=set]');
        const get = document.querySelector('.localForage button[name=get]');
        const remove = document.querySelector('.localForage button[name=remove]');
        const val = document.querySelector('.localForage .forageVal').innerHTML;
        let resDisplay = document.getElementById('forageDisplay');

        set.addEventListener('click',() => {
            localforage.setItem(keyVal, val)
        });
        get.addEventListener('click',() => {
            localforage.getItem(keyVal).then((val) => {
                if(val){
                    resDisplay.innerHTML = `<h1>${val}</h1>`;
                } else {
                    resDisplay.innerHTML = `<h1>Set the value First!</h1>`;
                }
            })
        });
        remove.addEventListener('click',() => {
            localforage.removeItem(keyVal).then(() => {
                    resDisplay.innerHTML = `<h1>LocalForage is now empty</h1>`;
                }
            )
        });
    });

    return (
        <div className="localForage">
            <h1>localForage</h1>
            <div className="controls">
                <button className="cyan" name='set'>Set LocalForage</button>
                <button className="yellow" name='get'>Get LocalForage</button>
                <button className="orange" name='remove'>Remove LocalForage</button>
            </div>
            <p className="forageVal">This is the text to be copied!</p>
            <div className="centerAndBox" id="forageDisplay">
                <i>Value displayed here</i>
            </div>
        </div>
    )
}