import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 animate-fade-up max-w-md">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-primary tracking-tighter">
          404
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Page not found
          </h2>
          <p className="text-muted-foreground text-lg">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="pt-8">
          <Link href="/">
            <Button size="lg" className="gap-2 rounded-full font-medium">
              <MoveLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
};

export default NotFound;
