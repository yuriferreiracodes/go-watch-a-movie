import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './AppClass';
import HelloWorld from './HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
        <div className="row">
          <div className="col">
                <AppClass message="Hello, World!" />
                <HelloWorld message="Hello, Again!" />
          </div>
        </div>
    </div>
  </React.StrictMode>
);
