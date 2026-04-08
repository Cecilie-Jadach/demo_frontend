import Link from 'next/link'

interface NavbarLinkProps {
    href: string
    children: React.ReactNode
}

const NavbarLink: React.FC<NavbarLinkProps> = ({href, children}) => {
    return (
        <Link href={href}>{children}</Link>
    );
};

export default NavbarLink;