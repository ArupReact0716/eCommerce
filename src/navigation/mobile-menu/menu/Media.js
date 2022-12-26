// ** Icons Import
import { BsCircle } from 'react-icons/bs';
import { GoFileMedia } from 'react-icons/go';

const Post = [
    {
        id: 'media',
        title: 'Media',
        icon: <GoFileMedia size={20} />,
        children: [
            {
                id: 'allmedia',
                title: 'All Media',
                icon: <BsCircle size={12} />,
                permissions: ['admin', 'editor'],
                navLink: '/media/all-media'
            },
            {
                id: 'addmedia',
                title: 'Add Media',
                icon: <BsCircle size={12} />,
                permissions: ['admin', 'editor'],
                navLink: '/media/add-media'
            },
        ]
    },
]

export default Post