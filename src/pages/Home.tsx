
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Car, Truck, Armchair, Shirt, UtensilsCrossed, ShoppingCart } from 'lucide-react';

const Home = () => {
  const businessSectors = [
    {
      title: 'Automotive',
      description: "Rider's Option – Pioneering bike servicing.",
      icon: Car,
      path: '/automotive',
    },
    {
      title: 'Logistics',
      description: 'RO Courier – Reliable courier and delivery solutions.',
      icon: Truck,
      path: '/logistics',
    },
    {
      title: 'Furniture',
      description: 'Furnito – Quality furniture with manufacturing strength.',
      icon: Armchair,
      path: '/furniture',
    },
    {
      title: 'Fashion & Retail',
      description: 'Lotto – Global sportswear through franchise outlets.',
      icon: Shirt,
      path: '/fashion-retail',
    },
    {
      title: 'Food & Hospitality',
      description: 'Food Pavilion and Shawapnadip Park & Resort – Dining and recreational experiences.',
      icon: UtensilsCrossed,
      path: '/food-hospitality',
    },
    {
      title: 'Technology & E-Commerce',
      description: 'RO Mart, Wholesale Mart, and digital brands – Online shopping and innovation.',
      icon: ShoppingCart,
      path: '/ecommerce',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              RO GROUP
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-8 animate-fade-in">
              Empowering Growth Every Step
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Welcome to RO Group, a dynamic and rapidly expanding company founded in 2016. 
              From our beginnings with a single bike servicing center, we have evolved into a 
              powerhouse with diverse ventures. We are a growing ecosystem of ideas, passion, 
              and possibilities, dedicated to driving growth and innovation across every industry we touch.
            </p>
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Business Ecosystem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Business Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since our founding in 2016, RO Group has evolved from a single service center into a 
              dynamic and diversified powerhouse. Our journey is one of relentless growth and 
              innovation across key sectors that shape modern life and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <Card key={sector.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{sector.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground mb-4">
                      {sector.description}
                    </CardDescription>
                    <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to={sector.path}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Growth Journey</h2>
            <p className="text-lg text-muted-foreground">From humble beginnings to diversified success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2016</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Business Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Active Ventures</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Years of Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow With Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our ecosystem of innovation and be part of our continued growth story.
          </p>
          <div className="space-x-4">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
