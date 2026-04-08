export interface BikeModel {
  id: string;
  name: string;
}

export interface BikeBrand {
  id: string;
  name: string;
  models: BikeModel[];
}

export const BIKE_DATA = {
  "Electric Motorbike": [
    {
      id: "ather",
      name: "Ather",
      models: [
        { id: "450x", name: "450X" },
        { id: "450s", name: "450S" },
        { id: "450_apex", name: "450 Apex" },
        { id: "rizta", name: "Rizta" }
      ]
    },
    {
      id: "ola",
      name: "Ola Electric",
      models: [
        { id: "s1pro", name: "S1 Pro" },
        { id: "s1air", name: "S1 Air" },
        { id: "s1x", name: "S1 X" },
        { id: "s1x_plus", name: "S1 X+" }
      ]
    },
    {
      id: "tvs_ev",
      name: "TVS (EV)",
      models: [
        { id: "iqube", name: "iQube" },
        { id: "iqube_s", name: "iQube S" },
        { id: "iqube_st", name: "iQube ST" },
        { id: "x", name: "X" }
      ]
    },
    {
      id: "bajaj_ev",
      name: "Bajaj (EV)",
      models: [
        { id: "chetak", name: "Chetak" },
        { id: "chetak_premium", name: "Chetak Premium" },
        { id: "chetak_urbane", name: "Chetak Urbane" }
      ]
    },
    {
      id: "vida",
      name: "Vida (Hero)",
      models: [
        { id: "v1_pro", name: "V1 Pro" },
        { id: "v1_plus", name: "V1 Plus" }
      ]
    },
    {
      id: "revolt",
      name: "Revolt",
      models: [
        { id: "rv400", name: "RV400" },
        { id: "rv400brz", name: "RV400 BRZ" },
        { id: "rv300", name: "RV300" }
      ]
    },
    {
      id: "simple_energy",
      name: "Simple Energy",
      models: [
        { id: "simple_one", name: "Simple One" },
        { id: "simple_dot_one", name: "Simple Dot One" }
      ]
    },
    {
      id: "ampere",
      name: "Ampere",
      models: [
        { id: "magnus_ex", name: "Magnus EX" },
        { id: "zeal_ex", name: "Zeal EX" },
        { id: "primus", name: "Primus" },
        { id: "nexus", name: "Nexus" }
      ]
    },
    {
      id: "pure_ev",
      name: "Pure EV",
      models: [
        { id: "epluto_7g", name: "EPluto 7G" },
        { id: "etrance_neo", name: "ETrance Neo" },
        { id: "ecodryft", name: "ecoDryft" },
        { id: "etryst_350", name: "eTryst 350" }
      ]
    },
    {
      id: "okinawa",
      name: "Okinawa",
      models: [
        { id: "praise_pro", name: "Praise Pro" },
        { id: "ipraise", name: "iPraise+" },
        { id: "ridge_plus", name: "Ridge+" },
        { id: "okhi_90", name: "Okhi-90" }
      ]
    },
    {
      id: "ultraviolette",
      name: "Ultraviolette",
      models: [
        { id: "f77", name: "F77 Mach 2" },
        { id: "f99", name: "F99" }
      ]
    },
    {
      id: "bounce",
      name: "Bounce",
      models: [
        { id: "infinity_e1", name: "Infinity E1" }
      ]
    },
    {
      id: "joy_ebike",
      name: "Joy E-Bike",
      models: [
        { id: "mihos", name: "Mihos" },
        { id: "wolf", name: "Wolf" },
        { id: "glob", name: "Glob" },
        { id: "monster", name: "Monster" }
      ]
    },
    {
      id: "tork",
      name: "Tork Motors",
      models: [
        { id: "kratos", name: "Kratos R" }
      ]
    },
    {
      id: "other_ev",
      name: "Other Brand",
      models: [{ id: "other_ev_model", name: "Other Model" }]
    }
  ],
  "Non-Electric Motorbike": [
    {
      id: "royal_enfield",
      name: "Royal Enfield",
      models: [
        { id: "classic350", name: "Classic 350" },
        { id: "bullet350", name: "Bullet 350" },
        { id: "hunter350", name: "Hunter 350" },
        { id: "meteor350", name: "Meteor 350" },
        { id: "himalayan450", name: "Himalayan 450" },
        { id: "himalayan411", name: "Himalayan 411" },
        { id: "scram411", name: "Scram 411" },
        { id: "interceptor650", name: "Interceptor 650" },
        { id: "gt650", name: "Continental GT 650" },
        { id: "super_meteor", name: "Super Meteor 650" },
        { id: "shotgun650", name: "Shotgun 650" }
      ]
    },
    {
      id: "bajaj",
      name: "Bajaj",
      models: [
        { id: "pulsar125", name: "Pulsar 125" },
        { id: "pulsar150", name: "Pulsar 150" },
        { id: "pulsarn150", name: "Pulsar N150" },
        { id: "pulsarn160", name: "Pulsar N160" },
        { id: "pulsarn250", name: "Pulsar N250" },
        { id: "pulsarns125", name: "Pulsar NS125" },
        { id: "pulsarns160", name: "Pulsar NS160" },
        { id: "pulsarns200", name: "Pulsar NS200" },
        { id: "pulsarns400z", name: "Pulsar NS400Z" },
        { id: "pulsarrs200", name: "Pulsar RS200" },
        { id: "pulsar220f", name: "Pulsar 220F" },
        { id: "dominar400", name: "Dominar 400" },
        { id: "dominar250", name: "Dominar 250" },
        { id: "avenger160", name: "Avenger Street 160" },
        { id: "avenger220", name: "Avenger Cruise 220" },
        { id: "platina100", name: "Platina 100" },
        { id: "platina110", name: "Platina 110" },
        { id: "ct110", name: "CT 110X" },
        { id: "ct125", name: "CT 125X" }
      ]
    },
    {
      id: "honda",
      name: "Honda",
      models: [
        { id: "activa6g", name: "Activa 6G" },
        { id: "activa125", name: "Activa 125" },
        { id: "dio", name: "Dio" },
        { id: "dio125", name: "Dio 125" },
        { id: "shine", name: "Shine 125" },
        { id: "shine100", name: "Shine 100" },
        { id: "sp125", name: "SP 125" },
        { id: "sp160", name: "SP 160" },
        { id: "unicorn", name: "Unicorn" },
        { id: "hness_cb350", name: "H'ness CB350" },
        { id: "cb350rs", name: "CB350RS" },
        { id: "cb300f", name: "CB300F" },
        { id: "cb300r", name: "CB300R" },
        { id: "hornet", name: "Hornet 2.0" },
        { id: "xblade", name: "XBlade" },
        { id: "cb200x", name: "CB200X" },
        { id: "nx500", name: "NX500" },
        { id: "transalp", name: "XL750 Transalp" },
        { id: "africa_twin", name: "Africa Twin" },
        { id: "cbr1000rr", name: "CBR1000RR-R" }
      ]
    },
    {
      id: "tvs",
      name: "TVS",
      models: [
        { id: "jupiter", name: "Jupiter" },
        { id: "jupiter125", name: "Jupiter 125" },
        { id: "ntorq", name: "NTORQ 125" },
        { id: "raider", name: "Raider 125" },
        { id: "apache160_2v", name: "Apache RTR 160 2V" },
        { id: "apache160_4v", name: "Apache RTR 160 4V" },
        { id: "apache180", name: "Apache RTR 180" },
        { id: "apache200", name: "Apache RTR 200 4V" },
        { id: "apache310", name: "Apache RR 310" },
        { id: "apache_rtr310", name: "Apache RTR 310" },
        { id: "ronin", name: "Ronin" },
        { id: "sport", name: "Sport" },
        { id: "star_city", name: "Star City Plus" },
        { id: "radeon", name: "Radeon" },
        { id: "xl100", name: "XL100" }
      ]
    },
    {
      id: "hero",
      name: "Hero",
      models: [
        { id: "splendor_plus", name: "Splendor Plus" },
        { id: "splendor_xtec", name: "Splendor+ XTEC" },
        { id: "super_splendor", name: "Super Splendor" },
        { id: "hfdlx", name: "HF Deluxe" },
        { id: "passion_plus", name: "Passion Plus" },
        { id: "passion_xtec", name: "Passion XTEC" },
        { id: "glamour", name: "Glamour" },
        { id: "xtreme125r", name: "Xtreme 125R" },
        { id: "xtreme160r", name: "Xtreme 160R" },
        { id: "xtreme200s", name: "Xtreme 200S 4V" },
        { id: "xpulse200", name: "XPulse 200 4V" },
        { id: "karizma_xmr", name: "Karizma XMR" },
        { id: "maverick", name: "Mavrick 440" },
        { id: "destini", name: "Destini 125" },
        { id: "pleasure", name: "Pleasure Plus" },
        { id: "xtoom", name: "Xoom" }
      ]
    },
    {
      id: "yamaha",
      name: "Yamaha",
      models: [
        { id: "mt15", name: "MT-15 V2" },
        { id: "r15", name: "R15 V4" },
        { id: "r15m", name: "R15M" },
        { id: "r15s", name: "R15S" },
        { id: "r3", name: "R3" },
        { id: "mt03", name: "MT-03" },
        { id: "fz_fi", name: "FZ-FI V3" },
        { id: "fzs_fi", name: "FZ-S FI V3 / V4" },
        { id: "fzx", name: "FZ-X" },
        { id: "aerox", name: "Aerox 155" },
        { id: "fascino", name: "Fascino 125 Fi Hybrid" },
        { id: "rayzr", name: "RayZR 125 Fi Hybrid" }
      ]
    },
    {
      id: "suzuki",
      name: "Suzuki",
      models: [
        { id: "access", name: "Access 125" },
        { id: "burgman", name: "Burgman Street" },
        { id: "burgman_ex", name: "Burgman Street EX" },
        { id: "avenis", name: "Avenis" },
        { id: "gixxer", name: "Gixxer" },
        { id: "gixxer_sf", name: "Gixxer SF" },
        { id: "gixxer250", name: "Gixxer 250" },
        { id: "gixxer_sf250", name: "Gixxer SF 250" },
        { id: "vstrom_sx", name: "V-Strom SX" },
        { id: "vstrom650", name: "V-Strom 650XT" },
        { id: "katana", name: "Katana" },
        { id: "hayabusa", name: "Hayabusa" }
      ]
    },
    {
      id: "ktm",
      name: "KTM",
      models: [
        { id: "duke125", name: "125 Duke" },
        { id: "duke200", name: "200 Duke" },
        { id: "duke250", name: "250 Duke" },
        { id: "duke390", name: "390 Duke" },
        { id: "rc125", name: "RC 125" },
        { id: "rc200", name: "RC 200" },
        { id: "rc390", name: "RC 390" },
        { id: "adv250", name: "250 Adventure" },
        { id: "adv390", name: "390 Adventure" },
        { id: "adv390x", name: "390 Adventure X" }
      ]
    },
    {
      id: "husqvarna",
      name: "Husqvarna",
      models: [
        { id: "svartpilen250", name: "Svartpilen 250" },
        { id: "vitpilen250", name: "Vitpilen 250" },
        { id: "svartpilen401", name: "Svartpilen 401" }
      ]
    },
    {
      id: "triumph",
      name: "Triumph",
      models: [
        { id: "speed400", name: "Speed 400" },
        { id: "scrambler400x", name: "Scrambler 400 X" },
        { id: "trident660", name: "Trident 660" },
        { id: "tiger_sport660", name: "Tiger Sport 660" },
        { id: "streettriple", name: "Street Triple RS/R" },
        { id: "speedtwin", name: "Speed Twin 900/1200" },
        { id: "bonneville", name: "Bonneville T100/T120" },
        { id: "rocket3", name: "Rocket 3" },
        { id: "tiger900", name: "Tiger 900" },
        { id: "tiger1200", name: "Tiger 1200" }
      ]
    },
    {
      id: "kawasaki",
      name: "Kawasaki",
      models: [
        { id: "ninja300", name: "Ninja 300" },
        { id: "ninja400", name: "Ninja 400" },
        { id: "ninja500", name: "Ninja 500" },
        { id: "ninja650", name: "Ninja 650" },
        { id: "zx10r", name: "Ninja ZX-10R" },
        { id: "z900", name: "Z900" },
        { id: "versys650", name: "Versys 650" },
        { id: "vulcans", name: "Vulcan S" },
        { id: "w175", name: "W175" }
      ]
    },
    {
      id: "jawa",
      name: "Jawa",
      models: [
        { id: "jawa350", name: "Jawa 350" },
        { id: "jawa42", name: "Jawa 42" },
        { id: "jawa42bobber", name: "Jawa 42 Bobber" },
        { id: "perak", name: "Perak" }
      ]
    },
    {
      id: "yezdi",
      name: "Yezdi",
      models: [
        { id: "roadster", name: "Roadster" },
        { id: "scrambler", name: "Scrambler" },
        { id: "adventure", name: "Adventure" }
      ]
    },
    {
      id: "ducati",
      name: "Ducati",
      models: [
        { id: "panigale_v4", name: "Panigale V4" },
        { id: "panigale_v2", name: "Panigale V2" },
        { id: "monster", name: "Monster" },
        { id: "multistrada_v4", name: "Multistrada V4" },
        { id: "diavel_v4", name: "Diavel V4" },
        { id: "scrambler", name: "Scrambler 800" },
        { id: "streetfighter_v4", name: "Streetfighter V4" }
      ]
    },
    {
      id: "bmw",
      name: "BMW Motorrad",
      models: [
        { id: "g310r", name: "G 310 R" },
        { id: "g310gs", name: "G 310 GS" },
        { id: "g310rr", name: "G 310 RR" },
        { id: "f900r", name: "F 900 R" },
        { id: "s1000rr", name: "S 1000 RR" },
        { id: "r1250gs", name: "R 1250 GS" },
        { id: "r1300gs", name: "R 1300 GS" }
      ]
    },
    {
      id: "harley",
      name: "Harley-Davidson",
      models: [
        { id: "x440", name: "X440" },
        { id: "nightster", name: "Nightster" },
        { id: "sportster_s", name: "Sportster S" },
        { id: "fat_boy", name: "Fat Boy 114" },
        { id: "pan_america", name: "Pan America 1250" }
      ]
    },
    {
      id: "aprillia",
      name: "Aprilia",
      models: [
        { id: "sr160", name: "SR 160" },
        { id: "sr125", name: "SR 125" },
        { id: "sxr160", name: "SXR 160" },
        { id: "sxr125", name: "SXR 125" },
        { id: "rs457", name: "RS 457" }
      ]
    },
    {
      id: "vespa",
      name: "Vespa",
      models: [
        { id: "vxl125", name: "VXL 125" },
        { id: "vxl150", name: "VXL 150" },
        { id: "sxl125", name: "SXL 125" },
        { id: "sxl150", name: "SXL 150" },
        { id: "zx125", name: "ZX 125" }
      ]
    },
    {
      id: "other_ice",
      name: "Other Brand",
      models: [{ id: "other_ice_model", name: "Other Model" }]
    }
  ],
  "Scooter": [
    {
      id: "all_scooters",
      name: "Scooters",
      models: [
        { id: "scooter_ev", name: "Electric Scooter" },
        { id: "scooter_ice", name: "Petrol Scooter" },
        { id: "other_scooter", name: "Other Model" }
      ]
    }
  ]
};
