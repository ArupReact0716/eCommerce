// router
import Post from './menu/Post';
import Settings from './menu/Settings';
import User from './menu/Users';
import Media from './menu/Media'
import Dashboard from './menu/Dashboard';

export const SidebarJson = [...Dashboard, ...Post, ...Media, ...User, ...Settings]

