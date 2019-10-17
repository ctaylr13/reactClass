import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
                </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="fred" 
                    timeAgo="Today at 4:45PM"  
                    text="fuck juuls"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="alex" 
                    timeAgo="Today at 4:45PM" 
                    text="fuck scooters"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="sterl" 
                    timeAgo="Today at 4:45PM" 
                    text="fuck maxhesh"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));