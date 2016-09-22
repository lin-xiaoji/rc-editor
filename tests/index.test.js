/**
 * Created by linxiaoji on 16/9/18.
 */
import React from 'react'
import TestUtils, { Simulate } from 'react-addons-test-utils'
import expect from 'expect.js';
import {render} from 'react-dom'
import RcEditor from '../src/index'



describe('rc-editor', function () {

    let editor;
    const container = document.createElement('div');
    document.body.appendChild(container);

    function selectText(element) {
        var text = element;
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
            /*if(selection.setBaseAndExtent){
             selection.setBaseAndExtent(text, 0, text, 1);
             }*/
        } else {
            console.log('can not select');
        }
    }
    function renderWithProps(props) {
        return editor = render(
            <RcEditor
                {...props}
            />,
            container
        );
    }

    beforeEach(() => {
        editor = renderWithProps();
    });



    it('render works', function () {
        expect(TestUtils.scryRenderedDOMComponentsWithClass(editor, 'rc-editor-root').length).to.be(1);
    });

    it('bold works',()=> {
        const content = TestUtils.scryRenderedDOMComponentsWithClass(editor,'public-DraftEditor-content')[0];
        selectText(content);

        const bold = TestUtils.scryRenderedDOMComponentsWithClass(editor,'rc-editor-toolbar-item')[0];
        Simulate.click(bold);

    })


});
