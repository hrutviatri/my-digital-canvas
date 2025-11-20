import { Server, Globe, Link } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            My Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage and monitor your resources</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <InfoCard
            icon={Server}
            title="Virtual Machine"
            value="VM-Server-01"
            description="Your primary virtual machine instance"
          />
          
          <InfoCard
            icon={Globe}
            title="Website Name"
            value="myawesomesite.com"
            description="Your main website domain"
          />
          
          <InfoCard
            icon={Link}
            title="Subdomain Name"
            value="app.mysite.com"
            description="Application subdomain endpoint"
          />
        </div>

        {/* Add More Section */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            Want to add more? Just duplicate the InfoCard component with your new data!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Built with ❤️ using modern web technologies</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
