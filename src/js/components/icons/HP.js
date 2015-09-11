// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "hp-icon";

var HP = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'HP' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'hp-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="100px" viewBox="0 0 433.701 433.701"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill="#0096D6" d="M216.85,432.851c-2.147,0-4.285-0.039-6.419-0.101l44.143-121.318h60.75
	c10.663,0,22.368-8.197,26.015-18.212l47.892-131.546c7.835-21.537-4.501-39.157-27.418-39.157h-84.279l-70.715,194.316h-0.026
	l-40.089,110.153C71.594,404.375,0.85,318.878,0.85,216.851c0-99.086,66.721-182.58,157.683-208.027l-41.365,113.693h-0.012
	L48.389,311.432l45.778,0.004l58.481-160.531h34.404l-58.481,160.531l45.761,0.008l54.498-149.77
	c7.84-21.537-4.497-39.157-27.393-39.157h-38.481l44.186-121.44c3.221-0.143,6.454-0.227,9.708-0.227
	c119.294,0,216,96.706,216,216.001C432.85,336.143,336.144,432.851,216.85,432.851z M347.542,150.79h-34.395l-48.167,132.158h34.396
	L347.542,150.79z"/>
      </svg>
    );
  }

});

module.exports = HP;
