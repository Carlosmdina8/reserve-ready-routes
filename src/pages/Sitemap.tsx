const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Sitemap</h1>
        <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
          <code className="text-sm text-foreground">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.medinaagency.es/</loc></url>
  <url><loc>https://impulsolocal.medinaagency.es/</loc></url>
  <url><loc>https://premium.medinaagency.es/</loc></url>
  <url><loc>https://mesasllenas.medinaagency.es/</loc></url>
  <url><loc>https://enelmapa.medinaagency.es/</loc></url>
</urlset>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Sitemap;
