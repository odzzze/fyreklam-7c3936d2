import { describe, expect, it } from "vitest";

import { site } from "@/lib/site";

// The client gave one exact address; it must reach the site in full.
describe("Business address", () => {
  it("carries the full street, postal code and district", () => {
    expect(site.street).toBe("Göksu, 6857. Sk.");
    expect(site.postalCode).toBe("07260");
    expect(site.district).toBe("Kepez");
    expect(site.city).toBe("Antalya");
  });

  it("prints the address in full, not just the district", () => {
    expect(site.address).toContain("Göksu, 6857. Sk.");
    expect(site.address).toContain("07260");
    expect(site.addressLines.join(" ")).toContain("6857");
  });

  it("pins the map on the street, not on the whole district", () => {
    expect(site.mapQuery).toContain("6857");
    expect(site.mapQuery).toContain("07260");
  });
});
