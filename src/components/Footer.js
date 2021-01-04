import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link, classNames, withPrefix} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer inner-sm">
              <p className="site-info">
                {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</span>
                )}
                {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                <Link key={action_idx} className={classNames({'button': _.get(action, 'style', null) === 'button'})} to={withPrefix(_.get(action, 'url', null))}{...(_.get(action, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(action, 'label', null)}</Link>
                ))}
              </p>
              <Link id="to-top" className="to-top" to="#page"><span className="icon-arrow-up" aria-hidden="true" /><span
                  className="screen-reader-text">Back to top</span></Link>
            </footer>
        );
    }
}
