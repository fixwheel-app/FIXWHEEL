import { Router, Request, Response } from "express";

const router = Router();

router.get("/services", async (req: Request, res: Response) => {
  try {
    const services = [
      { slug: "basic-service", updatedAt: new Date().toISOString() },
      { slug: "oil-change", updatedAt: new Date().toISOString() },
      { slug: "engine-repair", updatedAt: new Date().toISOString() },
      { slug: "tyre-replacement", updatedAt: new Date().toISOString() },
      { slug: "brake-repair", updatedAt: new Date().toISOString() },
      { slug: "battery-replacement", updatedAt: new Date().toISOString() },
      { slug: "general-washing", updatedAt: new Date().toISOString() },
      { slug: "comprehensive-service", updatedAt: new Date().toISOString() },
      { slug: "electric-scooter-repair", updatedAt: new Date().toISOString() },
      { slug: "scooty-repair", updatedAt: new Date().toISOString() },
      { slug: "sports-bike-service", updatedAt: new Date().toISOString() },
      { slug: "royal-enfield-service", updatedAt: new Date().toISOString() },
      { slug: "commuter-bike-service", updatedAt: new Date().toISOString() },
      { slug: "premium-bike-service", updatedAt: new Date().toISOString() },
      { slug: "book", updatedAt: new Date().toISOString() },
    ];
    res.json(services);
  } catch (error) {
    res.status(500).json([]);
  }
});

router.get("/blog", async (req: Request, res: Response) => {
  try {
    res.json([]);
  } catch (error) {
    res.status(500).json([]);
  }
});

export default router;
