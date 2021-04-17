import Link from 'next/link';

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// Icons
import { FaGem, FaHeart, FaGithub } from 'react-icons/fa';

function Sidebar() {
  return (
    <ProSidebar>

      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          EPIC INSTALLER
        </div>
      </SidebarHeader>
      <SidebarContent>

        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>
            Dashboard
          </MenuItem>
          <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <FaGithub />
            <span style={{ paddingLeft: '5px' }}>{"View Source"}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar;