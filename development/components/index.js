/**
 * Created by shiyun on 2017/4/28.
 */

var React = require('react');
var ProductBox;
ProductBox = React.createClass({
    render: function () {
        return (
            <div className="productBox" style={{color: 'red', fontSize: '100px', marginTop: '200px', textAlign: 'center'}}>
                hello react&es2016&webpack!!!
            </div>
        );
    }
});

module.exports = ProductBox;