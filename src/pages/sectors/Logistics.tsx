import { Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Logistics = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10 w-fit">
            <Truck className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">Logistics Division</h1>
          <p className="text-xl text-muted-foreground">Connecting Your World, One Delivery at a Time</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">RO Courier</CardTitle>
              <CardDescription className="text-lg">Reliable Delivery Solutions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Launched in 2019, RO Courier serves the growing logistics needs of both personal 
                and e-commerce clients with a focus on speed and reliability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Established</h3>
                  <p>2019</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Services</h3>
                  <p>E-commerce & Personal Logistics</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Infrastructure</h3>
                  <p>Operational hubs in Mugda, Mirpur, Badda, Kamrangirchar, and Chattogram</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
