import LogoIcon from "@/assets/landing/urto-logo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";

const Header = ({ locale }: { locale: string }) => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden" />
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-4xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block" />
          <div>
            <Link href={`/`} className="cursor-pointer">
              <Image src={LogoIcon} className="w-24" alt="Urto logo" />
            </Link>
          </div>
          <ul className="hidden md:flex items-center gap-10 text-gray-400">
            <li className="text-primary font-medium">
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`${locale}/features`}>Features</Link>
            </li>
            <li>
              <Link href={`${locale}/pricing`}>Pricing</Link>
            </li>
            <li>
              <Link href={`${locale}/dashboard`}>Dashboard</Link>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <Button className="hidden md:flex">Get Started</Button>
            <Button className="hidden md:flex">Login</Button>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5 rotate-0 scale-100" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/home">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="features">Features</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="pricing">Pricing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="secondary" className="w-full text-sm">
                      Login
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button className="w-full text-sm">Get Started</Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
