
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About RO Group
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our Journey, Our Values, Our Leadership
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2016 and starting its journey in 2017 with a single bike servicing center, 
                Rider's Option, RO Group has since expanded into multiple sectors. What began as a 
                focused service in the automotive industry has blossomed into a comprehensive business 
                ecosystem spanning six major sectors.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, we represent an ecosystem of passion, ideas, and commitment across industries 
                including automotive, logistics, furniture, fashion, food, beauty, and technology. 
                Our growth story is one of strategic diversification, always maintaining our core 
                values of quality, innovation, and customer satisfaction.
              </p>
              <p className="text-lg leading-relaxed">
                From that single 1,100 sq ft bike servicing center in Moddho Badda, Dhaka, we now 
                operate multiple manufacturing facilities, logistics hubs, retail outlets, and digital 
                platforms. Each venture represents our commitment to empowering growth in every step 
                of our journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Purpose</h2>
            <p className="text-lg text-muted-foreground">What drives us forward every day</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  To be a leading force for growth and innovation in every industry we operate in, 
                  continuously adapting to meet evolving customer needs and setting new standards 
                  of excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  To drive growth across all industries by prioritizing innovation, quality, and 
                  customer satisfaction while building sustainable businesses that contribute to 
                  community development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership</h2>
            <p className="text-lg text-muted-foreground">The visionaries guiding our growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Rafid Ahsan Noor</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">Chairman</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Provides strategic direction for growth and diversification, overseeing the 
                  company's expansion into new markets and ensuring alignment with long-term vision.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Akbar Hossain Bappy</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">Managing Director</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Oversees day-to-day operations and ensures mission alignment across all divisions, 
                  driving operational excellence and fostering innovation throughout the organization.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl opacity-90">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="opacity-90">
                Continuously pushing boundaries and embracing new technologies to stay ahead 
                of market demands.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p className="opacity-90">
                Maintaining the highest standards in every product and service we deliver 
                across all our ventures.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <p className="opacity-90">
                Empowering sustainable growth for our customers, partners, employees, 
                and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our diverse business ventures and discover how we're empowering growth 
            across multiple industries.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link to="/teams">
                Meet Our Teams
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
