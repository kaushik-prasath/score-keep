import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import {College} from './../api/college';


export default class CollegeCom extends React.Component{
    render(){
        let itemClassName = `item item--${this.props.college.rank}`

        return (
            <div className={itemClassName}>
                   <div className="college">
                       <div>
                              <h3 className="college__name">{this.props.college.name}</h3>
                       
                        </div>
                    
                 
                    <div className="college__actions">
                           <button className="button button--round" onClick={() => College.update({
                        _id: this.props.college._id
                    },{
                        $inc:{
                            score: 10
                        }
                    })}> +10</button>
                     <button className="button button--round" onClick={() => College.update({
                        _id: this.props.college._id
                    },{
                        $inc:{
                            score: 5
                        }
                    })}>+5</button>

                    <button className="button button--round" onClick={() => College.update({
                        _id: this.props.college._id
                    },{
                        $inc:{
                            score: 1
                        }
                    })}>+1</button>

                    <button className="button button--round" onClick={() => College.remove({_id: this.props.college._id})}>X</button>

                   
                    
                    </div>

                 
                 </div>
                    
                 {this.renderScore()}
            </div>
        )
    }

    renderScore(){
        if(this.props.college.score > 0){
            return(
                <div className="border_box">
                    <p key={this.props.college._id} className="college__stats">{this.props.college.score} point(s).</p>
                    <p className="college__stats__2">{this.props.college.position} place.</p>
                </div>
            )
    }
}
}

CollegeCom.propTypes = {
    college: PropTypes.object.isRequired    
}

