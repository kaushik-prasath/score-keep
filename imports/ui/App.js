import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddCollege from './AddCollege';
import CollegeList from './CollegeList';


export default class App extends React.Component {
    render(){
        return (
            <div>
                    <TitleBar title={this.props.title} />
                    <div className="wrapper">
                        <CollegeList colleges={this.props.college}/>
                        <AddCollege/>
                    </div>
                    
            </div>
        );
    }
};

App.propTypes = {
    college:PropTypes.array.isRequired,
    title:PropTypes.string.isRequired
}