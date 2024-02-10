import { useState } from "react";

export const useDelayAction = (timeToWait = 300) => {
    const [timer, setTimer] = useState(null);

    const clearTimer = () => {
        if(timer) {
            clearTimeout(timer);
            setTimer(null);
        }
    };

    const delayAction = (action, overTimeToWait = null) => {
        clearTimer();
        setTimer(
            setTimeout(() => {
                action();
                setTimer(null);
            }, overTimeToWait !== null ? overTimeToWait: timeToWait)
        );
    }

    return [delayAction, clearTimer];
}