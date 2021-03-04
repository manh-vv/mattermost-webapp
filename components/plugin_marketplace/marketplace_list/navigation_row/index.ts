// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';
import {connect} from 'react-redux';
import {GlobalState} from 'mattermost-redux/types/store';

import NavigationRow from './navigation_row';

function mapStateToProps(state: GlobalState) {
    return {
        theme: getTheme(state),
    };
}

export default connect(mapStateToProps)(NavigationRow);
