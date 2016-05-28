var React = require('react');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    var colorIndex = 'neutral-3';
    if (this.props.float) {
      colorIndex += '-a';
    }

    var lfFooterString = `
    <div id="lfcollabprojects-footer">
      <div class="gray-diagonal">
        <div class="footer-inner">
          <p>&copy; 2016 Linux Foundation. All Rights Reserved.</p>
          <p>Linux Foundation is a registered trademark of The Linux Foundation.</p>
          <p>Linux is a registered <a href="http://www.linuxfoundation.org/programs/legal/trademark" title="Linux Mark Institute">trademark</a> of Linus Torvalds.</p>
        </div>
      </div>
    </div>`;

    return (
      <div>
      <div dangerouslySetInnerHTML={{ __html: lfFooterString }} />
      </div>
    );
  }
});

module.exports = Footer;
