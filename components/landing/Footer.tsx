import Link from "next/link";
import Image from "next/image";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LogoIcon from "@/assets/landing/urto-logo.png";

const FooterSection = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 md:col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2">
                <Link href="/" className="cursor-pointer">
                  <Image src={LogoIcon} className="w-28" alt="Urto logo" />
                </Link>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <Link href="/" className="text-sm text-muted-foreground">
                Changelog
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Documentation
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <Link href="/" className="text-sm text-muted-foreground">
                About
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Careers
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Blog
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <Link href="/" className="text-sm text-muted-foreground">
                Discord
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Twitter
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Github
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom className="flex items-center justify-center">
            <div>© 2025 MEGA. All rights reserved</div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
};

export default FooterSection;
