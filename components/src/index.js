import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail 
                author="fred" 
                timeAgo="Today at 4:45PM"  
                text="fuck juuls"
                avatar={faker.image.avatar()}/>
           <CommentDetail 
                author="alex" 
                timeAgo="Today at 4:45PM" 
                text="fuck scooters"
                avatar={faker.image.avatar()}/>
           <CommentDetail 
                author="sterl" 
                timeAgo="Today at 4:45PM" 
                text="fuck maxhesh"
                avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));