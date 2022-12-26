// ** Icons Import
import { BsBook, BsCircle } from 'react-icons/bs';

const Roles = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ADMIN: 'ADMIN',
    AUTHOR: 'AUTHOR',
    EDITOR: 'EDITOR',
};

const Post = [
    {
        id: 'post',
        title: 'Post',
        icon: <BsBook size={20} />,
        children: [
            {
                id: 'allpost',
                title: 'All Posts',
                icon: <BsCircle size={12} />,
                navLink: '/post/all-posts'
            },
            {
                id: 'postnew',
                title: 'Add New',
                icon: <BsCircle size={12} />,
                navLink: '/post/add-post'
            },
            {
                id: 'categories',
                title: 'Category List',
                icon: <BsCircle size={12} />,
                navLink: '/post/category-list'
            },
        ]
    },
]

export default Post