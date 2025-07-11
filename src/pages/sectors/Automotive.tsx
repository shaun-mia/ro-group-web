import { Car } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Automotive = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10 w-fit">
            <Car className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">Automotive Division</h1>
          <p className="text-xl text-muted-foreground">Driving Forward with Excellence and Precision</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Rider's Option</CardTitle>
              <CardDescription className="text-lg">Our Foundational Venture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Specializing in professional bike servicing since 2017, Rider's Option is the cornerstone 
                of our group, built on a reputation for quality and trust.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Established</h3>
                  <p>2017</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p>Moddho Badda, Dhaka</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Infrastructure</h3>
                  <p>1,100 sq ft state-of-the-art service center</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Automotive;
