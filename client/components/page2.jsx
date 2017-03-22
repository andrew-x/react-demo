import React from 'react';
import {browserHistory} from 'react-router';

class Page2 extends React.Component {
    onClick(){
        browserHistory.push('/');
    }
    render() {
        return (
            <div>
                <h1>Page 2</h1>
                <button onClick={this.onClick}>Go to 1</button>
            </div>
        );
    }
}

export default Page2;