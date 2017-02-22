import React from 'react';



export default class WeatherForm extends React.Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
    }


    submitForm(e) {
        e.preventDefault();
        let location = this.refs.location.value;
        if (typeof location === 'string'&& location.length >= 3) {
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <div>
            <form onSubmit={this.submitForm} >
                    <input type='text' ref='location'/>
                </form>
            </div>
        );
    }
}