import React from 'react'
import Highlight from 'react-highlight.js'
import {render} from 'react-dom'
import RcEditor from './src';
const plugins = [];
const toolbars = [
    'bold', 'italic', 'underline', 'strikethrough',
    '|', 'color', 'bgcolor', 'font', 'size',
    '|', 'head', 'orderlist', 'unorderlist',
    '|', 'link', 'unlink', 'image'
];
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html:''
        }
    }

    getHTML(html) {
        this.setState({
            html:html
        });
    }


    render() {

        return <div>
            <RcEditor
                plugins={plugins}
                toolbars={toolbars}
                defaultValue='<b>hello draftjs</b>'
                getHTML={this.getHTML.bind(this)}
            />

            <Highlight language='handlebars'>

                {this.state.html}
            </Highlight>

        </div>
    }
}
render(<Demo />
    ,document.getElementById("app"));