import NavbarLink from "./NavbarLink";


const Navbar: React.FC = () => {
    return (
        <ul>
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/users">Users</NavbarLink>
        </ul>
    )
}

export default Navbar;
