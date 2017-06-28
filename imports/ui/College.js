import React from 'react';
import PropTypes from 'prop-types';

import {College} from './../api/college';


export default class CollegeCom extends React.Component{
    render(){
        return (
            <div>
                   <p key={this.props.college._id}>{this.props.college.name} scored {this.props.college.score} point(s).
                    <button onClick={() => College.update({
                        _id: this.props.college._id
                    },{
                        $inc:{
                            score: 50
                        }
                    })}> +50</button>

                    <button onClick={() => College.update({
                        _id: this.props.college._id
                    },{
                        $inc:{
                            score: -50
                        }
                    })}> -50</button>

                    <button onClick={() => College.remove({_id: this.props.college._id})}>X</button>
                 </p>
            </div>
        )
    }
}

College.propTypes = {
    college: PropTypes.object.isRequired    
}

