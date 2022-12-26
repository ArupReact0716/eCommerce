// ** Icons Import
import { Settings, Circle } from 'react-feather'

const Roles = {
    SUPER_ADMIN: 'administrator',
    ADMIN: 'admin',
    AUTHOR: 'author',
    EDITOR: 'editor',
};


const Setting = [
    {
        id: 'settings',
        title: 'Settings',
        icon: <Settings size={20} />,
        permission: [
            Roles.SUPER_ADMIN,
            Roles.ADMIN,
        ],
        children: [
            {
                id: 'themeCustomize',
                title: 'Theme Customize',
                icon: <Circle size={12} />,
                permissions: ['admin', 'editor'],
                navLink: '/settings/theme-customize'
            },
            {
                id: 'general',
                title: 'General',
                icon: <Circle size={12} />,
                permissions: ['admin', 'editor'],
                navLink: '/settings/general'
            },
        ]
    },
]

export default Setting