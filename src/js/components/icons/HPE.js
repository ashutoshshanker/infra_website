// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "hpe-icon";

var HPE = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'HPE' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'hpe-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="139px" viewBox="0 0 138.9 58"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#333333" d="M3,36.2H0V22.6h3V28h5.3v-5.4h3v13.6h-3v-5.7H3V36.2z M18,36.4c-3,0-5.1-1.9-5.1-5
    c0-3,2-5.1,4.7-5.1c2.9,0,4.3,1.9,4.3,4.8v1.1h-6.2c0.3,1.5,1.5,1.9,2.7,1.9c1,0,1.8-0.2,2.7-0.8h0.1v2.2
    C20.5,36.1,19.3,36.4,18,36.4z M15.7,30.2h3.5c-0.1-1-0.5-1.7-1.6-1.7C16.8,28.5,16,28.9,15.7,30.2z M29.7,30.5l-1.5,5.7h-2.6
    l-3-9.6v-0.1h2.8l1.6,5.7l1.5-5.7h2.3l1.6,5.7l1.6-5.7h2.7v0.1l-3,9.6h-2.6L29.7,30.5z M41.6,36.4c-2.4,0-3.3-0.9-3.3-3.1V22.6h2.9
    v10.5c0,0.7,0.3,0.9,0.8,0.9c0.2,0,0.5-0.1,0.7-0.1h0v2.4C42.5,36.3,42.1,36.4,41.6,36.4z M48.6,36.4c-3,0-5.1-1.9-5.1-5
    c0-3,2-5.1,4.7-5.1c2.9,0,4.3,1.9,4.3,4.8v1.1h-6.2c0.3,1.5,1.5,1.9,2.7,1.9c1,0,1.8-0.2,2.7-0.8h0.1v2.2
    C51.1,36.1,50,36.4,48.6,36.4z M46.4,30.2h3.5c-0.1-1-0.5-1.7-1.6-1.7C47.4,28.5,46.6,28.9,46.4,30.2z M64.4,26.5h2.1v2.3h-2.1v4
    c0,0.9,0.3,1.2,1.2,1.2c0.2,0,0.5,0,0.9-0.1h0.1v2.3c-0.4,0.1-0.9,0.3-1.8,0.3c-2.3,0-3.3-1.1-3.3-3.5v-4.1h-3.7v4
    c0,0.9,0.3,1.2,1.2,1.2c0.2,0,0.5,0,0.9-0.1H60v2.3c-0.4,0.1-0.9,0.3-1.8,0.3c-2.3,0-3.3-1.1-3.3-3.5v-4.1h-1.5v-2.3h1.5v-2.7h2.9
    v2.7h3.7v-2.7h2.9V26.5z M81.5,27.2c0,3-2,4.6-5,4.6h-2.1v4.4h-3V22.6h5.1C79.5,22.6,81.5,24.2,81.5,27.2z M76.2,29.3
    c1.5,0,2.2-0.9,2.2-2.1c0-1.3-0.7-2.1-2.2-2.1h-1.9v4.2H76.2z M87.9,35.2c-0.6,0.8-1.6,1.1-2.6,1.1c-1.9,0-3.5-1.2-3.5-3.2
    c0-1.9,1.6-3.2,3.8-3.2c0.7,0,1.4,0.1,2.2,0.3v-0.2c0-1-0.6-1.5-2.1-1.5c-1,0-1.9,0.3-2.7,0.7h-0.1v-2.3c0.7-0.4,2.1-0.8,3.3-0.8
    c2.9,0,4.5,1.4,4.5,3.8v6.1h-2.8V35.2z M87.8,33.1v-0.8c-0.4-0.2-1-0.3-1.6-0.3c-0.9,0-1.5,0.3-1.5,1.1c0,0.8,0.6,1.2,1.4,1.2
    C86.9,34.3,87.6,33.9,87.8,33.1z M92.2,31.4c0-3.1,2.2-5.1,5.1-5.1c1,0,2,0.2,2.7,0.7v2.5h-0.1c-0.6-0.5-1.4-0.8-2.2-0.8
    c-1.4,0-2.5,1-2.5,2.6c0,1.7,1.1,2.6,2.5,2.6c0.9,0,1.6-0.3,2.2-0.8h0.1v2.5c-0.7,0.5-1.7,0.7-2.7,0.7
    C94.4,36.4,92.2,34.5,92.2,31.4z M104.7,31.8v4.4h-2.9V22.6h2.9v7.8l2.9-3.8h3.3v0.1l-3.5,4.4l3.5,5.1v0.1h-3.3L104.7,31.8z
     M117.4,35.2c-0.6,0.8-1.6,1.1-2.6,1.1c-1.9,0-3.5-1.2-3.5-3.2c0-1.9,1.6-3.2,3.8-3.2c0.7,0,1.4,0.1,2.2,0.3v-0.2
    c0-1-0.6-1.5-2.1-1.5c-1,0-1.9,0.3-2.7,0.7h-0.1v-2.3c0.7-0.4,2.1-0.8,3.3-0.8c2.9,0,4.5,1.4,4.5,3.8v6.1h-2.8V35.2z M117.3,33.1
    v-0.8c-0.4-0.2-1-0.3-1.6-0.3c-0.9,0-1.5,0.3-1.5,1.1c0,0.8,0.6,1.2,1.4,1.2C116.4,34.3,117,33.9,117.3,33.1z M125,28.1
    c0.5-1.1,1.3-1.7,2.4-1.7c0.4,0,0.8,0.1,0.9,0.2v2.8h-0.1c-0.3-0.1-0.7-0.2-1.3-0.2c-0.9,0-1.6,0.5-1.8,1.5v5.6h-2.9v-9.7h2.8V28.1
    z M136.1,35.2c-0.6,0.8-1.6,1.2-2.9,1.2c-2.5,0-4.1-2.3-4.1-5.1c0-2.8,1.6-5.1,4.1-5.1c1.3,0,2.2,0.4,2.8,1.1v-4.8h2.9v13.6h-2.8
    V35.2z M136,32.9v-3.1c-0.5-0.7-1.1-1-1.8-1c-1.3,0-2.1,0.9-2.1,2.6c0,1.7,0.9,2.6,2.1,2.6C134.9,33.9,135.5,33.6,136,32.9z
     M0,40.7h8.4v1.7H1.9v4.2h5.9v1.6H1.9v4.5h6.5v1.7H0V40.7z M15.4,44.5c2.2,0,3.4,1.4,3.4,3.8v6h-1.8v-6c0-1.2-0.6-2.1-2-2.1
    c-1.1,0-2.1,0.7-2.4,1.7v6.4h-1.8v-9.6h1.8v1.4C13.1,45.2,14,44.5,15.4,44.5z M23.6,44.7h2.5v1.6h-2.5v5.2c0,1.1,0.6,1.5,1.6,1.5
    c0.3,0,0.6,0,0.8-0.1h0.1v1.5c-0.3,0.1-0.6,0.2-1.1,0.2c-2.2,0-3.1-1-3.1-2.9v-5.3h-1.7v-1.6h1.7v-2.6h1.8V44.7z M32,54.5
    c-2.8,0-4.7-1.9-4.7-4.9c0-3,1.8-5.1,4.4-5.1c2.6,0,4,1.9,4,4.7v0.8h-6.6c0.2,1.9,1.4,2.9,3.2,2.9c1.1,0,1.8-0.2,2.7-0.9H35v1.6
    C34.2,54.3,33.2,54.5,32,54.5z M29.1,48.6h4.8c-0.1-1.4-0.8-2.5-2.2-2.5C30.3,46.1,29.4,47.1,29.1,48.6z M39.6,46.2
    c0.4-1,1.3-1.6,2.4-1.6c0.4,0,0.8,0.1,0.9,0.2v1.8h-0.1c-0.3-0.1-0.7-0.2-1.1-0.2c-1,0-1.8,0.7-2.1,1.7v6.3h-1.8v-9.6h1.8V46.2z
     M49.1,44.5c2.9,0,4.4,2.3,4.4,5c0,2.7-1.5,5-4.4,5c-1.2,0-2.2-0.6-2.7-1.3V58h-1.8V44.7h1.8v1.1C46.9,45.1,47.9,44.5,49.1,44.5z
     M48.8,52.9c1.8,0,2.8-1.4,2.8-3.4c0-1.9-1-3.4-2.8-3.4c-1,0-1.9,0.6-2.4,1.5v3.7C46.9,52.3,47.8,52.9,48.8,52.9z M57.4,46.2
    c0.4-1,1.3-1.6,2.4-1.6c0.4,0,0.8,0.1,0.9,0.2v1.8h-0.1c-0.3-0.1-0.7-0.2-1.1-0.2c-1,0-1.8,0.7-2.1,1.7v6.3h-1.8v-9.6h1.8V46.2z
     M63.4,40.8c0.6,0,1.2,0.5,1.2,1.1c0,0.6-0.5,1.1-1.2,1.1c-0.6,0-1.2-0.5-1.2-1.1C62.2,41.3,62.8,40.8,63.4,40.8z M62.5,44.7h1.8
    v9.6h-1.8V44.7z M70.7,48.7c1.4,0.4,2.9,1,2.9,2.8c0,2-1.6,3-3.7,3c-1.3,0-2.5-0.3-3.3-0.9v-1.7h0.1c0.8,0.7,2,1.1,3.1,1.1
    c1,0,1.9-0.4,1.9-1.2c0-0.9-0.8-1-2.3-1.5c-1.4-0.4-2.9-0.9-2.9-2.8c0-1.9,1.5-2.9,3.5-2.9c1.1,0,2.1,0.2,2.9,0.8V47h-0.1
    c-0.8-0.6-1.7-1-2.8-1c-1.1,0-1.8,0.5-1.8,1.2C68.5,48,69.2,48.2,70.7,48.7z M80,54.5c-2.8,0-4.7-1.9-4.7-4.9c0-3,1.8-5.1,4.4-5.1
    c2.6,0,4,1.9,4,4.7v0.8H77c0.2,1.9,1.4,2.9,3.2,2.9c1.1,0,1.8-0.2,2.7-0.9H83v1.6C82.2,54.3,81.1,54.5,80,54.5z M77.1,48.6h4.8
    c-0.1-1.4-0.8-2.5-2.2-2.5C78.3,46.1,77.4,47.1,77.1,48.6z"/>
        <path fill="#03B388" d="M0,0v13.6h0h47.5V0H0z M44.5,10.7H3V3h41.6V10.7z"/>
      </svg>
    );
  }

});

module.exports = HPE;
