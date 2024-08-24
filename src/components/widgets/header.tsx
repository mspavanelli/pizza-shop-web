import { Home, Pizza, UtensilsCrossed } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { NavLink } from "@/components/widgets/nav-link";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="size-4" />
            Início
          </NavLink>
          <NavLink to="/foo">
            <UtensilsCrossed className="size-4" />
            Início
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
