// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "Qosmos-icon";

var Qosmos = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Qosmos' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'Qosmos-title';// + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="120px" viewBox="0 0 595.3 283.5"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <g>
        	<g>
        		<path style={{"fill" : "#5B6873"}} d="M226.3,168.2l-1.4-0.4c-9.6-2.3-17.7-4.7-25.6-7.4l-0.5-0.2c-1-0.3-1.9-0.6-2.6-0.6
        			c-13.9-0.5-27.9-10.6-27.9-31.8c0-19.5,12.1-33.1,29.4-33.1c16.8,0,28.5,13.1,28.5,31.8c0,13.6-5.3,23.8-14.8,28.7
        			c0.6,0,1.1-0.1,1.4-0.1c0.3,0,0.5,0,0.6,0.1l1,0.2c4.2,1,8.6,1.8,13.4,2.7l1.9,0.3L226.3,168.2z M197.4,104.2
        			c-12.3,0-17.8,11.7-17.8,23.3c0,11.2,6,22.5,17.4,22.5c8.8,0,17.6-7.2,17.6-23.2C214.6,115.9,209.2,104.2,197.4,104.2z"/>
        	</g>
        	<g>
        		<path style={{"fill" : "#889BAF" }} d="M261.4,159.6L261.4,159.6c-16.9,0-28.6-13.1-28.6-31.9c0-19.4,12-33,29.3-33c17.1,0,28.6,12.8,28.6,31.8
        			C290.7,149.4,276,159.6,261.4,159.6z M261.8,104.2c-12.2,0-17.6,11.7-17.6,23.3c0,11.2,6,22.6,17.4,22.6c8.8,0,17.6-7.2,17.6-23.2
        			C279.2,115.9,273.7,104.2,261.8,104.2z"/>
        	</g>
        	<g>
        		<path style={{"fill" : "#889BAF" }} d="M311.8,159.6c-5.8,0-12.5-1.7-16.1-4.2l-1-0.7l3-9.7l1.8,1.2c3.6,2.3,8.3,3.6,12.9,3.6
        			c6.8,0,10.9-3.2,10.9-8.6c0-4-1.7-7.1-10.2-10.3c-11.3-4.1-16.8-10.2-16.8-18.5c0-10.5,8.6-17.8,20.9-17.8
        			c7.7,0,12.3,2.2,13.9,3.2l1.1,0.7L329,108l-1.7-1.1c-1-0.6-4.7-2.6-10.4-2.6c-7.1,0-9.6,3.9-9.6,7.3c0,4.4,2.6,6.8,10.8,10
        			c11.5,4.5,16.2,10.1,16.2,19.1C334.3,149.4,328.4,159.6,311.8,159.6z"/>
        	</g>
        	<g>
        		<path style={{"fill" : "#889BAF" }} d="M405.3,158.6h-10.9l-1.5-27.8c-0.3-5.1-0.6-10.9-0.8-16.4c-1.4,4.4-3,9-4.7,13.8l-10.9,30h-8.2l-10.1-29.5
        			c-1.6-4.9-3-9.3-4.2-13.3c-0.2,5.1-0.5,10.6-0.8,16l-1.7,27.1h-10.6l4.4-63h12.5l10.6,30c1.8,5.3,3.3,10.2,4.6,14.8
        			c1.3-4.3,2.9-9,4.9-14.8l11-30h12.5L405.3,158.6z"/>
        	</g>
        	<g>
        		<path style={{"fill" : "#889BAF" }} d="M439.2,159.6L439.2,159.6c-16.9,0-28.6-13.1-28.6-31.9c0-19.4,12-33,29.3-33c17.1,0,28.6,12.8,28.6,31.8
        			C468.5,146.3,456.7,159.6,439.2,159.6z M439.5,104.2c-12.2,0-17.6,11.7-17.6,23.3c0,11.2,6,22.6,17.4,22.6h0.1
        			c8.7,0,17.5-7.2,17.5-23.2C457,115.9,451.5,104.2,439.5,104.2z"/>
        	</g>
        	<g>
        		<path style={{"fill" : "#889BAF" }} d="M489.3,159.6c-5.8,0-12.4-1.7-16.1-4.2l-1-0.7l3-9.7l1.8,1.2c3.6,2.3,8.3,3.6,12.9,3.6
        			c6.8,0,10.9-3.2,10.9-8.6c0-4-1.7-7.1-10.2-10.3c-11.3-4.1-16.8-10.2-16.8-18.5c0-10.5,8.6-17.8,20.9-17.8
        			c7.7,0,12.3,2.2,13.9,3.2l1.1,0.7l-3.2,9.5l-1.7-1.1c-1-0.6-4.7-2.6-10.4-2.6c-7.1,0-9.6,3.9-9.6,7.3c0,4.4,2.6,6.8,10.8,10
        			c11.5,4.5,16.2,10.1,16.2,19.1C511.7,149.4,505.8,159.6,489.3,159.6z"/>
        	</g>
        </g>
        <g>
        	<rect x="78.5" y="94.9" style={{"fill" : "#5B6873"}} width="31.9" height="31.9"/>
        	<polygon style={{"fill" : "#889BAF" }} points="118,113.9 118,133.8 118.1,134.5 117.4,134.4 97.5,134.4 97.5,157.5 141.3,157.5 141.3,113.9 	"/>
        </g>
        <g>
        	<g>
        		<path style={{"fill" : "#5B6873"}} d="M170.7,182.4h14.5l-0.6,3h-5.3l-3.4,15.8h-3.9l3.4-15.8H170L170.7,182.4z"/>
        		<path style={{"fill" : "#5B6873"}} d="M187.3,181h3.6l-1.7,7.7h0.1c1-0.9,2.4-1.7,3.9-1.7c2.7,0,4.5,1.7,4.5,4.4c0,1.1-0.3,2.2-0.5,3l-1.5,6.7h-3.6
        			l1.3-6.5c0.2-0.9,0.4-1.9,0.4-2.9c0-1.2-0.8-1.9-2-1.9c-2.5,0-3.4,2.3-3.9,4.4l-1.5,7H183L187.3,181z"/>
        		<path style={{"fill" : "#5B6873"}} d="M203,195.4c0,2.6,1.4,3.5,3.9,3.5c1.5,0,2.9-0.4,4.3-1l-0.5,2.9c-1.4,0.4-2.9,0.8-4.4,0.8
        			c-4,0-6.7-1.9-6.7-6.1c0-4.3,3.3-8.5,7.9-8.5c3.4,0,5.7,1.8,5.7,5.3c0,1.1-0.1,2.1-0.4,3.1H203z M209.6,192.9
        			c0.1-0.3,0.1-0.6,0.1-0.9c0-1.5-0.8-2.3-2.3-2.3c-2.2,0-3.2,1.3-3.9,3.3H209.6z"/>
        		<path style={{"fill" : "#5B6873"}} d="M225.3,182.4h4.8l4,14.3h0.1l3.1-14.3h3.6l-4.1,18.8h-4.9l-3.9-14.4h-0.1l-3,14.4h-3.6L225.3,182.4z"/>
        		<path style={{"fill" : "#5B6873"}} d="M244.1,195.4c0,2.6,1.4,3.5,3.9,3.5c1.5,0,2.9-0.4,4.3-1l-0.5,2.9c-1.4,0.4-2.9,0.8-4.4,0.8
        			c-4,0-6.7-1.9-6.7-6.1c0-4.3,3.3-8.5,7.9-8.5c3.4,0,5.7,1.8,5.7,5.3c0,1.1-0.1,2.1-0.4,3.1H244.1z M250.7,192.9
        			c0.1-0.3,0.1-0.6,0.1-0.9c0-1.5-0.8-2.3-2.3-2.3c-2.2,0-3.2,1.3-3.9,3.3H250.7z"/>
        		<path style={{"fill" : "#5B6873"}} d="M256.5,187.3h2.6l0.6-2.9l3.9-1.3l-0.9,4.1h3.2l-0.6,2.6h-3.2l-1.3,6.1c-0.1,0.3-0.2,0.8-0.2,1.3
        			c0,0.8,0.6,1.3,1.4,1.3c0.6,0,1.3-0.1,1.8-0.3l-0.6,2.8c-0.6,0.1-1.3,0.3-1.9,0.3c-2.5,0-4.2-1-4.2-3.6c0-1.1,0.2-2.1,0.5-3.2
        			l1-4.7h-2.6L256.5,187.3z"/>
        		<path style={{"fill" : "#5B6873"}} d="M266.5,187.3h3.6l1,10.4h0.1l5.1-10.4h4l0.8,10.4h0.1l5.3-10.4h3.7l-7.7,13.9h-4.1l-0.8-10.6h-0.1l-5.1,10.6
        			h-4.1L266.5,187.3z"/>
        		<path style={{"fill" : "#5B6873"}} d="M304,193.1c0,4.9-3.4,8.4-8.3,8.4c-3.9,0-6.3-2.4-6.3-6.3c0-4.6,3.6-8.2,8.2-8.2
        			C301.4,187,304,189.2,304,193.1z M300.3,193.1c0-1.8-0.6-3.3-2.7-3.3c-2.9,0-4.3,3.2-4.3,5.7c0,1.8,0.8,3.3,2.8,3.3
        			C298.9,198.7,300.3,195.5,300.3,193.1z"/>
        		<path style={{"fill" : "#5B6873"}} d="M307.6,189.2c0.1-0.6,0.2-1.2,0.3-1.9h3.4l-0.5,2.6h0.1c0.6-1.5,2.4-2.9,4.1-2.9c0.5,0,0.9,0,1.4,0.1
        			l-0.8,3.5c-0.4-0.1-0.9-0.2-1.4-0.2c-2.6,0-3.8,2.3-4.3,4.5l-1.3,6.2h-3.6L307.6,189.2z"/>
        		<path style={{"fill" : "#5B6873"}} d="M319.6,181h3.6l-2.4,11.4h0.1l5-5h4.7l-6.7,6.3l4.2,7.5h-4.1l-3.6-7.4h-0.1l-1.6,7.4h-3.5L319.6,181z"/>
        		<path style={{"fill" : "#5B6873"}} d="M340.2,187.3h3.6l-3,13.9h-3.6L340.2,187.3z M341.5,181.3h3.6l-0.8,3.4h-3.6L341.5,181.3z"/>
        		<path style={{"fill" : "#5B6873"}} d="M355,190.3c-0.9-0.3-1.9-0.6-3-0.6c-1.1,0-2.4,0.3-2.4,1.4c0,1.8,4.7,2.4,4.7,5.8c0,3.6-3.2,4.7-6.3,4.7
        			c-1.5,0-2.9-0.2-4.2-0.8l0.8-2.9c1,0.6,2,1.1,3.4,1.1c1.2,0,2.5-0.4,2.5-1.5c0-2.2-4.7-2.5-4.7-5.9c0-3.3,3.2-4.4,6-4.4
        			c1.3,0,2.7,0.2,3.9,0.6L355,190.3z"/>
        		<path style={{"fill" : "#5B6873"}} d="M367.2,182.4h3.9l-4,18.8h-3.9L367.2,182.4z"/>
        		<path style={{"fill" : "#5B6873"}} d="M373.2,189.3c0.2-0.8,0.3-1.6,0.3-2h3.5l-0.2,1.3h0.1c1-0.9,2.4-1.7,3.9-1.7c2.7,0,4.5,1.7,4.5,4.4
        			c0,1.1-0.3,2.2-0.5,3l-1.5,6.7h-3.6l1.3-6.5c0.2-0.9,0.4-1.9,0.4-2.9c0-1.2-0.8-1.9-2-1.9c-2.5,0-3.4,2.3-3.9,4.4l-1.5,7h-3.6
        			L373.2,189.3z"/>
        		<path style={{"fill" : "#5B6873"}} d="M390.5,189.9h-2.8l0.6-2.6h2.8c0.7-3.5,1.9-6.7,6.1-6.7c0.8,0,1.6,0.2,2.2,0.3l-0.8,2.7
        			c-0.3-0.2-0.7-0.2-1.1-0.2c-2,0-2.5,2.4-2.8,3.9h3.2l-0.6,2.6h-3.2l-2.4,11.2h-3.6L390.5,189.9z"/>
        		<path style={{"fill" : "#5B6873"}} d="M412.1,193.1c0,4.9-3.4,8.4-8.3,8.4c-3.9,0-6.3-2.4-6.3-6.3c0-4.6,3.6-8.2,8.2-8.2
        			C409.5,187,412.1,189.2,412.1,193.1z M408.4,193.1c0-1.8-0.6-3.3-2.7-3.3c-2.9,0-4.3,3.2-4.3,5.7c0,1.8,0.8,3.3,2.8,3.3
        			C407,198.7,408.4,195.5,408.4,193.1z"/>
        		<path style={{"fill" : "#5B6873"}} d="M415.7,189.2c0.1-0.6,0.2-1.2,0.3-1.9h3.4l-0.5,2.6h0.1c0.6-1.5,2.4-2.9,4.1-2.9c0.5,0,0.9,0,1.4,0.1
        			l-0.8,3.5c-0.4-0.1-0.9-0.2-1.4-0.2c-2.6,0-3.8,2.3-4.3,4.5l-1.3,6.2h-3.6L415.7,189.2z"/>
        		<path style={{"fill" : "#5B6873"}} d="M426,188.8c0.1-0.5,0.2-1.1,0.3-1.5h3.4l-0.3,1.9h0.1c1-1.4,2.6-2.2,4.3-2.2c1.6,0,3.3,1,3.5,2.6h0.1
        			c0.9-1.8,2.9-2.6,4.9-2.6c2.1,0,3.9,1.7,3.9,3.8c0,1.2-0.3,2.6-0.6,3.8l-1.5,6.6h-3.6l1.5-6.8c0.2-0.8,0.5-2.1,0.5-3
        			c0-1-0.8-1.7-1.7-1.7c-2.5,0-3.1,2.9-3.6,4.8l-1.4,6.6h-3.6l1.5-6.8c0.2-0.8,0.5-2.1,0.5-3c0-1-0.8-1.7-1.7-1.7
        			c-2.5,0-3.1,2.9-3.6,4.8l-1.4,6.6h-3.6L426,188.8z"/>
        		<path style={{"fill" : "#5B6873"}} d="M455.9,199L455.9,199c-1.3,1.6-2.5,2.5-4.5,2.5c-2.5,0-4.3-1.4-4.3-4c0-4.6,5.1-4.9,8.5-4.9h1.3
        			c0.1-0.4,0.1-0.8,0.1-1.2c0-1.4-1.5-1.8-2.8-1.8c-1.6,0-3.1,0.4-4.6,1.1l0.5-2.9c1.5-0.5,3.1-0.8,4.7-0.8c2.8,0,5.4,1,5.4,4.3
        			c0,1.9-1.4,7.3-1.7,9.9h-3L455.9,199z M452.4,198.9c2.7,0,3.5-1.9,4.1-4.1h-1.3c-1.8,0-4.7,0.3-4.7,2.6
        			C450.6,198.4,451.5,198.9,452.4,198.9z"/>
        		<path style={{"fill" : "#5B6873"}} d="M463.2,187.3h2.6l0.6-2.9l3.9-1.3l-0.9,4.1h3.2l-0.6,2.6h-3.2l-1.3,6.1c-0.1,0.3-0.2,0.8-0.2,1.3
        			c0,0.8,0.6,1.3,1.4,1.3c0.6,0,1.3-0.1,1.8-0.3l-0.6,2.8c-0.6,0.1-1.3,0.3-1.9,0.3c-2.5,0-4.2-1-4.2-3.6c0-1.1,0.2-2.1,0.5-3.2
        			l1-4.7h-2.6L463.2,187.3z"/>
        		<path style={{"fill" : "#5B6873"}} d="M475,187.3h3.6l-3,13.9H472L475,187.3z M476.3,181.3h3.6l-0.8,3.4h-3.6L476.3,181.3z"/>
        		<path style={{"fill" : "#5B6873"}} d="M494.4,193.1c0,4.9-3.4,8.4-8.3,8.4c-3.9,0-6.3-2.4-6.3-6.3c0-4.6,3.6-8.2,8.2-8.2
        			C491.7,187,494.4,189.2,494.4,193.1z M490.6,193.1c0-1.8-0.6-3.3-2.7-3.3c-2.9,0-4.3,3.2-4.3,5.7c0,1.8,0.8,3.3,2.8,3.3
        			C489.2,198.7,490.6,195.5,490.6,193.1z"/>
        		<path style={{"fill" : "#5B6873"}} d="M498,189.3c0.2-0.8,0.3-1.6,0.4-2h3.5l-0.2,1.3h0.1c1-0.9,2.4-1.7,3.9-1.7c2.7,0,4.5,1.7,4.5,4.4
        			c0,1.1-0.3,2.2-0.5,3l-1.5,6.7h-3.6l1.3-6.5c0.2-0.9,0.4-1.9,0.4-2.9c0-1.2-0.8-1.9-2-1.9c-2.5,0-3.4,2.3-3.9,4.4l-1.5,7h-3.6
        			L498,189.3z"/>
        	</g>
        </g>
      </svg>
    );
  }

});

module.exports = Qosmos;
