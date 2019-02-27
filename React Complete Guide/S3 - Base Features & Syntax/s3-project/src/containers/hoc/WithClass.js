import React from 'react';

const withClass = (WrappedComponent, className) => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;