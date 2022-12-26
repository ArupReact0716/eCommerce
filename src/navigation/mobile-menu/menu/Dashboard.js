// ** Icons Import
import { BsBook, BsCircle } from 'react-icons/bs';

const Roles = {
    SUPER_ADMIN: 'administrator',
    ADMIN: 'admin',
    AUTHOR: 'author',
    EDITOR: 'editor',
};

const Dashboard = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <BsBook size={20} />,
        children: [
            {
                id: 'home',
                title: 'home',
                icon: <BsCircle size={12} />,
                permission: [
                    Roles.SUPER_ADMIN,
                    Roles.ADMIN,
                ],
                navLink: '/dashboard/home'
            },
        ]
    },
]

export default Dashboard