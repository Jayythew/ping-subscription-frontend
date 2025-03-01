
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/", exact: true },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Subscriptions", href: "/subscriptions" },
  { name: "Settings", href: "/settings" },
];

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-background border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Subscription</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(link.href, link.exact)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/checkout"
            className="bg-primary text-white rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </header>
  );
}
