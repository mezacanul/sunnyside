import Logo from "./common/Logo";

export default function Header() {
  return (
      <header className="absolute top-0 left-0 w-full px-8 py-6 flex items-center justify-between z-10">
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