import { Link } from "gatsby";
import React from "react";

interface NavItem {
  to: string;
  title: string;
}
const siteItems: NavItem[] = [
  { to: "/about", title: "About" },
  { to: "/contact", title: "Contact" },
];

const socialItems: NavItem[] = [
  { to: "https://github.com/kaneshin", title: "GitHub" },
  { to: "https://twitter.com/kaneshin0120", title: "Twitter" },
  { to: "https://instagram.com/kaneshin0120", title: "Instagram" },
];

export default () => (
  <div className="flex flex-col md:flex-row-reverse items-stretch">
    <div className="flex-1 mb-40px md:mb-0">
      <p className="mb-16px text-14px uppercase">on social</p>
      <ul className="text-18px font-medium">
        {socialItems.map((item: NavItem) => (
          <li className="mb-6px" key={item.to}>
            <a href={item.to}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex-1 mb-40px md:mb-0">
      <p className="mb-16px text-14px uppercase">kaneshin.co</p>
      <ul className="text-18px font-medium">
        {siteItems.map((item: NavItem) => (
          <li className="mb-6px" key={item.to}>
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex-1 mb-40px md:mb-0">
      <p className="mb-16px text-20px font-medium">Shintaro Kaneko</p>
      <p className="text-14px">&copy; 2020</p>
    </div>
  </div>
);
