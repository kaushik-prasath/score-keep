import React from 'react';

import {College} from './../api/college';

export default class AddCollege extends React.Component {
    
     handleSubmit(e){
            var collegeName = e.target.collegeName.value;
            e.preventDefault();
            let colleges = College.find().fetch();

            let nameDoesExist = false;

            let names = colleges.find((c)=> {
                c.name = c.name.toUpperCase();
                collegeName = collegeName.toUpperCase();

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

       handleSubmit2(e){
           var collegeName = e.target.collegeName2.value;
           e.preventDefault();
           let colleges = College.find().fetch();
           
             let nameDoesExist = false;

           let names = colleges.find((c)=> {
                c.name = c.name.toUpperCase();
                collegeName = collegeName.toUpperCase();


                if(c.name === collegeName){
                     e.target.collegeName2.value = '';
                     var doc = College.findOne({name: collegeName});
                       College.remove({
                            _id:doc._id
                     });
                    nameDoesExist = true;
                    return;    
                }
            });

             if(collegeName && !nameDoesExist){
                e.target.collegeName2.value = '';
                  alert('Enter a existing College name');
           }
               
         
        }
    
    render(){
        return (
            <div className="item">
                 <form className="form" onSubmit={this.handleSubmit}>
                        <input className="form__input" type="text" name="collegeName" placeholder="Enter a College Name"/>
                        <button className="button">Add College</button>
                    </form>
                <form className="form" onSubmit={this.handleSubmit2}>
                        <input className="form__input" type="text" name="collegeName2" placeholder="Enter a existing College Name"/>
                        <button className="button">Delete College</button>
                    </form>
                      
                  
            </div>
        );
    }
}
