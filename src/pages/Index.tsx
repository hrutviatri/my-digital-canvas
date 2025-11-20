import { useState } from "react";
import { Server, Globe, Link, Cpu, HardDrive, Activity, Zap, Database, Cloud, Network, Lock, Box, FileText } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import StatsCard from "@/components/StatsCard";
import ResourceUsageChart from "@/components/charts/ResourceUsageChart";
import UptimeChart from "@/components/charts/UptimeChart";
import PerformanceChart from "@/components/charts/PerformanceChart";
import ResourceDetailsModal from "@/components/ResourceDetailsModal";

const Index = () => {
  const [selectedResource, setSelectedResource] = useState<{
    title: string;
    value: string;
    description?: string;
  } | null>(null);

  const resources = [
    {
      icon: Server,
      title: "Virtual Machine",
      value: "VM-Server-01",
      description: "Your primary virtual machine instance"
    },
    {
      icon: Globe,
      title: "Website Name",
      value: "myawesomesite.com",
      description: "Your main website domain"
    },
    {
      icon: Link,
      title: "Subdomain Name",
      value: "app.mysite.com",
      description: "Application subdomain endpoint"
    },
    {
      icon: Database,
      title: "SQL Database",
      value: "prod-db-main",
      description: "Production SQL database server"
    },
    {
      icon: Cloud,
      title: "Storage Account",
      value: "storageaccount123",
      description: "Blob and file storage container"
    },
    {
      icon: Network,
      title: "Virtual Network",
      value: "vnet-production",
      description: "Azure virtual network gateway"
    },
    {
      icon: Lock,
      title: "Key Vault",
      value: "keyvault-secrets",
      description: "Secure secrets and certificates"
    },
    {
      icon: Box,
      title: "App Service",
      value: "webapp-prod-01",
      description: "Web application hosting service"
    },
    {
      icon: FileText,
      title: "Resource Group",
      value: "rg-production",
      description: "Resource group container"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-10 bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            My Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage and monitor your resources</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Creator Section */}
        <section className="animate-fade-in">
          <div className="max-w-4xl mx-auto p-8 rounded-xl bg-gradient-primary relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-glow" />
            <div className="relative z-10 text-center">
              <div className="inline-block p-4 rounded-full bg-background/10 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Created By
              </h3>
              <p className="text-primary-foreground/90 text-lg font-medium mb-2">
                Your Name Here
              </p>
              <p className="text-primary-foreground/70 text-sm">
                Built with passion using modern cloud technologies
              </p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-foreground/50 animate-pulse" />
                <p className="text-xs text-primary-foreground/70">Powered by Azure Cloud Services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Cards */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <InfoCard
                key={index}
                icon={resource.icon}
                title={resource.title}
                value={resource.value}
                description={resource.description}
                onClick={() => setSelectedResource(resource)}
              />
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              icon={Cpu}
              label="CPU Usage"
              value="72%"
              trend="5% from last hour"
              trendUp={false}
            />
            <StatsCard
              icon={HardDrive}
              label="Memory"
              value="8.2 GB"
              trend="12% from yesterday"
              trendUp={true}
            />
            <StatsCard
              icon={Activity}
              label="Active Users"
              value="1,247"
              trend="8% from last week"
              trendUp={true}
            />
            <StatsCard
              icon={Zap}
              label="Requests/min"
              value="3,542"
              trend="15% from last hour"
              trendUp={true}
            />
          </div>
        </section>

        {/* Analytics & Charts */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Analytics & Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResourceUsageChart />
            <PerformanceChart />
          </div>
          <div className="mt-6">
            <UptimeChart />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Built with ❤️ using modern web technologies</p>
        </div>
      </footer>

      {/* Resource Details Modal */}
      {selectedResource && (
        <ResourceDetailsModal
          isOpen={!!selectedResource}
          onClose={() => setSelectedResource(null)}
          title={selectedResource.title}
          value={selectedResource.value}
          description={selectedResource.description}
        />
      )}
    </div>
  );
};

export default Index;
