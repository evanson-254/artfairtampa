import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  Menu,
  X,
  User,
  CalendarDays,
  Pencil,
  Users,
  ChevronRight,
} from "lucide-react";

const links = [
  { name: "ARTISTS", path: "/artists", icon: User },
  { name: "EVENTS", path: "/events", icon: CalendarDays },
  { name: "APPLY", path: "/artist-application", icon: Pencil },
  { name: "SPONSORS", path: "/sponsor-application", icon: Users },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#02142B] opacity-90">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.webp"
              alt="Art Fair Tampa"
              className="h-12 w-12 object-contain"
            />

            <h1 className="hidden text-[18px] italic text-white sm:block">
              Art Fair Tampa
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-12 md:flex">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-[11px] font-semibold tracking-[0.22em] transition ${
                    isActive
                      ? "text-[#E41E3F]"
                      : "text-white/90 hover:text-[#E41E3F]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="hidden bg-[#D91C3C] px-6 py-2 text-[11px] font-bold tracking-[0.14em] text-white transition hover:bg-[#c21734] md:block">
              STAY IN THE KNOW
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="text-white md:hidden"
            >
              {open ? <X size={34} /> : <Menu size={34} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          open
            ? "visible bg-black/40 opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-[68px] h-[calc(100vh-68px)] w-full bg-[#02142B] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="divide-y divide-white/10 border-t border-white/10">
            {links.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-6 text-white"
                >
                  <div className="flex items-center gap-4">
                    {/* <Icon size={22} strokeWidth={1.6} /> */}
                    <span className="text-[15px] font-semibold tracking-[0.18em]">
                      {item.name}
                    </span>
                  </div>

                  {/* <ChevronRight size={20} strokeWidth={1.6} color="rgba(255,255,255,0.6)" /> */}
                </NavLink>
              );
            })}
          </div>

          <div className="p-6">
            <button className="w-full bg-[#D91C3C] py-3 text-sm font-bold tracking-[0.18em] text-white">
              STAY IN THE KNOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}