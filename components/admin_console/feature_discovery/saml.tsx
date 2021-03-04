// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {t} from 'utils/i18n';
import saml from 'images/feature-discovery/saml.png';

import FeatureDiscovery from './index';

const SAMLFeatureDiscovery: React.FC = () => {
    return (
        <FeatureDiscovery
            featureName='saml'
            titleID='admin.saml_feature_discovery.title'
            titleDefault='Integrate SAML 2.0 with Iconloop Enterprise E20'
            copyID='admin.saml_feature_discovery.copy'
            copyDefault={'When you connect Iconloop with your organization\'s single sign-on provider, users can access Iconloop without having to re-enter their credentials.'}
            learnMoreURL='https://www.mattermost.com/docs-saml/?utm_medium=product&utm_source=product-feature-discovery&utm_content=saml'
            imgPath={saml}
        />
    );
};

t('admin.saml_feature_discovery.title');
t('admin.saml_feature_discovery.copy');

export default SAMLFeatureDiscovery;
