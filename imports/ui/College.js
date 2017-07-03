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
                       <p key={this.props.college._id} className="college__stats">  scored  {this.props.college.score}  point(s).--{this.props.college.position} place.</p>
                        </div>
                    
                 
                    <div className="college__actions">
                           <button className="button button--round" onClick={() => College.update({
                        _id: this.props.college._id
                    },{
                        $inc:{
                            score: 50
                        }
                    })}> +50</button>
                     <button className="button button--round" onClick={() => College.update({
                        _id: this.props.college._id
                    },{
                        $inc:{
                            score: -50
                        }
                    })}> -50</button>

                    <button className="button button--round" onClick={() => College.remove({_id: this.props.college._id})}>X</button>
                    </div>
                   
                 
                    </div>
            </div>
        )
    }
}

College.propTypes = {
    college: PropTypes.object.isRequired    
}

