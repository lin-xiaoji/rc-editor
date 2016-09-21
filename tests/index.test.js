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
        const bold = TestUtils.scryRenderedDOMComponentsWithClass(editor,'rc-editor-toolbar-item')[0];
        Simulate.click(bold);

    })


});
