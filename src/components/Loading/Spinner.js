import React from 'react';
import { usePromiseTracker } from  'react-promise-tracker';
import "./Spinner.css";

const Spinner = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress && (
            <div className="spinner">
                <div id="html-spinner"></div>
            </div>
        )
        
    );
}

export default Spinner ;