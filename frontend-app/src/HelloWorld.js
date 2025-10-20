import React, { Fragment } from 'react';

function HelloWorld(props) {
    return (
        <Fragment>
            <hr />
            <h1>{props.message}</h1>
        </Fragment>
    );
}

export default HelloWorld;