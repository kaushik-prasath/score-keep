import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const College = new Mongo.Collection('college');

export const calculateCollegePositions = (colleges) => {
    let rank = 1;

    return colleges.map((college,index)=>{
        if(index !== 0 && colleges[index - 1].score > college.score){
            rank++;
        }

          return {
            ...college,
            rank,
            position:numeral(rank).format('0o')
        };
    });

  
};