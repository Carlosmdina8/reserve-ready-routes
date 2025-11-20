import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const saved = JSON.parse(consent);
      setPreferences(saved);
    }

    // Listen for custom event to reopen settings
    const handleReopenSettings = () => {
      setShowSettings(true);
    };
    window.addEventListener("openCookieSettings", handleReopenSettings);

    return () => {
      window.removeEventListener("openCookieSettings", handleReopenSettings);
    };
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      preferences: true,
    };
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      preferences: false,
    };
    savePreferences(onlyNecessary);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Banner */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E7EB] shadow-2xl p-4 md:p-6 animate-fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#111111] mb-2 font-sora">
                  🍪 Usamos cookies
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el uso del sitio. 
                  Puedes aceptar todas, rechazarlas o configurar tus preferencias.{" "}
                  <a 
                    href="/cookies" 
                    className="text-[#FF6A00] hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  className="border-[#E5E7EB] text-[#111111] hover:bg-[#F9F9F9] whitespace-nowrap"
                >
                  Rechazar
                </Button>
                <Button
                  onClick={() => {
                    setShowBanner(false);
                    setShowSettings(true);
                  }}
                  variant="outline"
                  className="border-[#E5E7EB] text-[#111111] hover:bg-[#F9F9F9] whitespace-nowrap"
                >
                  Configurar
                </Button>
                <Button
                  onClick={acceptAll}
                  className="bg-[#FF6A00] text-white hover:bg-[#E55F00] whitespace-nowrap"
                >
                  Aceptar todas
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-sora text-[#111111]">
              Configuración de cookies
            </DialogTitle>
            <DialogDescription className="text-[#6B7280]">
              Gestiona tus preferencias de cookies. Puedes activar o desactivar cada categoría según tus necesidades.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-[#F9F9F9] rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Label htmlFor="necessary" className="text-base font-semibold text-[#111111] cursor-pointer">
                    Cookies necesarias
                  </Label>
                  <span className="text-xs bg-[#E5E7EB] text-[#6B7280] px-2 py-1 rounded">
                    Siempre activas
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. 
                  Permiten recordar tu configuración de cookies y navegar por el sitio de forma segura.
                </p>
              </div>
              <Switch
                id="necessary"
                checked={preferences.necessary}
                disabled
                className="mt-1"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 border border-[#E5E7EB] rounded-lg">
              <div className="flex-1">
                <Label htmlFor="analytics" className="text-base font-semibold text-[#111111] mb-2 block cursor-pointer">
                  Cookies analíticas
                </Label>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Nos ayudan a entender cómo los visitantes interactúan con el sitio web, 
                  recopilando información de forma anónima para mejorar tu experiencia.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked })
                }
                className="mt-1"
              />
            </div>

            {/* Preference Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 border border-[#E5E7EB] rounded-lg">
              <div className="flex-1">
                <Label htmlFor="preferences" className="text-base font-semibold text-[#111111] mb-2 block cursor-pointer">
                  Cookies de preferencias
                </Label>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Permiten que el sitio web recuerde tus elecciones (como idioma o región) 
                  para ofrecerte una experiencia más personalizada.
                </p>
              </div>
              <Switch
                id="preferences"
                checked={preferences.preferences}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, preferences: checked })
                }
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={rejectAll}
              variant="outline"
              className="border-[#E5E7EB] text-[#111111] hover:bg-[#F9F9F9]"
            >
              Rechazar todas
            </Button>
            <Button
              onClick={saveCustom}
              className="bg-[#FF6A00] text-white hover:bg-[#E55F00]"
            >
              Guardar preferencias
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;