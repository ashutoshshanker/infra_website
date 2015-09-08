// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "broadcom-icon";

var Broadcom = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Broadcom' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var logoTitleId = 'broadcom-title-' + uuid.v1();

    return (
      <svg className={classes.join(' ')} width="140px" viewBox="0 0 191 95"
        version="1.1" role="img" aria-labelledby={logoTitleId}>
        <title id={logoTitleId}>{this.getGrommetIntlMessage(this.props.a11yTitle)}</title>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#ED1C24" d="M188.891,81.939h-12.509c-5.257,0.023-11.848-7.215-20.6-7.133
        	c-12.789,0.141-19.25,12.523-31.502,12.389c-8.357-0.088-8.487-5.387-11.583-10.637h-7.947c2.291,5.25,5.522,16.693,19.391,16.832
        	c13.998,0.131,18.038-12.252,31.512-12.252c7.806,0,13.732,6.857,20.863,6.857h12.375V81.939L188.891,81.939z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#ED1C24" d="M1.835,81.939h9.696c5.251,0.023,11.848-7.215,20.6-7.133
        	C44.92,74.947,51.391,87.33,63.643,87.195c8.348-0.088,8.483-5.387,11.578-10.637h7.942c-2.287,5.25-5.517,16.693-19.39,16.832
        	c-13.998,0.131-18.039-12.252-31.502-12.252c-7.812,0-13.737,6.857-20.874,6.857H1.835V81.939L1.835,81.939z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#ED1C24" d="M106.024,47.144h-7.547l-3.216-33.681
        	c-0.193-1.717-1.07-1.587-1.07-1.587s-0.878-0.13-1.085,1.587L89.88,47.134h-7.547l4.436-36.589c1.255-8.8,7.432-8.424,7.432-8.424
        	s6.153-0.399,7.412,8.424L106.024,47.144L106.024,47.144z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.781,63.477c2.097,0,3.607,0.119,3.289,1.914
        	c-0.265,1.52-1.553,1.861-3.168,1.861h-2.875l0.662-3.775H20.781L20.781,63.477z M22.247,56.451c1.408,0,2.695,0.018,2.417,1.594
        	c-0.204,1.184-1.264,1.762-2.581,1.762h-2.744l0.593-3.355H22.247L22.247,56.451z M20.419,71.938c5.223,0,8.945-1.557,9.736-6.07
        	c0.389-2.195-0.458-4.064-2.547-4.625c1.461-0.838,3.077-2.361,3.447-4.432c0.704-4.011-2.724-5.062-7.271-5.062h-9.65
        	l-3.554,20.189H20.419L20.419,71.938z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.756,56.451h3.081c1.543,0,2.545,0.674,2.285,2.111
        	c-0.24,1.404-1.427,1.924-3.472,1.924h-2.604L39.756,56.451L39.756,56.451z M40.281,64.902c3.086,0,3.38,0.863,2.917,3.512
        	c-0.317,1.779-0.376,3.076-0.289,3.523h6.702l0.107-0.617c-0.782,0-0.536-0.906-0.078-3.529c0.719-4.068-0.486-4.576-2.482-5.344
        	c2.473-0.66,3.857-2.617,4.271-4.961c0.69-3.914-1.206-5.738-7.932-5.738h-9.533l-3.563,20.189h6.62l1.239-7.035H40.281
        	L40.281,64.902z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M63.214,56.16c2.928-0.076,3.535,2.832,3.048,5.58
        	c-0.589,3.326-2.146,5.785-4.996,5.785c-3.172,0-3.39-3.211-2.932-5.785C58.778,59.189,60.215,56.16,63.214,56.16L63.214,56.16z
        	 M64.135,51.224c-6.278,0-11.293,4.116-12.407,10.448c-1.215,6.867,2.33,10.787,8.665,10.787c5.965,0,11.28-3.863,12.485-10.719
        	C73.822,56.416,71.338,51.224,64.135,51.224L64.135,51.224z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M83.592,65.076h-4.187l3.328-7.232L83.592,65.076L83.592,65.076z M76.18,71.938
        	l1.225-2.656h6.596l0.314,2.656h6.591l-3.674-20.189h-6.736L69.7,71.938H76.18L76.18,71.938z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M101.824,56.451h1.263c3.534,0,4.717,1.123,3.974,5.336
        	c-0.68,3.836-2.646,5.465-5.738,5.465H99.92L101.824,56.451L101.824,56.451z M101.168,71.938c6.485,0,11.231-2.902,12.576-10.512
        	c1.177-6.664-2.334-9.677-8.844-9.677h-8.868l-3.563,20.189H101.168L101.168,71.938z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M129.241,59.459c0.174-2.088-0.925-3.299-3.004-3.299
        	c-2.333,0-4.079,1.992-4.773,5.883c-0.497,2.832-0.347,5.482,3.015,5.482c2.135,0,3.408-1.488,4.002-3.414h6.369
        	c-1.509,5.209-5.801,8.348-11.129,8.348c-6.674,0-9.986-4.09-8.839-10.637c1.157-6.533,6.308-10.599,11.944-10.599
        	c6.168,0,9.084,3.056,8.699,8.235H129.241L129.241,59.459z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M147.551,56.16c2.932-0.076,3.539,2.832,3.058,5.58
        	c-0.583,3.326-2.137,5.785-5.005,5.785c-3.169,0-3.377-3.211-2.929-5.785C143.129,59.189,144.556,56.16,147.551,56.16L147.551,56.16
        	z M148.481,51.224c-6.273,0-11.303,4.116-12.416,10.448c-1.206,6.867,2.338,10.787,8.67,10.787c5.974,0,11.287-3.863,12.493-10.719
        	C158.169,56.416,155.69,51.224,148.481,51.224L148.481,51.224z"/>
        <polygon fill-rule="evenodd" clip-rule="evenodd" points="157.093,71.938 160.661,51.749 168.656,51.749 169.988,64.344
        	175.76,51.749 183.759,51.749 180.201,71.938 174.24,71.938 175.331,65.777 175.977,62.627 176.955,58.982 176.897,58.982
        	170.947,71.938 166.347,71.938 164.973,58.982 164.92,58.982 164.679,61.951 164.264,65.082 163.054,71.938 157.093,71.938 "/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M185.987,71.35c-1.108,0-1.736-0.814-1.534-1.939
        	c0.203-1.143,1.114-1.941,2.223-1.941c1.091,0,1.736,0.799,1.534,1.941C188.007,70.535,187.082,71.35,185.987,71.35L185.987,71.35z
        	 M185.88,71.963c1.414,0,2.755-1.148,3.001-2.553c0.255-1.416-0.694-2.559-2.099-2.559c-1.417,0-2.758,1.143-2.999,2.559
        	C183.532,70.814,184.463,71.963,185.88,71.963L185.88,71.963z M186.894,69.633c0.491-0.037,0.795-0.236,0.887-0.752
        	c0.116-0.65-0.202-0.848-0.926-0.848h-1.331l-0.486,2.762h0.578l0.202-1.162h0.469l0.404,1.162h0.661L186.894,69.633L186.894,69.633
        	z M185.89,69.215l0.141-0.764h0.622c0.266,0,0.666-0.02,0.604,0.348c-0.063,0.355-0.29,0.424-0.6,0.416H185.89L185.89,69.215z"/>
      </svg>
    );
  }

});

module.exports = Broadcom;
