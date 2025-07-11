
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">RO GROUP</div>
            <p className="text-muted-foreground text-sm">
              A growing ecosystem of ideas, passion, and possibilities, dedicated to driving growth and innovation across every industry we touch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary text-sm">
                About Us
              </Link>
              <Link to="/teams" className="block text-muted-foreground hover:text-primary text-sm">
                Our Teams
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Divisions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Divisions</h3>
            <div className="space-y-2">
              <Link to="/automotive" className="block text-muted-foreground hover:text-primary text-sm">
                Automotive
              </Link>
              <Link to="/logistics" className="block text-muted-foreground hover:text-primary text-sm">
                Logistics
              </Link>
              <Link to="/furniture" className="block text-muted-foreground hover:text-primary text-sm">
                Furniture
              </Link>
              <Link to="/ecommerce" className="block text-muted-foreground hover:text-primary text-sm">
                E-Commerce
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  House 63, Road 12, Merul Badda, DIT Project
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+8801321204255</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">romart309@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="https://www.romartbd.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  www.romartbd.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 RO Group. All rights reserved. | Empowering Growth Every Step
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
