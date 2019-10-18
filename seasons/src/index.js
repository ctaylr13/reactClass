import React from 'react';
import ReactDom from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    constructor (props) {
        super(props); //need this because its using 'React.Component'

        // this is the only time we do this.state 
        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setstate!!!!
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message});
            }
        );
    }

    // example of a class based component 
    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>; 
    }
}

ReactDom.render(<App />, document.querySelector('#root'))