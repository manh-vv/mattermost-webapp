// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';

import {GlobalState} from 'types/store';

import FilePreview from './file_preview';

function mapStateToProps(state: GlobalState) {
    const config = getConfig(state);

    return {
        enableSVGs: config.EnableSVGs === 'true',
    };
}

export default connect(mapStateToProps)(FilePreview);
