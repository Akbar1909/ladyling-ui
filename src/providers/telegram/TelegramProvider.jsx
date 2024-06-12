"use client";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { TelegramContext } from "./TelegramContext";

const TelegramProvider = ({ children }) => {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    const app = window.Telegram?.WebApp;

    console.log(app);
    if (app) {
      app.ready();
      setWebApp(app);
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {/* Make sure to include script tag with "beforeInteractive" strategy to pre-load web-app script */}
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />{" "}
      {children}
    </TelegramContext.Provider>
  );
};

export default TelegramProvider;
