'use strict';

import React from 'react';
import {
    Toolbar,
    ToolbarButton,
    Icon,
    Splitter,
    Page,
    List,
    ListItem,
    SplitterSide,
    SplitterContent
} from 'react-onsenui';
import Main from '../pages/Main';

import strings from './Strings';
class Localization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.show = this.show.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);
        this.renderRow = this.renderRow.bind(this);
    };

    hide(language) {
        let lang = language === 'English' ? 'en' : 'ru';
            strings.setLanguage(lang);
        this.setState({isOpen: false});
    };

    show() {
        this.setState({isOpen: true});
    };

    renderToolbar() {
        return (
            <Toolbar>
                <div className='left'>
                    <ToolbarButton onClick={this.show}>
                        <Icon icon='ion-navicon, material:md-menu'/>
                    </ToolbarButton>
                </div>
                <div className='center'>Schedule</div>
            </Toolbar>
        );
    };

    renderRow(row, index) {
        const languages = ['English', 'Русский']
        return (
            <ListItem key={index} onClick={this.hide.bind(this, languages[row - 1])}
                      tappable>{languages[row - 1]}</ListItem>
        );
    };

    render() {
        return (
            <Splitter>
                <SplitterSide
                    /* style={{
                     boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
                     }}*/
                    side='left'
                    width={200}
                    collapse={true}
                    isSwipeable={true}
                    isOpen={this.state.isOpen}
                    onClose={this.hide}
                    onOpen={this.show}
                >
                    <Page>
                        <List
                            dataSource={[1, 2]}
                            renderRow={this.renderRow}
                        />
                    </Page>
                </SplitterSide>
                <SplitterContent>
                    <Page renderToolbar={this.renderToolbar}>
                        <Main/>
                    </Page>
                </SplitterContent>
            </Splitter>
        );
    }

}
;
module.exports = Localization;