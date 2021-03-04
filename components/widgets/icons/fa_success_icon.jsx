// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import LocalizedIcon from 'components/localized_icon';
import {t} from 'utils/i18n';

export default function SuccessIcon() {
    return (
        <LocalizedIcon
            className='fa fa-check'
            title={{id: t('generic_icons.success'), defaultMessage: 'Success Icon'}}
        />
    );
}
