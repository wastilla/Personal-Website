import  React, { useState , useEffect } from 'react'
import Moment from 'moment';

export const Datetime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        } 
    });

    return(
        <div className="whitespace-nowrap">
            <p>{Moment(date).format('HH:mm')} {Moment(date).format('MMM d')}</p>
        </div>
    )
}

export default Datetime