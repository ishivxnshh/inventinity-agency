"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Tracks navigation to prevent popups on internal navigation.
 * 
 * Logic:
 * - On initial mount, we do nothing (allow popup logic to determine if it's a fresh session).
 * - On subsequent location changes (navigation), we mark "internalNavigation" as true.
 * - This ensures that if a user goes Landing -> Portfolio -> Landing, the popup won't show on the second visit.
 */
export const NavigationTracker = () => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Check if page was reloaded
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0 && (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload') {
      // If reload, clear internal navigation so logic resets
      sessionStorage.removeItem("isInternalNav");
    }

    // Skip the first render which happens on page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // On any subsequent navigation, set the flag
    sessionStorage.setItem("isInternalNav", "true");
  }, [pathname]);

  return null;
};
