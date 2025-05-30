import { NavLink } from 'react-router-dom';
import { memo } from "react"

interface Props { firstname: string; }

const Header = memo(({ firstname }: Props) => {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between">
            <nav className="space-x-4">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'underline' : ''}>
                Home
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'underline' : ''}>
                Blog
            </NavLink>
            </nav>
            <div>{firstname}</div>
        </header>
    );
})

export default Header;