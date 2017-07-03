import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


import {College, calculateCollegePositions} from './../imports/api/college';
import App from './../imports/ui/App';



Meteor.startup( () => {

    Tracker.autorun(() => {
            var college = College.find({},{
                sort:{
                    score:-1
                }
            }).fetch();

            let positionedColleges = calculateCollegePositions(college);
            console.log(positionedColleges);
            let title = 'Leaderboard App';
            let name = 'Kaushik Prasath';
            ReactDOM.render(<App college={positionedColleges} title={title} name={name}/>, document.getElementById('app'));
        });
});