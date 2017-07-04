import React from 'react';
import CollegeCom from './College.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';




export default class CollegeList extends React.Component{

    renderCollege(){
        if(this.props.colleges.length === 0){
            return (
                <div className="item">
                    <p className="item__message">Enter Colleges to get started!</p>
                </div>
            )
        }else{
             return this.props.colleges.map((college) => (
            <CollegeCom key={college._id} college={college}/>
        ));
        }
        
    }
    render(){
        return(
            <div>
                
               <FlipMove duration={400} easing="ease" maintainContainerHeight={true}>
                    {this.renderCollege()}    
                </FlipMove>
                
            </div>
        );
    }
};

CollegeList.protoTypes = {
    colleges: PropTypes.array.isRequired
}