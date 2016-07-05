import React from 'react';
import { EditorState } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';

module.exports = React.createClass({

    getInitialState() {
        return {
            value:'',
            sourceVisible:false
        }
    },
    componentWillReceiveProps(nextProps) {
        let html = stateToHTML(nextProps.editorState.getCurrentContent());
        this.setState({
            value:html
        });
    },
    handleCommand() {
        this.props.toggleEditor();
        this.toggleSource();
    },

    toggleSource() {
        this.setState({
            sourceVisible:!this.state.sourceVisible
        })
    },

    editorSource(e) {
        e.stopPropagation();
        e.target.focus();
    },
    onChange(e) {
        this.setState({
            value:e.target.value
        });
    },
    render()  {
        const props = this.props;

        return (
            <div className={`${props.prefixCls}-toolbar-item`} title={props.title} onMouseDown={this.handleCommand}>
                <i className={`toolbar-item-icon-code icon `}></i>
                <textarea
                    className={`${props.prefixCls}-source`}
                    value={this.state.value}
                    onMouseDown={this.editorSource}
                    style={this.state.sourceVisible ? {}:{display: 'none'}}
                    onChange={this.onChange}
                    />
            </div>
        )
    }
});