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
            <div>
                 <form onSubmit={this.handleSubmit}>
                        <input type="text" name="collegeName" placeholder="Enter a College Name"/>
                        <button >Add College</button>
                    </form>
            </div>
        );
    }
}
