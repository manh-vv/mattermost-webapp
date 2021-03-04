// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {
    getPlugins,
    getPluginStatuses,
    removePlugin,
    uploadPlugin,
    installPluginFromUrl,
    enablePlugin,
    disablePlugin,
} from 'mattermost-redux/actions/admin';

import {GenericAction} from 'mattermost-redux/types/actions';

import PluginManagement from './plugin_management';

function mapStateToProps(state: any) {
    return {
        plugins: state.entities.admin.plugins,
        pluginStatuses: state.entities.admin.pluginStatuses,
    };
}

function mapDispatchToProps(dispatch: Dispatch<GenericAction>) {
    return {
        actions: bindActionCreators({
            uploadPlugin,
            installPluginFromUrl,
            removePlugin,
            getPlugins,
            getPluginStatuses,
            enablePlugin,
            disablePlugin,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PluginManagement);
