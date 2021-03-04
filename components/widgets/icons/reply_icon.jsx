// Copyright (c) 2015-present Iconloop, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

export default function ReplyIcon(props) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                width='16px'
                height='14px'
                viewBox='0 0 16 14'
                style={style}
                role='img'
                aria-label={formatMessage({id: 'generic_icons.reply', defaultMessage: 'Reply Icon'})}
            >
                <path d='M5.2 3.88001V5.48001L6.72 5.56001C8.85333 5.63467 10.64 6.51467 12.08 8.20001C11.312 7.94401 10.448 7.76801 9.488 7.67201C8.76267 7.59734 7.84 7.56001 6.72 7.56001H5.12V9.72001L2.16 6.76001L5.2 3.88001ZM6.64 0.600005C6.48 0.600005 6.34667 0.626672 6.24 0.680005L0.08 6.44001C0.048 6.47201 0.0266667 6.50934 0.016 6.55201C0.00533333 6.59467 0 6.66934 0 6.77601C0 6.87201 0.0266667 6.94667 0.08 7.00001L6.24 12.92C6.29333 12.9733 6.4 13 6.56 13C6.61333 12.9467 6.65067 12.8987 6.672 12.856C6.704 12.792 6.72 12.7067 6.72 12.6V9.08001C8.17067 9.08001 9.328 9.16001 10.192 9.32001C11.312 9.53334 12.272 9.91734 13.072 10.472C13.9573 11.0907 14.72 11.9867 15.36 13.16C15.4667 13.2667 15.5467 13.32 15.6 13.32H15.68C15.7653 13.2773 15.824 13.2187 15.856 13.144C15.888 13.0693 15.8827 12.9947 15.84 12.92C15.872 12.8133 15.8453 12.5413 15.76 12.104C15.6533 11.5707 15.4827 11.0107 15.248 10.424C14.96 9.66667 14.5973 8.95201 14.16 8.28001C13.2853 6.88267 12.2187 5.81067 10.96 5.06401C9.70133 4.30667 8.288 3.88534 6.72 3.80001V0.840006C6.752 0.765339 6.75733 0.706672 6.736 0.664005C6.71467 0.621339 6.68267 0.600005 6.64 0.600005Z'/>
            </svg>
        </span>
    );
}

const style = {
    enableBackground: 'new -158 242 18 18',
};
