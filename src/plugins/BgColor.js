import React from 'react';
import Color from './Color';
module.exports = React.createClass({
    render() {
        return <Color {...this.props} type="BGCOLOR" />
    }
});