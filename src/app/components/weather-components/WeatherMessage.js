import React from 'react';

const WeatherMessage = (props) => {

    let {iconClass, message} = props;

    return (
        <div >
            <h2>
                <i className={iconClass}></i>
                {message}
            </h2>
        </div>
    );
}

export default WeatherMessage;