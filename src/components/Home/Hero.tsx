import Logo from "../common/Logo";

export default function Hero() {
    const bgImage =
        "/src/assets/images/desktop/image-header.jpg";
    const arrowDownImage =
        "/src/assets/images/icon-arrow-down.svg";
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center relative"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <Header />
            <div className="flex flex-col items-center justify-center gap-25 -mt-[10rem]">
                <h1 className="text-white text-center text-6xl font-bold font-fraunces tracking-widest">
                    {"WE ARE CREATIVES"}
                </h1>
                <img
                    src={arrowDownImage}
                    alt="arrow down"
                />
            </div>
        </div>
    );
}

function Header() {
    return (
        <header className="absolute top-0 left-0 w-full px-8 py-6 flex items-center justify-between">
            <Logo color="white" className="text-4xl" />
            <Nav />
        </header>
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
    return (
        <a
            href={href}
            className="text-white text-base font-barlow text-lg"
        >
            {children}
        </a>
    );
}
