
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const divisions = [
    { name: 'Automotive', path: '/automotive' },
    { name: 'Logistics', path: '/logistics' },
    { name: 'Furniture', path: '/furniture' },
    { name: 'Fashion & Retail', path: '/fashion-retail' },
    { name: 'Food & Hospitality', path: '/food-hospitality' },
    { name: 'Technology & E-Commerce', path: '/ecommerce' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">RO GROUP</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/teams"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/teams') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Our Teams
            </Link>

            {/* Divisions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Divisions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {divisions.map((division) => (
                        <Link
                          key={division.path}
                          to={division.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {division.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  About Us
                </Link>
                <Link
                  to="/teams"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  Our Teams
                </Link>
                
                <div className="space-y-2">
                  <div className="text-lg font-medium text-foreground">Divisions</div>
                  <div className="pl-4 space-y-2">
                    {divisions.map((division) => (
                      <Link
                        key={division.path}
                        to={division.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-muted-foreground hover:text-primary"
                      >
                        {division.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
