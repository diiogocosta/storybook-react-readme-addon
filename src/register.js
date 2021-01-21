import React from 'react';

import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useParameter } from '@storybook/api';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'github-markdown-css';

const ADDON_ID = 'readme';
const PANEL_ID = `${ADDON_ID}/panel`;
const PARAM_KEY = 'readme';

// give a unique name for the panel
const Readme = () => {
    const readme = useParameter(PARAM_KEY, null);
    return (
        <div className={'markdown-body'}>
            <ReactMarkdown plugins={[gfm]}>{readme ? readme : 'No README.md found'}</ReactMarkdown>
        </div>
    );
};

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Readme',
        render: ({ active, key }) => (
            <AddonPanel active={active} key={key}>
                <Readme />
            </AddonPanel>
        ),
    });
});
