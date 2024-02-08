import { useState } from 'react';


export const useToggleState = (startingState, otherState) => {
    const [state, setState] = useState(startingState);
    const toggle = () => {
        setState(prevState => {
            if(prevState === startingState) {
                return otherState;
            }
            return startingState;
        })
    };
    const reset = () => {
        setState(startingState);
    }
    const setOtherState = () => {
        setState(otherState);
    }

    return [state, toggle, reset, setOtherState];
}

/**
 * 
 * @param {boolean} startingState 
 * @returns 
 */
export const useToggleBoolState = (startingState = false) => {
    const [state, setState] = useState(startingState);
    const toggle = () => {
        setState(prevState => !prevState)
    };

    return [state, toggle];
}