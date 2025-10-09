import { useEffect } from "react";

const Sitemap = () => {
  useEffect(() => {
    window.location.href = "/sitemap.xml";
  }, []);

  return null;
};

export default Sitemap;
