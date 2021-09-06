import React from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { text: "Nosotros", href: "/nosotros" },
  { text: "Acerca de", href: "/acerca" },
  { text: "Valores", href: "/valores" },
  { text: "Servicios", href: "/servicios" },
];
export default function NavLinks({ className }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map(({ text, href }) => (
        <li key={text} className="ml-4">
          <NavLink
            to={href}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            activeClassName="is-active"
            className="text-white"
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
