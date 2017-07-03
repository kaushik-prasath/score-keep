import React from 'react';

import {College} from './../api/college';

export default class AddCollege extends React.Component {
    
     handleSubmit(e){
            var collegeName = e.target.collegeName.value;
            e.preventDefault();
            if(collegeName){
                e.target.collegeName.value = '';
                College.insert({
                        name: collegeName,
                        score: 0
                    });
            console.log(College.find().fetch());
        }
    }    
    
    render(){
        return (
            <div className="item">
                 <form className="form" onSubmit={this.handleSubmit}>
                        <input className="form__input" type="text" name="collegeName" placeholder="Enter a College Name"/>
                        <button className="button">Add College</button>
                    </form>
            </div>
        );
    }
}
