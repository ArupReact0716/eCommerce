import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
// 
import classnames from 'classnames'
import { Collapse, Badge } from 'reactstrap'

// 
import { SidebarJson } from '../../navigation/mobile-menu'
// icon
import { FiGrid } from 'react-icons/fi';
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
// 


const MobileMenu = () => {
    // state
    const [groupOpen, setGroupOpen] = useState([])
    const [groupActive, setGroupActive] = useState([])
    const [currentActiveGroup, setCurrentActiveGroup] = useState([])
    const [activeItem, setActiveItem] = useState(null)

    return (
        <>
            <div className="sidebar-menu-content">
                <ul className="webx-sidebar-menu  list-style-none">
                    <MenuItems
                        items={SidebarJson}
                        groupOpen={groupOpen}
                        activeItem={activeItem}
                        groupActive={groupActive}
                        setGroupOpen={setGroupOpen}
                        setActiveItem={setActiveItem}
                        setGroupActive={setGroupActive}
                        currentActiveGroup={currentActiveGroup}
                        setCurrentActiveGroup={setCurrentActiveGroup}
                    />
                </ul>
            </div>
        </>
    )
}

export default MobileMenu

// menu items
export const MenuItems = props => {
    const { items, ...rest } = props
    const FatchItems = items.map((item, index) => {
        if (item.children) {
            return <NavItemGroup item={item} index={index} key={item.id} {...rest} />
        }
        return <NavItem item={item} index={index} key={item.id} {...rest} />
    })
    return FatchItems
}
// no childrens
export const NavItem = props => {
    const { item } = props
    return (
        <>
            <li className="webx-menu-item">
                <NavLink to={item.navLink} className="webx-menu-link">
                    <span className='webx-menu-icon'>{item.icon}</span>
                    <span className='webx-menu-title'>{item.title}</span>
                </NavLink>

            </li>
        </>
    )
}
// has childrens
export const NavItemGroup = props => {
    const { item,
        groupOpen,
        menuHover,
        activeItem,
        parentItem,
        groupActive,
        setGroupOpen,
        setGroupActive,
        currentActiveGroup,
        setCurrentActiveGroup,
        ...rest } = props
    // 
    const location = useLocation()

    // ** Current Val
    const currentURL = useLocation().pathname
    // create
    const toggleOpenGroup = (item, parent) => {
        let openGroup = groupOpen
        const activeGroup = groupActive

        // ** If Group is already open and clicked, close the group
        if (openGroup.includes(item.id)) {
            openGroup.splice(openGroup.indexOf(item.id), 1)

            // ** If clicked Group has open group children, Also remove those children to close those groups
            if (item.children) {
                removeChildren(item.children, openGroup, groupActive)
            }
        } else if (activeGroup.includes(item.id) || currentActiveGroup.includes(item.id)) {
            // ** If Group clicked is Active Group

            // ** If Active group is closed and clicked again, we should open active group else close active group
            if (!activeGroup.includes(item.id) && currentActiveGroup.includes(item.id)) {
                activeGroup.push(item.id)
            } else {
                activeGroup.splice(activeGroup.indexOf(item.id), 1)
            }

            // ** Update Active Group
            setGroupActive([...activeGroup])
        } else if (parent) {
            // ** If Group clicked is the child of a open group, first remove all the open groups under that parent
            if (parent.children) {
                removeChildren(parent.children, openGroup, groupActive)
            }

            // ** After removing all the open groups under that parent, add the clicked group to open group array
            if (!openGroup.includes(item.id)) {
                openGroup.push(item.id)
            }
        } else {
            // ** If clicked on another group that is not active or open, create openGroup array from scratch

            // ** Empty Open Group array
            openGroup = []

            // ** Push current clicked group item to Open Group array
            if (!openGroup.includes(item.id)) {
                openGroup.push(item.id)
            }
        }
        setGroupOpen([...openGroup])
    }
    // 
    // ** Checks url & updates active item
    useEffect(() => {
        if (hasActiveChild(item, currentURL)) {
            if (!groupActive.includes(item.id)) groupActive.push(item.id)
        } else {
            const index = groupActive.indexOf(item.id)
            if (index > -1) groupActive.splice(index, 1)
        }
        setGroupActive([...groupActive])
        setCurrentActiveGroup([...groupActive])
        setGroupOpen([])
    }, [location])
    // ** On Group Item Click
    const onCollapseClick = (e, item) => {
        toggleOpenGroup(item, parentItem)
        e.preventDefault()
    }
    return (
        <>
            <li className={classnames('webx-menu-item webx-has-submenu',
                {
                    'menu-collapsed-open': groupActive.includes(item.id),
                    'sidebar-group-active':
                        groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
                }
            )}>
                <Link to='/' className="webx-menu-link" onClick={e => onCollapseClick(e, item)}>
                    <span>
                        <span className='webx-menu-icon'>{item.icon}</span>
                        <span className='webx-menu-title'>{item.title}</span>
                    </span>
                    <span className='webx-menu-arrow'> <RiArrowRightSLine/></span>
                </Link>
                <ul className="webx-submenu">
                    <Collapse isOpen={(groupActive && groupActive.includes(item.id)) || (groupOpen && groupOpen.includes(item.id))}>
                        <MenuItems
                            items={item.children}
                            groupActive={groupActive}
                            setGroupActive={setGroupActive}
                            currentActiveGroup={currentActiveGroup}
                            setCurrentActiveGroup={setCurrentActiveGroup}
                            groupOpen={groupOpen}
                            setGroupOpen={setGroupOpen}
                            parentItem={item}
                            menuHover={menuHover}
                            activeItem={activeItem}
                            {...rest} />
                    </Collapse>

                </ul>
            </li>
        </>
    )
}

// extra
export const removeChildren = (children, openGroup, currentActiveGroup) => {
    children.forEach(child => {
        if (!currentActiveGroup.includes(child.id)) {
            const index = openGroup.indexOf(child.id)
            if (index > -1) openGroup.splice(index, 1)
            if (child.children) removeChildren(child.children, openGroup, currentActiveGroup)
        }
    })
}
export const hasActiveChild = (item, currentUrl) => {
    const { children } = item

    if (!children) {
        return false
    }

    for (const child of children) {
        if (child.children) {
            if (hasActiveChild(child, currentUrl)) {
                return true
            }
        }

        // Check if the child has a link and is active
        if (child && child.navLink && currentUrl && (child.navLink === currentUrl || currentUrl.includes(child.navLink))) {
            return true
        }
    }

    return false
}