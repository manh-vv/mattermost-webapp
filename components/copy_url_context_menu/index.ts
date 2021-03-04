// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import {GlobalState} from 'types/store/index.js';

import {copyToClipboard} from 'utils/utils';

import CopyUrlContextMenu from './copy_url_context_menu';

function mapStateToProps(state: GlobalState) {
    const config = getConfig(state);

    return {
        siteURL: config.SiteURL,
    };
}

function mapDispatchToProps() {
    return {
        actions: {
            copyToClipboard,
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyUrlContextMenu);
