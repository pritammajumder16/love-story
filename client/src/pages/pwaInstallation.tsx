// components/InstallPWA.tsx
import { useState, useEffect } from "react";

export const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = async () => {
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
    const { outcome } = await promptInstall.userChoice;
    if (outcome === "accepted") {
      setPromptInstall(null);
    }
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#f8a5c2",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      Install App
    </button>
  );
};
