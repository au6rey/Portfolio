import { ModeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <ModeToggle />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold">HOME</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"#intro"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold">INTRO</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"#experience"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold">EXPERIENCE</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"#portfolio"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold">PORTFOLIO</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"#contact"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-bold">CONTACT</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
