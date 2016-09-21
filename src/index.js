import '../assets/index.less'

import React, { Component, PropTypes } from 'react';
import Editor  from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import { stateToHTML  } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';


import toolbarPlugin from './plugins/toolbar';
import splitPlugin from './plugins/split/index';

import boldPlugin from './plugins/bold/index';
import italicPlugin from './plugins/italic/index';
import underlinePlugin from './plugins/underline/index';
import strikethroughPlugin from './plugins/strikethrough/index';
import colorPlugin from './plugins/color/index';
import bgColorPlugin from './plugins/bgcolor/index';

import fontPlugin from './plugins/font/index';
import sizePlugin from './plugins/size/index';

import headPlugin from './plugins/head/index';
import orderListPlugin from './plugins/orderList/index';
import unorderListPlugin from './plugins/unorderList/index';

import linkPlugin from './plugins/link/index';
import unlinkPlugin from './plugins/unlink/index';
import imagePlugin from './plugins/image/index';


export default class RcEditor extends Component {
    constructor(props) {
        super(props);
        const contentState = stateFromHTML(props.defaultValue);
        this.state = {
            editorState:  EditorState.createWithContent(contentState),
            plugins: this.props.plugins.concat(this.props.defaultPlugins)
        };
    }

    static propTypes = {
        prefixCls:React.PropTypes.string.isRequired,
        lang:React.PropTypes.string.isRequired,
        width:React.PropTypes.string.isRequired,
        height:React.PropTypes.string.isRequired,
        plugins:React.PropTypes.array,
        toolbars:React.PropTypes.array,
        onChange:React.PropTypes.func,
        getHTML:React.PropTypes.func
    };

    static defaultProps = {
        prefixCls: 'rc-editor',
        lang: 'zh-CN',
        width: '100%',
        height: '280px',
        defaultValue:'',
        plugins:[],
        defaultPlugins:[
            toolbarPlugin,
            boldPlugin,
            italicPlugin,
            underlinePlugin,
            strikethroughPlugin,
            colorPlugin,
            bgColorPlugin,
            splitPlugin,
            fontPlugin,
            sizePlugin,
            headPlugin,
            orderListPlugin,
            unorderListPlugin,
            linkPlugin,
            unlinkPlugin,
            imagePlugin,
        ],
        toolbars:[
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'color',
            'bgcolor',
            'font',
            'size',
            '|',
            'head',
            'orderlist',
            'unorderlist',
            '|',
            'link',
            'unlink',
            'image',
        ],

        onChange:(editorState) => {

        },
        getHTML:(html) => {

        }

    };



    getPlugins() {
        return this.state.plugins.slice();
    }


    getEditorState = () => this.state.editorState;
    onChange(editorState) {
        this.setState({
            editorState
        });
        this.props.onChange(editorState);
        let html = stateToHTML(editorState.getCurrentContent());
        this.props.getHTML(html);
    }

    focus() {
        this.refs.editor.focus();
    }

    render() {
        const Toolbar = toolbarPlugin.component;

        //获取当前样式和模块样式，用于标识工具栏激活状态
        const editorState = this.state.editorState;
        const currentStyle = editorState.getCurrentInlineStyle();
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();

        return (
            <div className={`${this.props.prefixCls}-root`} style={{width:this.props.width}} >
                <Toolbar
                    prefixCls={this.props.prefixCls}
                    lang={this.props.lang}
                    setEditorState={this.onChange.bind(this)}
                    getEditorState={this.getEditorState}
                    plugins={this.state.plugins}
                    toolbars={this.props.toolbars}
                    currentStyle={currentStyle}
                    blockType={blockType}
                    />
                <div className="clear" />
                <div onClick={this.focus.bind(this)}
                     className={`${this.props.prefixCls}-editor`}
                     style={{height:this.props.height,overflow: 'auto'}}
                >
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange.bind(this)}
                        plugins={this.state.plugins}
                        ref="editor"
                        />
                </div>
            </div>
        );
    }
}