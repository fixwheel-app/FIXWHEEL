import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { findModelBySlugs, slugifyModel } from "@/lib/modelSlug";
import {
  findHondaFamilyByAnySlug,
  findHondaFamilyBySlug,
  HONDA_MODEL_FAMILIES,
} from "@/lib/hondaModelFamilies";
import {
  findHeroFamilyByAnySlug,
  findHeroFamilyBySlug,
  HERO_MODEL_FAMILIES,
} from "@/lib/heroModelFamilies";
import {
  findBajajFamilyByAnySlug,
  findBajajFamilyBySlug,
  BAJAJ_MODEL_FAMILIES,
} from "@/lib/bajajModelFamilies";
import {
  findRoyalEnfieldFamilyByAnySlug,
  findRoyalEnfieldFamilyBySlug,
  ROYAL_ENFIELD_MODEL_FAMILIES,
} from "@/lib/royalEnfieldModelFamilies";
import {
  findYamahaFamilyByAnySlug,
  findYamahaFamilyBySlug,
  YAMAHA_MODEL_FAMILIES,
} from "@/lib/yamahaModelFamilies";
import {
  findKtmFamilyByAnySlug,
  findKtmFamilyBySlug,
  KTM_MODEL_FAMILIES,
} from "@/lib/ktmModelFamilies";
import {
  findSuzukiFamilyByAnySlug,
  findSuzukiFamilyBySlug,
  SUZUKI_MODEL_FAMILIES,
} from "@/lib/suzukiModelFamilies";
import {
  findOlaFamilyByAnySlug,
  findOlaFamilyBySlug,
  OLA_MODEL_FAMILIES,
} from "@/lib/olaModelFamilies";
import {
  findAtherFamilyByAnySlug,
  findAtherFamilyBySlug,
  ATHER_MODEL_FAMILIES,
} from "@/lib/atherModelFamilies";
import {
  findJawaFamilyByAnySlug,
  findJawaFamilyBySlug,
  JAWA_MODEL_FAMILIES,
} from "@/lib/jawaModelFamilies";
import {
  findYezdiFamilyByAnySlug,
  findYezdiFamilyBySlug,
  YEZDI_MODEL_FAMILIES,
} from "@/lib/yezdiModelFamilies";
import {
  findApriliaFamilyByAnySlug,
  findApriliaFamilyBySlug,
  APRILIA_MODEL_FAMILIES,
} from "@/lib/apriliaModelFamilies";
import {
  findVespaFamilyByAnySlug,
  findVespaFamilyBySlug,
  VESPA_MODEL_FAMILIES,
} from "@/lib/vespaModelFamilies";
import {
  findKawasakiFamilyByAnySlug,
  findKawasakiFamilyBySlug,
  KAWASAKI_PAGE_FAMILIES,
} from "@/lib/kawasakiModelFamilies";
import ModelDetailClient from "./page.client";

interface PageProps {
  params: Promise<{
    brand: string;
    model: string;
  }>;
}

