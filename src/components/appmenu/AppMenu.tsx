import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"


export default function AppMenu() {
    return (
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>

            <Link href="/about">
                <NavigationMenuLink>
                    About
                </NavigationMenuLink>
            </Link>

            <Link href="/contact-us">
                <NavigationMenuLink>
                    Contact Us
                </NavigationMenuLink>
            </Link>

            <Link href="/auth/login">
                <NavigationMenuLink>
                    Login
                </NavigationMenuLink>
            </Link>

            <Link href="/auth/register">
                <NavigationMenuLink>
                    Register
                </NavigationMenuLink>
            </Link>


            {/* <NavigationMenuTrigger>Authentication</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent> */}
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    )
}