import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail author="sam" timeAgo="Today at 4:00AM" text="HEY DEAR" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="jam" timeAgo="Today at 4:45AM" text="Nice Blog" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="ram" timeAgo="Today at 5:20PM" text="I Don't like it" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);