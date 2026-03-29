import {useEffect, useState} from "react";

const TIMER = 3000

export default function ProgressBar(props) {
    const [remainingTime, setRemainingTime] = useState(TIMER)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval')
            setRemainingTime(prevState => prevState - 10)
        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, []);

    return (<progress value={remainingTime} max={TIMER} />)
}