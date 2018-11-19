import React from 'react';

const userInput = (props) => {
  return (
    <div className="userInput">
      <input type="text" onChange={props.changename} value={props.username} />
    </div>
  )
};

export default userInput;
