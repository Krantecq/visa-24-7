import React from 'react'
import {FC} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {checkIsActive, KTIcon, WithChildren} from '../../../../helpers'
import {useLayout} from '../../../core'

type Props = {
  to: string
  title: string
  icon?: any
  fontIcon?: string
  hasBullet?: boolean
}

const SidebarMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet = false,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)
  const { config } = useLayout()
  const { app } = config

  // SVG ke liye dynamic styles
  const iconStyles = {
    fill: isActive ? '#327113' : '#77BA7B',
  };

  return (
    <div className='menu-item'>
      <Link className={clsx('menu-link without-sub', { active: isActive })} to={to}>
        <span style={{ marginRight: "15px", color: "#77BA7B" }} className='menu-custom-icon'>
          {React.cloneElement(icon, { style: iconStyles })} {/* Cloning icon with dynamic styles */}
        </span>
        <span style={{fontWeight:"500"}} className='menu-title'>{title}</span>
      </Link>
      {children}
    </div>
  )
}

export {SidebarMenuItem}
