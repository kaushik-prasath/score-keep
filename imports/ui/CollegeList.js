import React from 'react';
import CollegeCom from './College.js';
import PropTypes from 'prop-types';




export default class CollegeList extends React.Component{

    renderCollege(){
        if(this.props.colleges.length === 0){
            return <p>Enter Colleges to get started!</p>
        }else{
             return this.props.colleges.map((college) => (
            <CollegeCom key={college._id} college={college}/>
        ));
        }
        
    }
    render(){
        return(
            <div>
                {this.renderCollege()}
            </div>
        );
    }
};

CollegeList.protoTypes = {
    colleges: PropTypes.array.isRequired
}