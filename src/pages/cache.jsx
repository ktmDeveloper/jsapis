import React from 'react';
export default function intersectionObserver() {

    window.addEventListener('load', () => {
        const keyVal = 'forageKey';
        const set = document.querySelector('.cache button[name=set]');
        const get = document.querySelector('.cache button[name=get]');
        const remove = document.querySelector('.cache button[name=remove]');
        const val = document.querySelector('.cache .forageVal').innerHTML;
        let resDisplay = document.getElementById('forageDisplay');

        set.addEventListener('click',() => {
            console.log(window.caches)
        });
        get.addEventListener('click',() => {
            console.log(window.caches)   
        });
        remove.addEventListener('click',() => {
           
        });
    });

    return (
        <div className="cache">
            <h1>Cache</h1>
            <div className="controls">
                <button className="cyan" name='set'>Set cache</button>
                <button className="yellow" name='get'>Get cache</button>
                <button className="orange" name='remove'>Remove cache</button>
            </div>
            <p className="forageVal">This is the text to be copied!</p>
            <div className="centerAndBox" id="forageDisplay">
                <i>Not working right now</i>
            </div>
        </div>
    )
}