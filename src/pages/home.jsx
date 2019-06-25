import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <h2>Chapters</h2>
            <div className="list">
                <ol>
                    <li><Link to="/intersectionObserver">Intersection Observer</Link></li>
                    <li><Link to="/localForage">localForage API</Link></li>
                    <li><Link to="/cache">Cache API</Link></li>
                    <li><Link to="/mem">Device Memory </Link></li>
                    <li><Link to="/apis">Useful APIS</Link></li>
                </ol>
            </div>
        </div>
    );
}

export default App;
