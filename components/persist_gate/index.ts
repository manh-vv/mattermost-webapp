// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {GlobalState} from 'types/store';

import PersistGate from './persist_gate';

function mapStateToProps(state: GlobalState) {
    return {
        initialized: state.storage.initialized,
    };
}

export default connect(mapStateToProps)(PersistGate);
