// All you actions are done here
import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../../types';

const AlertState = props => {
    const initialState = null;
    const [ state, dispatch ] = useReducer(alertReducer, initialState);

    // Set Alert
    const setAlert = (msg, level) => {
        dispatch({
            type:SET_ALERT,
            payload: {msg, level}
        });

        setTimeout(() => dispatch({type:REMOVE_ALERT}), 5000);
      };

    return <alertContext.Provider
    value={{ 
        alert: state,
        setAlert
    }}
    >
        { props.children }
    </alertContext.Provider>
}

export default AlertState;