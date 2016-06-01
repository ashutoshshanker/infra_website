// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "Arista-icon";

var Arista = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Arista' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'Arista-title';// + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="100px" viewBox="-38 330 704 150"
        version="1.1" role="img" fill="#16325B" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path d="M117.2,343c0.9,0,1.6,0,2.4,0c28.9,0,57.8-0.1,86.6,0.1c13.7,0.1,26.4,10.1,29.8,23.7c3.8,15-3.3,30-17.5,36.8
        	c-4.5,2.2-9.4,3-14.4,2.9c-2.8-0.1-5.6-0.1-8.4,0c-0.7,0-1.3,0.4-1.9,0.5c0.3,0.6,0.4,1.4,0.9,1.8c7.8,7.4,15.6,14.8,23.4,22.3
        	c6.1,5.8,12.1,11.6,18.2,17.4c0.3,0.3,0.5,0.6,0.9,1.1c-0.7,0.1-1.2,0.3-1.7,0.3c-6.9,0-13.8-0.1-20.6,0.1c-1.8,0-2.9-0.6-4.1-1.8
        	c-12-11.6-24-23.1-36-34.6c-7.9-7.6-15.9-15.2-23.8-22.8c-0.4-0.4-0.6-0.8-1.3-1.6c1.2,0,2,0,2.8,0c17.6,0,35.2,0,52.8,0
        	c9.3,0,15.9-7.6,14.6-16.8c-0.9-6.6-7-11.8-14.4-12.1c-3.4-0.1-6.9-0.1-10.3-0.1c-18.3,0-36.6,0-55,0c-3.1,0-3.1,0-3.1,3.3
        	c0,27.8,0,55.7,0,83.5c0,2.3-0.6,3-2.9,3c-5.5-0.2-11-0.1-16.7-0.1C117.2,414.2,117.2,378.7,117.2,343z"/>
        <path d="M409.4,343.1c-3.6,5.8-6.9,11.1-10.4,16.4c-0.4,0.7-2,0.8-3,0.8c-21.9,0-43.8,0-65.7,0c-4.7,0-8.9,1.2-12,4.8
        	c-4,4.6-4.7,9.8-2,15.1c2.3,4.7,6.3,7.4,11.7,7.4c13.1,0.1,26.2,0,39.3,0c6.8,0,13.6,0,20.4,0.3c13.1,0.7,24.8,10.6,27.8,23.3
        	c3.2,13.8-2.6,27.5-14.5,34.3c-5,2.9-10.4,4.3-16.2,4.3c-27.4-0.1-54.7,0-82.1,0c-0.6,0-1.1,0-2.1-0.1c0.6-1.3,1.1-2.4,1.7-3.5
        	c2.5-4.1,5.2-8,7.6-12.2c1-1.6,2.3-1.4,3.7-1.4c23.4,0,46.9,0,70.3,0c7.1,0,12.3-3.7,14.3-10.1c2.7-8.4-3.9-17.3-12.9-17.3
        	c-15.8,0-31.5,0.1-47.3,0c-5.5,0-11.1,0.1-16.4-1c-19.5-4-30.2-25.6-21.2-43.6c4.6-9.3,12-14.8,22.2-16.8c2.6-0.5,5.2-0.8,7.8-0.8
        	c25.6-0.1,51.2,0,76.8,0C407.8,343,408.3,343.1,409.4,343.1z"/>
        <path d="M554.8,401.5c14,0,27.4,0,41.2,0c-0.4,1-0.5,1.6-0.8,2.1c-2.8,4.6-5.6,9.1-8.4,13.7c-0.8,1.4-1.9,1.8-3.6,1.8
        	c-12.2-0.1-24.3,0-36.5-0.1c-2.2,0-3.5,0.6-4.6,2.5c-5.6,9.1-11.4,18.1-17.1,27.1c-0.3,0.5-0.9,1.1-1.3,1.1
        	c-6.7,0.1-13.4,0.1-20.6,0.1c1.9-3.1,3.6-5.7,5.3-8.4c12.8-20.2,25.7-40.4,38.5-60.5c6.9-10.9,13.8-21.8,20.8-32.6
        	c4-6.2,12.4-7.2,17.6-2.1c2.1,2.1,3.6,4.9,5.2,7.4c6.3,9.9,12.6,19.8,18.9,29.6c10.5,16.4,21,32.9,31.6,49.3
        	c3.2,5,6.5,10.1,9.7,15.1c0.4,0.6,0.7,1.2,1.4,2.2c-2.2,0-4,0-5.8,0c-4.3,0-8.6-0.1-13,0.1c-1.8,0.1-2.8-0.5-3.7-2
        	c-7.6-12-15.3-24.1-23-36.1c-9.2-14.4-18.3-28.8-27.4-43.2c-0.9-1.4-1.6-2.3-2.9-0.4C569.2,379.2,562.3,390,554.8,401.5z"/>
        <path d="M108.9,449.7c-1.1,0.1-1.8,0.2-2.4,0.2c-3.7,0-7.4-0.4-11,0.1c-5.8,0.8-8.8-1.6-11.8-6.5
        	c-9.4-15.5-19.4-30.6-29.1-45.8c-6-9.5-12-19-18.1-28.5c-1.7-2.6-2.1-2.6-3.7-0.1c-6.4,10.1-12.9,20.2-19.3,30.2
        	c-0.4,0.6-0.6,1.2-1.2,2.3c13.9,0,27.2,0,41.3,0c-1.7,2.8-3,5-4.4,7.2c-1.8,2.9-3.5,5.9-5.5,8.7c-0.6,0.9-2,1.6-3,1.6
        	c-12.3,0.1-24.6,0.1-36.9,0c-2,0-3.1,0.5-4.2,2.3c-5.6,9.1-11.4,18-17.2,27c-0.4,0.6-1.2,1.4-1.9,1.4c-6.5,0.1-12.9,0.1-19.9,0.1
        	c0.7-1.4,1.2-2.5,1.9-3.5c9.6-15.1,19.2-30.1,28.8-45.1c10.9-17,21.8-34,32.6-51.1c2.7-4.2,5.9-7,11-7.1c4.2-0.1,7.3,1.9,9.5,5.3
        	c4.4,6.7,8.6,13.4,12.9,20.1c8.5,13.3,17,26.6,25.5,39.9c8.5,13.4,17.1,26.7,25.6,40.1C108.4,448.8,108.5,449,108.9,449.7z"/>
        <path d="M486.5,449.7c-6.6,0-12.9,0-19.6,0c0-1,0-2,0-2.9c0-27.8,0-55.5,0-83.3c0-3.3,0-3.3-3.2-3.3
        	c-13.8,0-27.7,0-41.5,0c-0.7,0-1.4,0-2.6,0c0.7-1.3,1.1-2.3,1.7-3.1c2.8-4.3,5.6-8.5,8.6-12.7c0.5-0.7,1.5-1.3,2.2-1.3
        	c31.9-0.1,63.8-0.1,95.7,0c0.3,0,0.6,0.1,1.2,0.2c0,5.3,0.1,10.5-0.1,15.8c0,0.4-1.5,1.1-2.3,1.2c-12.1,0.1-24.2,0-36.2,0
        	c-3.8,0-3.8,0-3.8,3.8c0,27.5,0,55,0.1,82.5C486.5,447.6,486.5,448.6,486.5,449.7z"/>
        <path d="M277.5,449.9c-6.3,0-12.1,0-17.9-0.1c-0.5,0-1.3-0.9-1.5-1.5c-0.3-0.6-0.1-1.4-0.1-2.1c0-20.5,0-41,0-61.4
        	c0-13,0.3-26.1,0.3-39.1c0-2.1,0.7-2.6,2.7-2.5c4.2,0.1,8.5,0,12.7,0c3.8,0,3.9,0,3.9,4c0,8.2,0,16.3,0,24.5c0,25,0,49.9,0,74.9
        	C277.5,447.5,277.5,448.5,277.5,449.9z"/>

      </svg>
    );
  }

});

module.exports = Arista;
