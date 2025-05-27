import Link from 'next/link';
import { WertekLogo } from '@/components/logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <WertekLogo className="h-10 w-auto" />
            </Link>
            <p className="text-sm">
              Wertetek delivers innovative solutions across mechanical, electronics, web/app development, construction, and interior design.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>RR Nagar, Bengaluru</p>
              <p>Email: <a href="mailto:Admin@wertetek.com" className="hover:text-primary transition-colors">Admin@wertetek.com</a></p>
              <p>Phone: <a href="tel:+919686643633" className="hover:text-primary transition-colors">9686643633</a></p>
            </address>
          </div>
          
          {/*<div className="space-y-4">*/}
          {/*  <h3 className="text-lg font-semibold">Newsletter</h3>*/}
          {/*  <p className="text-sm">Stay updated with our latest news and offers.</p>*/}
          {/*  <form className="flex gap-2">*/}
          {/*    <Input type="email" placeholder="Enter your email" className="bg-background" />*/}
          {/*    <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>*/}
          {/*  </form>*/}
          {/*</div>*/}
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Wertetek. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#footer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
            <Link href="#footer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
            <Link href="#footer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
            <Link href="#footer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
