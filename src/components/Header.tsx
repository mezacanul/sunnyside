import Logo from "./common/Logo";
import { cn } from "../utils/cn";
import { useResponsive } from "../hooks/useResponsive";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
    const classNames = {
        header: cn(
            "px-6 sm:px-8",
            "absolute top-0 left-0 w-full py-6 flex items-center justify-between z-10"
        ),
        logo: cn("text-3xl sm:text-4xl"),
    };
    return (
        <header className={classNames.header}>
            <Logo
                color="white"
                className={classNames.logo}
            />
            {useResponsive<React.ReactNode>([
                <MobileNav />,
                <Nav />,
            ])}
        </header>
    );
}

function MobileNav() {
    return (
        <span className="text-white text-3xl">
            <AiOutlineMenu />
        </span>
    );
}

function Nav() {
    const navLinks = [
        { href: "#about", children: "About" },
        { href: "#services", children: "Services" },
        { href: "#projects", children: "Projects" },
        { href: "#contact", children: "CONTACT" },
    ];

    return (
        <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                    {link.children}
                </NavLink>
            ))}
        </nav>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const isContact =
        children === "CONTACT"
            ? "bg-white hover:bg-white/30 text-black! hover:text-white! font-fraunces text-base! font-bold! rounded-full px-6 py-2"
            : "";

    return (
        <a
            href={href}
            className={`text-white hover:text-blue-800 text-base font-barlow text-lg transition-colors duration-300 ${isContact}`}
        >
            {children}
        </a>
    );
}
