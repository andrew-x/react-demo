import React from 'react';
import {browserHistory} from 'react-router';

class Page1 extends React.Component {

    onClick(){
        browserHistory.push('/2');
    }
    render() {
        return (
            <div>
                <h1>Page 1</h1>
                <button onClick={this.onClick}>Go to 2</button>
            </div>
        );
    }
}

export default Page1;