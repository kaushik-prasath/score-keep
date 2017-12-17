import React from 'react';

import {College} from './../api/college';

export default class AddCollege extends React.Component {
    
     handleSubmit(e){
            var collegeName = e.target.collegeName.value;
            

            e.preventDefault();
            let colleges = College.find().fetch();

            let nameDoesExist = false;

            let names = colleges.find((c)=> {
                

                if(c.name === collegeName){
                    alert('College already exists');
                    e.target.collegeName.value = '';
                    nameDoesExist = true;
                    return;    
                }
            });

            if(collegeName && !nameDoesExist){
                
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
                        <input className="form__input" type="text" name="collegeName" placeholder="Enter a Zone" autoComplete="off" autoFocus/>
                        <button className="button">Add Zone</button>
                    </form>       
                  
            </div>
        );
    }
}
