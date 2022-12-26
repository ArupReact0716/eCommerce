// ** Icons Import
import { Users, Circle } from 'react-feather'

const Roles = {
    SUPER_ADMIN: 'administrator',
    ADMIN: 'admin',
    AUTHOR: 'author',
    EDITOR: 'editor',
};


const User = [
    {
        id: 'user',
        title: 'User',
        icon: <Users size={20} />,
        permission: [
            Roles.SUPER_ADMIN,
            Roles.ADMIN,
        ],
        children: [
            {
                id: 'userList',
                title: 'User List',
                icon: <Circle size={12} />,
                permissions: ['admin', 'editor'],
                navLink: '/user/user-list'
            },
        ]
    },
]

export default User