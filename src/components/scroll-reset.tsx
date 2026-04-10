"use client";

import { useEffect } from "react";

/**
 * Disables browser scroll restoration and scrolls to top on mount.
 *
 * Without this, refreshing mid-page leaves Framer Motion's `whileInView`
 * animations stuck at `initial="hidden"` for sections the user scrolled
 * past, because those sections never re-enter the viewport.
 */
export function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Use instant (not smooth) so we don't fly through all whileInView
    // animations on reload. The global `scroll-behavior: smooth` would
    // otherwise animate this scroll over several hundred ms.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
