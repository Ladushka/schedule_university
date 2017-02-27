'use strict';

import React from 'react';

class StudentHeader extends React.Component {

    render() {
        return (
            <div className="button-bar" style={{width: 200 + 'px', margin: '8px auto 0'}}>
                <div className="button-bar__item">
                    <div className="button-bar__button">{localStorage.getItem('faculty')}</div>
                </div>
                <div className="button-bar__item">
                    <div className="button-bar__button">{localStorage.getItem('group')}</div>
                </div>
            </div>
        );
    };
}
;
module.exports = StudentHeader;