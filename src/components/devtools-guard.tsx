"use client";

import React from "react";

export function DevtoolsGuard() {
  React.useEffect(() => {
    const preventKeys = (event: KeyboardEvent) => {
      const blockedShortcuts = (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["I", "J", "C", "K"].includes(event.key)) ||
        (event.metaKey && event.altKey && event.key === "I")
      );

      if (blockedShortcuts) {
        event.preventDefault();
        event.stopPropagation();
        alert("Las herramientas de desarrollador están deshabilitadas en este entorno.");
      }
    };

    const preventContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const keydownOptions: AddEventListenerOptions = { capture: true };

    window.addEventListener("keydown", preventKeys, keydownOptions);
    window.addEventListener("contextmenu", preventContextMenu);

    return () => {
      window.removeEventListener("keydown", preventKeys, keydownOptions);
      window.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  return null;
}
