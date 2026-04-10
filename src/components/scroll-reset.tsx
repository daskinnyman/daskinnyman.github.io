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
    window.scrollTo(0, 0);
  }, []);

  return null;
}
