import React, { Component } from 'react';

class CurrentlyReading extends Component {
    render() {
        return (
            <div className="currently-reading">
                <div className="currently-reading__header">
                    <div className="currently-reading__title">Currently reading</div>
                    <div className="currently-reading__nav">
                        <div className="currently-reading__left"><svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="3" stroke="#676767" fill="none" fillRule="evenodd"><path d="M32 9H2"/><path strokeLinecap="square" d="M9 16L2 9l7-7"/></g></svg></div>
                        <div className="currently-reading__right"><svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="3" stroke="#676767" fill="none" fillRule="evenodd"><path d="M0 9h30"/><path strokeLinecap="square" d="M23 2l7 7-7 7"/></g></svg></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentlyReading;