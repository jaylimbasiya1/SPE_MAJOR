import { useState, useEffect } from 'react';
import { signup, isAuth, preSignup } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';

import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';
  
const Analytics = () => {
    
    var values = {
      '2016-06-23': 1,
      '2016-06-26': 2,
      '2016-06-27': 3,
      '2016-06-28': 4,
      '2016-06-29': 4
    }
    var until = '2016-06-30';
  
    // var elem = document.getElementById('app');
   

    return (
        // ReactDOM.render(<Calendar values={values} until={until} />, elem)
        <React.Fragment>
            
            <h1>Analytics Comes Here</h1>
            {Date.now}
        </React.Fragment>
    );
};

export default Analytics;
