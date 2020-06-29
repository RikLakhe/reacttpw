import React from 'react';

import {
    TagOutlined,
    HistoryOutlined,
    WarningOutlined,
    DollarCircleOutlined,
    PlusCircleOutlined,
    BarsOutlined,
    AuditOutlined,
    SearchOutlined,
    BarcodeOutlined,
    TeamOutlined,
    SettingOutlined,
    SnippetsOutlined,
    MailOutlined,
    MoneyCollectOutlined,
    DropboxOutlined,
    BookOutlined,
} from '@ant-design/icons';

const DynamicIcon = ({ type }) => {
    switch (type) {
        case 'PlusCircleOutlined':
            return <PlusCircleOutlined />;
        case 'SearchOutlined':
            return <SearchOutlined />;
        case 'BarsOutlined':
            return <BarsOutlined />;
        case 'AuditOutlined':
            return <AuditOutlined />;
        case 'HistoryOutlined':
            return <HistoryOutlined />;
        case 'TagOutlined':
            return <TagOutlined />;
        case 'BarcodeOutlined':
            return <BarcodeOutlined />;
        case 'TeamOutlined':
            return <TeamOutlined />;
        case 'DollarCircleOutlined':
            return <DollarCircleOutlined />;
        case 'SettingOutlined':
            return <SettingOutlined />;
        case 'SnippetsOutlined':
            return <SnippetsOutlined />;
        case 'MailOutlined':
            return <MailOutlined />;
        case 'MoneyCollectOutlined':
            return <MoneyCollectOutlined />;
        case 'DropboxOutlined':
            return <DropboxOutlined />;
        case 'BookOutlined':
            return <BookOutlined />;
        default:
            return <WarningOutlined />;
    }
};

export default DynamicIcon;
