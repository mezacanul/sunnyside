import { useState, useEffect, useMemo } from "react";

// Using a Tuple to enforce 2-5 elements via TypeScript
type ResponsiveValues<T> = [T, T, T?, T?, T?];

export function useResponsive<T>(
    values: ResponsiveValues<T>
): T {
    // Define breakpoints locally (Mobile-first: sm, md, lg, xl)
    const breakpoints = useMemo(() => [500, 1440], []);

    // Validation
    if (values.filter((v) => v !== undefined).length < 2) {
        throw new Error(
            "useResponsive requires at least 2 values."
        );
    }

    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Create media query lists for each breakpoint
        // e.g., "(min-width: 640px)", "(min-width: 768px)", etc.
        const mqls = breakpoints.map((bp) =>
            window.matchMedia(`(min-width: ${bp}px)`)
        );

        const handler = () => {
            // Find the highest index where the media query matches
            // We only look up to values.length - 1
            let newIndex = 0;
            for (let i = 0; i < values.length - 1; i++) {
                if (mqls[i].matches) {
                    newIndex = i + 1;
                }
            }
            setIndex(newIndex);
        };

        // Initial check
        handler();

        // Listen for changes on each media query
        mqls.forEach((mql) =>
            mql.addEventListener("change", handler)
        );

        return () => {
            mqls.forEach((mql) =>
                mql.removeEventListener("change", handler)
            );
        };
    }, [values.length, breakpoints]);

    return values[index] as T;
}
