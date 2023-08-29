import { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ISidebarLink from '../../core/interfaces/sidebar-link.interface';

interface ISidebarProps {
  links: ISidebarLink[];
}

const SidebarLink: FC<ISidebarProps> = ({ links }) => {
  return (
    <div className="space-y-[1.25rem] px-[1.25rem]">
      {links.map((nav) => (
        <Fragment key={`sidebar-link-${nav.title}`}>
          {nav.title && <div className="text-xs font-semibold opacity-80">{nav.title}</div>}

          {(nav.links || []).length > 0 && (
            <div className="space-y-2">
              {(nav.links || []).map((link) => (
                <NavLink
                  key={`sidebar-link-${link.route}`}
                  to={link.route || ''}
                  className={({ isActive }) => `${isActive ? 'active' : ''} nav-link`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          )}
          {nav.isDivider && <hr />}
        </Fragment>
      ))}
    </div>
  );
};

export default SidebarLink;
