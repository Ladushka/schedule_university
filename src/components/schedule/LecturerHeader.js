'use strict';

import React from 'react';

class StudentHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="button-bar" style={{width: 200 + 'px', margin: '8px auto 0'}}>
                <div className="button-bar__item">
                    <div className="button-bar__button">{this.props.userName}</div>
                </div>
            </div>
        );
    };
}
;
module.exports = StudentHeader;