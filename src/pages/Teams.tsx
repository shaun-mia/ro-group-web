
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, ShoppingCart, Package, Heart } from 'lucide-react';

const Teams = () => {
  const leadershipTeam = [
    {
      name: 'Rafid Ahsan Noor',
      position: 'Chairman',
      description: 'Strategic visionary providing direction for growth and diversification across all business sectors.',
    },
    {
      name: 'Akbar Hossain Bappy',
      position: 'Managing Director',
      description: 'Operational leader ensuring mission alignment and driving excellence throughout the organization.',
    },
  ];

  const hrTeam = [
    { role: 'Head of HR', description: 'Leading organizational development and culture transformation initiatives.' },
    { role: 'Talent Acquisition Specialist', description: 'Identifying and recruiting top talent to fuel our growth.' },
    { role: 'Employee Relations Manager', description: 'Fostering positive workplace relationships and employee satisfaction.' },
  ];

  const roMartTeam = [
    { role: 'E-commerce Manager', description: 'Overseeing online retail operations and customer experience optimization.' },
    { role: 'Digital Marketing Specialist', description: 'Driving online presence and customer acquisition strategies.' },
    { role: 'Product Sourcing Lead', description: 'Ensuring quality products and efficient supply chain management.' },
  ];

  const wholesaleMartTeam = [
    { role: 'Head of Wholesale', description: 'Leading B2B operations and strategic business development.' },
    { role: 'Key Account Manager', description: 'Managing relationships with major business partners and clients.' },
    { role: 'Supply Chain Manager', description: 'Optimizing logistics and ensuring seamless distribution networks.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Teams
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The People Empowering Our Growth
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Visionary leaders guiding our strategic direction and organizational growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{leader.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {leader.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HR Development Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10 w-fit">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">HR Development Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Focused on empowering staff and nurturing a growth-focused culture that drives 
              organizational excellence and employee satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {hrTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <UserCheck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RO Mart Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10 w-fit">
              <ShoppingCart className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">RO Mart Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Manages e-commerce operations to ensure product excellence and exceptional customer 
              service across our online retail platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {roMartTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Mart Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10 w-fit">
              <Package className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Wholesale Mart Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Manages B2B operations and maintains strategic supply chain relationships to ensure 
              seamless wholesale distribution and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {wholesaleMartTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Team Culture</h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            At RO Group, we believe in fostering a collaborative environment where innovation thrives, 
            growth is celebrated, and every team member contributes to our shared success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="opacity-90">
                Working together across divisions to achieve common goals and share knowledge.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="opacity-90">
                Encouraging creative thinking and embracing new ideas to drive continuous improvement.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <p className="opacity-90">
                Supporting professional development and personal growth for all team members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
