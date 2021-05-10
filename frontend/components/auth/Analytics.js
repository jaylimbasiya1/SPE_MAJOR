import { useState, useEffect} from 'react';
import { signup, isAuth, preSignup } from '../../actions/auth';


import fetch from 'isomorphic-fetch';

import { API } from '../../config';

import React from 'react';
import ReactDOM from 'react-dom';

import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';

const today = new Date();
  
const Analytics = () => {
    
    
    const [post,setPost] = useState([]);

    useEffect(() => {
        let id=isAuth() && isAuth()._id;
        analysis(id);

    },[]);


    const analysis=(userid)=>{
        userid=isAuth() && isAuth()._id; 
        console.log("call Analyssis ",userid);
        return fetch(`${API}/analytics/${userid}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }
        )
        .then( (response) => {
                const data=response.json().then((data)=>{
                    // console.log("data:",data);
                    setPost(data);
                })
                
            })
        .catch(err => console.error(err));
    };

    const temValues = ()=>{
        console.log("inside date data: ",post);
    }

    return (
        <React.Fragment>
            <h1>Analytics Comes Here</h1><br/>
            {getCalendar(post)}

        </React.Fragment>
    );
        
};

const shiftDate = (date, numDays) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

const getCalendar = (post)=>{

    const getValues = ()=>{

        const values = []
        post.forEach((obj)=>{
            
            const tem = {}
            if(obj._id!==null){
                tem.date = obj._id;
                console.log("Tem data",tem.date);
                tem.count = obj.count;
                values.push(tem);
            }
        })
        console.log("values: ",values);
        return values;
    }

    if (!post){
        return null;
    }
    else{
        return (
            
            <CalendarHeatmap
                startDate={shiftDate(today, -250)}
                endDate={today}
                values={getValues()}
                tooltipDataAttrs={value => {
                return {
                    'data-tip': `${value.date} has count: ${
                    value.count
                    }`,
                };
                }}
                showWeekdayLabels={true}
                onClick={value =>{
                    if(value!=null){
                        return alert(`Clicked on value with count: ${value.count}`);
                    }
                    else{
                        return alert(`Clicked on value with count: 0`);
                    }
                } } 
            />
            // {/* <ReactTooltip /> */}
            
        )
    }

}

export default Analytics;