export async function generateStaticParams() {
  return [
    ...HONDA_MODEL_FAMILIES.map((family) => ({ brand: "honda", model: family.slug })),
    ...HERO_MODEL_FAMILIES.map((family) => ({ brand: "hero", model: family.slug })),
    ...BAJAJ_MODEL_FAMILIES.map((family) => ({ brand: "bajaj", model: family.slug })),
    ...ROYAL_ENFIELD_MODEL_FAMILIES.map((family) => ({ brand: "royal-enfield", model: family.slug })),
    ...YAMAHA_MODEL_FAMILIES.map((family) => ({ brand: "yamaha", model: family.slug })),
    ...KTM_MODEL_FAMILIES.map((family) => ({ brand: "ktm", model: family.slug })),
    ...SUZUKI_MODEL_FAMILIES.map((family) => ({ brand: "suzuki", model: family.slug })),
    ...OLA_MODEL_FAMILIES.map((family) => ({ brand: "ola-electric", model: family.slug })),
    ...ATHER_MODEL_FAMILIES.map((family) => ({ brand: "ather", model: family.slug })),
    ...JAWA_MODEL_FAMILIES.map((family) => ({ brand: "jawa", model: family.slug })),
    ...YEZDI_MODEL_FAMILIES.map((family) => ({ brand: "yezdi", model: family.slug })),
    ...APRILIA_MODEL_FAMILIES.map((family) => ({ brand: "aprilia", model: family.slug })),
    ...VESPA_MODEL_FAMILIES.map((family) => ({ brand: "vespa", model: family.slug })),
    ...KAWASAKI_PAGE_FAMILIES.map((family) => ({ brand: "kawasaki", model: family.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand, model } = await params;

  const isHonda = brand.toLowerCase() === "honda";
  const isHero = brand.toLowerCase() === "hero";
  const isBajaj = brand.toLowerCase() === "bajaj";
  const isRoyalEnfield = brand.toLowerCase() === "royal-enfield";
  const isYamaha = brand.toLowerCase() === "yamaha";
  const isKtm = brand.toLowerCase() === "ktm";
  const isSuzuki = brand.toLowerCase() === "suzuki";
  const isOla = brand.toLowerCase() === "ola-electric";
  const isAther = brand.toLowerCase() === "ather";
  const isJawa = brand.toLowerCase() === "jawa";
  const isYezdi = brand.toLowerCase() === "yezdi";
  const isAprilia = brand.toLowerCase() === "aprilia";
  const isVespa = brand.toLowerCase() === "vespa";
  const isKawasaki = brand.toLowerCase() === "kawasaki";
  const hondaFamily = isHonda ? findHondaFamilyBySlug(model) : undefined;
  const heroFamily = isHero ? findHeroFamilyBySlug(model) : undefined;
  const bajajFamily = isBajaj ? findBajajFamilyBySlug(model) : undefined;
  const royalEnfieldFamily = isRoyalEnfield ? findRoyalEnfieldFamilyBySlug(model) : undefined;
  const yamahaFamily = isYamaha ? findYamahaFamilyBySlug(model) : undefined;
  const ktmFamily = isKtm ? findKtmFamilyBySlug(model) : undefined;
  const suzukiFamily = isSuzuki ? findSuzukiFamilyBySlug(model) : undefined;
  const olaFamily = isOla ? findOlaFamilyBySlug(model) : undefined;
  const atherFamily = isAther ? findAtherFamilyBySlug(model) : undefined;
  const jawaFamily = isJawa ? findJawaFamilyBySlug(model) : undefined;
  const yezdiFamily = isYezdi ? findYezdiFamilyBySlug(model) : undefined;
  const apriliaFamily = isAprilia ? findApriliaFamilyBySlug(model) : undefined;
  const vespaFamily = isVespa ? findVespaFamilyBySlug(model) : undefined;
  const kawasakiFamily = isKawasaki ? findKawasakiFamilyBySlug(model) : undefined;
  const modelFamily = hondaFamily || heroFamily || bajajFamily || royalEnfieldFamily || yamahaFamily || ktmFamily || suzukiFamily || olaFamily || atherFamily || jawaFamily || yezdiFamily || apriliaFamily || vespaFamily || kawasakiFamily;
  const modelInfo = modelFamily
    ? {
        brandId: isHonda ? "honda" : isHero ? "hero" : isBajaj ? "bajaj" : isRoyalEnfield ? "royal-enfield" : isYamaha ? "yamaha" : isKtm ? "ktm" : isSuzuki ? "suzuki" : isOla ? "ola-electric" : isAther ? "ather" : isJawa ? "jawa" : isYezdi ? "yezdi" : isAprilia ? "aprilia" : isVespa ? "vespa" : "kawasaki",
        brandName: isHonda ? "Honda" : isHero ? "Hero" : isBajaj ? "Bajaj" : isRoyalEnfield ? "Royal Enfield" : isYamaha ? "Yamaha" : isKtm ? "KTM" : isSuzuki ? "Suzuki" : isOla ? "Ola Electric" : isAther ? "Ather" : isJawa ? "Jawa" : isYezdi ? "Yezdi" : isAprilia ? "Aprilia" : isVespa ? "Vespa" : "Kawasaki",
        modelId: modelFamily.slug,
        modelName: modelFamily.name,
        category: modelFamily.groups.every((group) => group.category === "EV")
          ? "Electric Motorbike" as const
          : "Non-Electric Motorbike" as const,
      }
    : undefined;

  if (!modelInfo) {
    return {
      title: "Bike Service & Repair at Home | FixWheel",
      description: "Book doorstep bike service and repair across Delhi.",
    };
  }

  const { brandName, modelName } = modelInfo;
  const familyModels = modelFamily?.groups.flatMap((group) => group.models) || [];
  const title = `${brandName} ${modelName} Service Near Me | Doorstep Repair Delhi | FixWheel`;
  const description = modelFamily
    ? `Book doorstep service for the ${brandName} ${modelName} family, including ${familyModels.slice(0, 4).join(", ")}${familyModels.length > 4 ? ", and more" : ""}. Available across Gurgaon, Delhi, Noida, Ghaziabad, and Faridabad.`
    : `Searching for ${brandName} ${modelName} service near me? Book doorstep ${modelName} repair & tune-up in Gurgaon, Delhi, Noida, Ghaziabad & Faridabad. 100% genuine OEM parts, services from ₹399, 45-min arrival, and 15-day warranty.`;
  const canonicalUrl = `https://www.fixwheel.app/${slugifyModel(brandName)}/${slugifyModel(modelName)}`;

  const gurgaonLocalities = [
    "dlf phase 1",
    "dlf phase 2",
    "dlf phase 3",
    "dlf phase 4",
    "dlf phase 5",
    "cyber city",
    "golf course road",
    "sohna road",
    "palam vihar",
    "udyog vihar",
    "sector 14",
    "sector 15",
    "sector 56",
    "sector 57",
    "badshahpur",
    "manesar",
  ];

  const keywords = [
    `${brandName.toLowerCase()} ${modelName.toLowerCase()} service near me`,
    `doorstep ${modelName.toLowerCase()} repair gurgaon`,
    `${brandName.toLowerCase()} ${modelName.toLowerCase()} mechanic home service gurgaon`,
    `${modelName.toLowerCase()} bike service delhi`,
    `${brandName.toLowerCase()} ${modelName.toLowerCase()} periodic maintenance gurgaon`,
    `${modelName.toLowerCase()} doorstep oil change gurgaon`,
    `${modelName.toLowerCase()} brake repair at home gurgaon`,
    `${modelName.toLowerCase()} service dlf phase 1`,
    `${modelName.toLowerCase()} repair cyber city gurgaon`,
    `${modelName.toLowerCase()} oil change sohna road`,
    `${modelName.toLowerCase()} mechanic golf course road gurgaon`,
    `${modelName.toLowerCase()} service palam vihar`,
    `${modelName.toLowerCase()} repair sector 56 gurgaon`,
    `${modelName.toLowerCase()} doorstep service badshahpur`,
    `${modelName.toLowerCase()} mechanic manesar gurgaon`,
    ...gurgaonLocalities.map((loc) => `${modelName.toLowerCase()} service in ${loc} gurgaon`),
    ...gurgaonLocalities.map((loc) => `${brandName.toLowerCase()} ${modelName.toLowerCase()} repair ${loc}`),
    ...familyModels.map((familyModel) => `${brandName.toLowerCase()} ${familyModel.toLowerCase()} service near me`),
  ].join(", ");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "FixWheel",
      type: "website",
    },
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { brand, model } = await params;
  const catalogModel = findModelBySlugs(brand, model);

  const isHonda = brand.toLowerCase() === "honda";
  const isHero = brand.toLowerCase() === "hero";
  const isBajaj = brand.toLowerCase() === "bajaj";
  const isRoyalEnfield = brand.toLowerCase() === "royal-enfield";
  const isYamaha = brand.toLowerCase() === "yamaha";
  const isKtm = brand.toLowerCase() === "ktm";
  const isSuzuki = brand.toLowerCase() === "suzuki";
  const isOla = brand.toLowerCase() === "ola-electric";
  const isAther = brand.toLowerCase() === "ather";
  const isJawa = brand.toLowerCase() === "jawa";
  const isYezdi = brand.toLowerCase() === "yezdi";
  const isAprilia = brand.toLowerCase() === "aprilia";
  const isVespa = brand.toLowerCase() === "vespa";
  const isKawasaki = brand.toLowerCase() === "kawasaki";
  const isHarleyDavidson = brand.toLowerCase() === "harley-davidson";
  const isBmw = brand.toLowerCase() === "bmw" || brand.toLowerCase() === "bmw-motorrad";
  const hondaFamily = isHonda ? findHondaFamilyByAnySlug(model) : undefined;
  if (hondaFamily && model.toLowerCase() !== hondaFamily.slug) {
    permanentRedirect(`/honda/${hondaFamily.slug}`);
  }
  const heroFamily = isHero ? findHeroFamilyByAnySlug(model) : undefined;
  if (heroFamily && model.toLowerCase() !== heroFamily.slug) {
    permanentRedirect(`/hero/${heroFamily.slug}`);
  }
  const bajajFamily = isBajaj ? findBajajFamilyByAnySlug(model) : undefined;
  if (bajajFamily && model.toLowerCase() !== bajajFamily.slug) {
    permanentRedirect(`/bajaj/${bajajFamily.slug}`);
  }
  const royalEnfieldFamily = isRoyalEnfield ? findRoyalEnfieldFamilyByAnySlug(model) : undefined;
  if (royalEnfieldFamily && model.toLowerCase() !== royalEnfieldFamily.slug) {
    permanentRedirect(`/royal-enfield/${royalEnfieldFamily.slug}`);
  }
  const yamahaFamily = isYamaha ? findYamahaFamilyByAnySlug(model) : undefined;
  if (yamahaFamily && model.toLowerCase() !== yamahaFamily.slug) {
    permanentRedirect(`/yamaha/${yamahaFamily.slug}`);
  }
  const ktmFamily = isKtm ? findKtmFamilyByAnySlug(model) : undefined;
  if (ktmFamily && model.toLowerCase() !== ktmFamily.slug) {
    permanentRedirect(`/ktm/${ktmFamily.slug}`);
  }
  const suzukiFamily = isSuzuki ? findSuzukiFamilyByAnySlug(model) : undefined;
  if (suzukiFamily && model.toLowerCase() !== suzukiFamily.slug) {
    permanentRedirect(`/suzuki/${suzukiFamily.slug}`);
  }
  const olaFamily = isOla ? findOlaFamilyByAnySlug(model) : undefined;
  if (olaFamily && model.toLowerCase() !== olaFamily.slug) {
    permanentRedirect(`/ola-electric/${olaFamily.slug}`);
  }
  const atherFamily = isAther ? findAtherFamilyByAnySlug(model) : undefined;
  if (atherFamily && model.toLowerCase() !== atherFamily.slug) {
    permanentRedirect(`/ather/${atherFamily.slug}`);
  }
  const jawaFamily = isJawa ? findJawaFamilyByAnySlug(model) : undefined;
  if (jawaFamily && model.toLowerCase() !== jawaFamily.slug) {
    permanentRedirect(`/jawa/${jawaFamily.slug}`);
  }
  const yezdiFamily = isYezdi ? findYezdiFamilyByAnySlug(model) : undefined;
  if (yezdiFamily && model.toLowerCase() !== yezdiFamily.slug) {
    permanentRedirect(`/yezdi/${yezdiFamily.slug}`);
  }
  const apriliaFamily = isAprilia ? findApriliaFamilyByAnySlug(model) : undefined;
  if (apriliaFamily && model.toLowerCase() !== apriliaFamily.slug) {
    permanentRedirect(`/aprilia/${apriliaFamily.slug}`);
  }
  const vespaFamily = isVespa ? findVespaFamilyByAnySlug(model) : undefined;
  if (vespaFamily && model.toLowerCase() !== vespaFamily.slug) {
    permanentRedirect(`/vespa/${vespaFamily.slug}`);
  }
  const kawasakiFamily = isKawasaki ? findKawasakiFamilyByAnySlug(model) : undefined;
  if (kawasakiFamily && model.toLowerCase() !== kawasakiFamily.slug) {
    permanentRedirect(`/kawasaki/${kawasakiFamily.slug}`);
  }
  if (catalogModel && (isHarleyDavidson || isKawasaki || isBmw)) {
    permanentRedirect(`/book#${isBmw ? "bmw" : brand.toLowerCase()}`);
  }

  const canonicalHondaFamily = isHonda ? findHondaFamilyBySlug(model) : undefined;
  const canonicalHeroFamily = isHero ? findHeroFamilyBySlug(model) : undefined;
  const canonicalBajajFamily = isBajaj ? findBajajFamilyBySlug(model) : undefined;
  const canonicalRoyalEnfieldFamily = isRoyalEnfield ? findRoyalEnfieldFamilyBySlug(model) : undefined;
  const canonicalYamahaFamily = isYamaha ? findYamahaFamilyBySlug(model) : undefined;
  const canonicalKtmFamily = isKtm ? findKtmFamilyBySlug(model) : undefined;
  const canonicalSuzukiFamily = isSuzuki ? findSuzukiFamilyBySlug(model) : undefined;
  const canonicalOlaFamily = isOla ? findOlaFamilyBySlug(model) : undefined;
  const canonicalAtherFamily = isAther ? findAtherFamilyBySlug(model) : undefined;
  const canonicalJawaFamily = isJawa ? findJawaFamilyBySlug(model) : undefined;
  const canonicalYezdiFamily = isYezdi ? findYezdiFamilyBySlug(model) : undefined;
  const canonicalApriliaFamily = isAprilia ? findApriliaFamilyBySlug(model) : undefined;
  const canonicalVespaFamily = isVespa ? findVespaFamilyBySlug(model) : undefined;
  const canonicalKawasakiFamily = isKawasaki ? findKawasakiFamilyBySlug(model) : undefined;
  const canonicalFamily = canonicalHondaFamily || canonicalHeroFamily || canonicalBajajFamily || canonicalRoyalEnfieldFamily || canonicalYamahaFamily || canonicalKtmFamily || canonicalSuzukiFamily || canonicalOlaFamily || canonicalAtherFamily || canonicalJawaFamily || canonicalYezdiFamily || canonicalApriliaFamily || canonicalVespaFamily || canonicalKawasakiFamily;
  const modelInfo = canonicalFamily
    ? {
        brandId: isHonda ? "honda" : isHero ? "hero" : isBajaj ? "bajaj" : isRoyalEnfield ? "royal-enfield" : isYamaha ? "yamaha" : isKtm ? "ktm" : isSuzuki ? "suzuki" : isOla ? "ola-electric" : isAther ? "ather" : isJawa ? "jawa" : isYezdi ? "yezdi" : isAprilia ? "aprilia" : isVespa ? "vespa" : "kawasaki",
        brandName: isHonda ? "Honda" : isHero ? "Hero" : isBajaj ? "Bajaj" : isRoyalEnfield ? "Royal Enfield" : isYamaha ? "Yamaha" : isKtm ? "KTM" : isSuzuki ? "Suzuki" : isOla ? "Ola Electric" : isAther ? "Ather" : isJawa ? "Jawa" : isYezdi ? "Yezdi" : isAprilia ? "Aprilia" : isVespa ? "Vespa" : "Kawasaki",
        modelId: canonicalFamily.slug,
        modelName: canonicalFamily.name,
        category: canonicalFamily.groups.every((group) => group.category === "EV")
          ? "Electric Motorbike" as const
          : "Non-Electric Motorbike" as const,
      }
    : undefined;

  if (!modelInfo) {
    notFound();
  }

  return <ModelDetailClient modelInfo={modelInfo} familyInfo={canonicalFamily} />;
}
