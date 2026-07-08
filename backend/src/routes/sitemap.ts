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
      { slug: "delhi", updatedAt: new Date().toISOString() },
      { slug: "delhi/dwarka", updatedAt: new Date().toISOString() },
      { slug: "delhi/vasant-kunj", updatedAt: new Date().toISOString() },
      { slug: "delhi/kapashera", updatedAt: new Date().toISOString() },
      { slug: "delhi/mahipalpur", updatedAt: new Date().toISOString() },
      { slug: "delhi/bijwasan", updatedAt: new Date().toISOString() },
      { slug: "delhi/rangpuri", updatedAt: new Date().toISOString() },
      { slug: "delhi/samalka", updatedAt: new Date().toISOString() },
      { slug: "delhi/hari-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/najafgarh-road", updatedAt: new Date().toISOString() },
      { slug: "delhi/palam", updatedAt: new Date().toISOString() },
      { slug: "delhi/uttam-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/janakpuri", updatedAt: new Date().toISOString() },
      { slug: "delhi/vikaspuri", updatedAt: new Date().toISOString() },
      { slug: "delhi/dabri", updatedAt: new Date().toISOString() },
      { slug: "delhi/bindapur", updatedAt: new Date().toISOString() },
      { slug: "delhi/nawada", updatedAt: new Date().toISOString() },
      { slug: "delhi/nihal-vihar", updatedAt: new Date().toISOString() },
      { slug: "delhi/subhash-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/tilak-nagar", updatedAt: new Date().toISOString() },
      { slug: "delhi/rajouri-garden", updatedAt: new Date().toISOString() },
      { slug: "delhi/punjabi-bagh", updatedAt: new Date().toISOString() },
      { slug: "delhi/ashok-vihar", updatedAt: new Date().toISOString() },
      { slug: "delhi/pitampura", updatedAt: new Date().toISOString() },
      { slug: "delhi/rohini", updatedAt: new Date().toISOString() },
      { slug: "delhi/shalimar-bagh", updatedAt: new Date().toISOString() },
      { slug: "delhi/paschim-vihar", updatedAt: new Date().toISOString() },
      { slug: "delhi/kirti-nagar", updatedAt: new Date().toISOString() },
      { slug: "gurgaon", updatedAt: new Date().toISOString() },
      { slug: "noida", updatedAt: new Date().toISOString() },
      { slug: "faridabad", updatedAt: new Date().toISOString() },
      { slug: "ghaziabad", updatedAt: new Date().toISOString() },
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
