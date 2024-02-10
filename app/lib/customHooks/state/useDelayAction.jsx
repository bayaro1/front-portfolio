import { useState } from "react";

export const useDelayAction = (timeToWait = 300) => {
    const [timer, setTimer] = useState(null);

    const delayAction = (action, overTimeToWait = null) => {
        if(timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                action();
                setTimer(null);
            }, overTimeToWait !== null ? overTimeToWait: timeToWait)
        );
    }

    return delayAction;
}