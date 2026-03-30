import { Hono } from "hono";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { FLEET_DIR as fleetDir } from "../paths";

export const fleetApi = new Hono();

fleetApi.get("/fleet-config", (c) => {
  try {
    const files = readdirSync(fleetDir).filter(f => f.endsWith(".json") && !f.endsWith(".disabled"));
    const configs = files.map(f => JSON.parse(readFileSync(join(fleetDir, f), "utf-8")));
    return c.json({ configs });
  } catch (e: any) {
    return c.json({ configs: [], error: e.message });
  }
});
