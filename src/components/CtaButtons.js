import React from 'react';
import _ from 'lodash';

import {Link, classNames, withPrefix} from '../utils';

export default class CtaButtons extends React.Component {
    render() {
        let actions = _.get(this.props, 'actions', null);
        return (
            _.map(actions, (action, action_idx) => (
              <Link key={action_idx} className={classNames({'button': _.get(action, 'style', null) === 'button'})} to={withPrefix(_.get(action, 'url', null))}{...(_.get(action, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(action, 'label', null)}</Link>
            ))
        );
    }
}
