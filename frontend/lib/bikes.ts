export interface BikeModel {
  id: string;
  name: string;
}

export interface BikeBrand {
  id: string;
  name: string;
  models: BikeModel[];
}

export const BIKE_DATA: Record<string, BikeBrand[]> = {
  "Electric Motorbike": [
    {
      id: "ola",
      name: "Ola Electric",
      models: [
        { id: "s1x_2", name: "S1 X (2 kWh)" },
        { id: "s1x_3", name: "S1 X (3 kWh)" },
        { id: "s1air", name: "S1 Air" },
        { id: "s1pro", name: "S1 Pro Gen 2" },
        { id: "s1x_4", name: "S1 X (4 kWh)" },
        { id: "s1x_plus", name: "S1 X+" },
        { id: "roadster_x", name: "Roadster X" },
        { id: "roadster", name: "Roadster" },
        { id: "roadster_pro", name: "Roadster Pro" }
      ]
    },
    {
      id: "ather",
      name: "Ather",
      models: [
        { id: "rizta_s", name: "Rizta S" },
        { id: "rizta_z", name: "Rizta Z" },
        { id: "450s", name: "450S" },
        { id: "450x_2_9", name: "450X (2.9 kWh)" },
        { id: "450x_3_7", name: "450X (3.7 kWh)" },
        { id: "450_apex", name: "450 Apex" }
      ]
    },
    {
      id: "tvs_ev",
      name: "TVS (EV)",
      models: [
        { id: "iqube_2_2", name: "iQube (2.2 kWh)" },
        { id: "iqube_s", name: "iQube S" },
        { id: "iqube_3_4", name: "iQube (3.4 kWh)" },
        { id: "iqube_st_3_4", name: "iQube ST (3.4 kWh)" },
        { id: "iqube_st_5_1", name: "iQube ST (5.1 kWh)" },
        { id: "tvs_x", name: "TVS X" }
      ]
    },
    {
      id: "bajaj_ev",
      name: "Bajaj (EV)",
      models: [
        { id: "chetak_urbane", name: "Chetak Urbane" },
        { id: "chetak_premium", name: "Chetak Premium" },
        { id: "chetak_2901", name: "Chetak 2901" },
        { id: "chetak_3201", name: "Chetak 3201 Special Edition" }
      ]
    },
    {
      id: "vida",
      name: "Vida (Hero)",
      models: [
        { id: "v1_plus", name: "V1 Plus" },
        { id: "v1_pro", name: "V1 Pro" },
        { id: "v1_coupe", name: "V1 Coupe" }
      ]
    },
    {
      id: "revolt",
      name: "Revolt",
      models: [
        { id: "rv400", name: "RV400" },
        { id: "rv400brz", name: "RV400 BRZ" },
        { id: "rv1_plus", name: "RV1+" },
        { id: "rv1", name: "RV1" },
        { id: "rv300", name: "RV300" }
      ]
    },
    {
      id: "okinawa",
      name: "Okinawa",
      models: [
        { id: "okhi_90", name: "Okhi-90" },
        { id: "praise_pro", name: "Praise Pro" },
        { id: "ipraise", name: "iPraise+" },
        { id: "ridge_plus", name: "Ridge+" },
        { id: "dual_100", name: "Dual 100" },
        { id: "lite", name: "Lite" },
        { id: "r30", name: "R30" }
      ]
    },
    {
      id: "ampere",
      name: "Ampere",
      models: [
        { id: "nexus", name: "Nexus" },
        { id: "magnus_ex", name: "Magnus EX" },
        { id: "zeal_ex", name: "Zeal EX" },
        { id: "primus", name: "Primus" },
        { id: "reo_plus", name: "Reo Plus" },
        { id: "reo_li", name: "Reo Li" }
      ]
    },
    {
      id: "hero_electric",
      name: "Hero Electric",
      models: [
        { id: "optima_cx", name: "Optima CX 5.0" },
        { id: "nyx_cx", name: "Nyx CX 5.0" },
        { id: "atria", name: "Atria LX" },
        { id: "flash", name: "Flash LX" },
        { id: "eddy", name: "Eddy" },
        { id: "photon", name: "Photon HX" }
      ]
    },
    {
      id: "pure_ev",
      name: "Pure EV",
      models: [
        { id: "epluto_7g", name: "EPluto 7G" },
        { id: "epluto_7g_pro", name: "EPluto 7G MAX" },
        { id: "etrance_neo", name: "ETrance Neo" },
        { id: "ecodryft", name: "ecoDryft" },
        { id: "etryst_350", name: "eTryst 350" }
      ]
    },
    {
      id: "ultraviolette",
      name: "Ultraviolette",
      models: [
        { id: "f77_mach2", name: "F77 Mach 2" },
        { id: "f77_recon", name: "F77 Recon" },
        { id: "f99", name: "F99 Factory Racing" }
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
      id: "matter",
      name: "Matter",
      models: [
        { id: "aera_5000", name: "AERA 5000" },
        { id: "aera_5000_plus", name: "AERA 5000+" }
      ]
    },
    {
      id: "tork",
      name: "Tork Motors",
      models: [
        { id: "kratos_r", name: "Kratos R" },
        { id: "kratos_urban", name: "Kratos Urban" }
      ]
    },
    {
      id: "bounce",
      name: "Bounce",
      models: [
        { id: "infinity_e1", name: "Infinity E1" },
        { id: "infinity_e1_plus", name: "Infinity E1+" }
      ]
    },
    {
      id: "joy_ebike",
      name: "Joy E-Bike",
      models: [
        { id: "mihos", name: "Mihos" },
        { id: "wolf", name: "Wolf" },
        { id: "glob", name: "Glob" },
        { id: "monster", name: "Monster" },
        { id: "beast", name: "Beast" },
        { id: "hurricane", name: "Hurricane" }
      ]
    },
    {
      id: "other_ev",
      name: "Other Brand (EV)",
      models: [{ id: "other_ev_model", name: "Other Model" }]
    }
  ],
  "Non-Electric Motorbike": [
    {
      id: "hero",
      name: "Hero",
      models: [
        // Most sold bikes in India — Splendor family leads
        { id: "splendor_plus", name: "Splendor Plus" },
        { id: "splendor_xtec", name: "Splendor+ XTEC" },
        { id: "hfdlx", name: "HF Deluxe" },
        { id: "hf100", name: "HF 100" },
        { id: "passion_pro", name: "Passion Pro" },
        { id: "passion_xtec", name: "Passion XTEC" },
        { id: "passion_plus", name: "Passion Plus" },
        { id: "splendor_pro", name: "Splendor Pro / iSmart" },
        { id: "super_splendor", name: "Super Splendor" },
        { id: "super_splendor_xtec", name: "Super Splendor XTEC" },
        { id: "glamour", name: "Glamour" },
        { id: "glamour_xtec", name: "Glamour XTEC" },
        { id: "xtreme160r", name: "Xtreme 160R / 4V" },
        { id: "xtreme125r", name: "Xtreme 125R" },
        { id: "xtreme200s", name: "Xtreme 200S 4V" },
        { id: "xtreme200r", name: "Xtreme 200R" },
        { id: "xpulse200", name: "XPulse 200 4V / 200T" },
        { id: "destini", name: "Destini 125" },
        { id: "maestro", name: "Maestro Edge 110 / 125" },
        { id: "pleasure", name: "Pleasure Plus" },
        { id: "xtoom", name: "Xoom 110" },
        { id: "maverick", name: "Mavrick 440" },
        { id: "karizma_xmr", name: "Karizma XMR" },
        { id: "karizma_zmr", name: "Karizma ZMR / R" },
        { id: "cd_deluxe", name: "CD Deluxe / CD Dawn" }
      ]
    },
    {
      id: "honda",
      name: "Honda",
      models: [
        // Activa is India's #1 two-wheeler
        { id: "activa6g", name: "Activa 6G" },
        { id: "activa125", name: "Activa 125" },
        { id: "activa5g", name: "Activa 5G" },
        { id: "activa4g", name: "Activa 4G / 3G" },
        { id: "shine", name: "Shine 125" },
        { id: "shine100", name: "Shine 100" },
        { id: "sp125", name: "SP 125" },
        { id: "sp160", name: "SP 160" },
        { id: "dio", name: "Dio" },
        { id: "dio125", name: "Dio 125" },
        { id: "livo", name: "Livo" },
        { id: "unicorn", name: "Unicorn 160" },
        { id: "hornet", name: "Hornet 2.0" },
        { id: "xblade", name: "XBlade" },
        { id: "cd110", name: "CD 110 Dream" },
        { id: "grazia", name: "Grazia 125" },
        { id: "dream_yuga", name: "Dream Yuga" },
        { id: "activapremium", name: "Activa Premium" },
        { id: "navi", name: "Navi" },
        { id: "hetz", name: "Activa i / Hetz" },
        { id: "shinesp", name: "CB Shine SP" },
        { id: "aviator", name: "Aviator" },
        { id: "hness_cb350", name: "H'ness CB350" },
        { id: "cb350rs", name: "CB350RS" },
        { id: "cb350", name: "CB350" },
        { id: "cb200x", name: "CB200X" },
        { id: "unicorn150", name: "CB Unicorn 150" },
        { id: "cb300f", name: "CB300F" },
        { id: "cb300r", name: "CB300R" },
        { id: "cbr150r", name: "CBR 150R" },
        { id: "cbr250r", name: "CBR 250R" },
        { id: "cbr650r", name: "CBR 650R" },
        { id: "nx500", name: "NX500" },
        { id: "transalp", name: "XL750 Transalp" },
        { id: "africa_twin", name: "Africa Twin" },
        { id: "cbr1000rr", name: "CBR1000RR-R Fireblade" },
        { id: "goldwing", name: "Gold Wing Tour" }
      ]
    },
    {
      id: "bajaj",
      name: "Bajaj",
      models: [
        // Pulsar family + commuters by volume
        { id: "pulsar150", name: "Pulsar 150" },
        { id: "pulsarn150", name: "Pulsar N150" },
        { id: "pulsarns160", name: "Pulsar NS160" },
        { id: "pulsar125", name: "Pulsar 125" },
        { id: "pulsarn160", name: "Pulsar N160" },
        { id: "platina110", name: "Platina 110" },
        { id: "platina100", name: "Platina 100" },
        { id: "ct100", name: "CT 100" },
        { id: "ct110", name: "CT 110X" },
        { id: "ct125", name: "CT 125X" },
        { id: "pulsar220f", name: "Pulsar 220F" },
        { id: "pulsarns200", name: "Pulsar NS200" },
        { id: "pulsarn250", name: "Pulsar N250" },
        { id: "pulsarns125", name: "Pulsar NS125" },
        { id: "pulsarns400z", name: "Pulsar NS400Z" },
        { id: "pulsarrs200", name: "Pulsar RS200" },
        { id: "pulsarf250", name: "Pulsar F250" },
        { id: "pulsarp150", name: "Pulsar P150" },
        { id: "pulsar180", name: "Pulsar 180" },
        { id: "pulsar200", name: "Pulsar 200" },
        { id: "pulsarn125", name: "Pulsar N125" },
        { id: "discover125", name: "Discover 125" },
        { id: "discover100", name: "Discover 100" },
        { id: "discover135", name: "Discover 135" },
        { id: "discover150", name: "Discover 150" },
        { id: "freedom125", name: "Freedom 125 (CNG)" },
        { id: "avenger160", name: "Avenger Street 160" },
        { id: "avenger220", name: "Avenger Cruise 220" },
        { id: "avenger220s", name: "Avenger Street 220" },
        { id: "dominar250", name: "Dominar 250" },
        { id: "dominar400", name: "Dominar 400" },
        { id: "v12", name: "V12" },
        { id: "v15", name: "V15" },
        { id: "boxer", name: "Boxer 100 / 150" },
        { id: "caliber", name: "Caliber 115" },
        { id: "chetak_petrol", name: "Chetak (Classic Petrol)" }
      ]
    },
    {
      id: "tvs",
      name: "TVS",
      models: [
        // Jupiter leads TVS scooter segment
        { id: "jupiter125", name: "Jupiter 125" },
        { id: "jupiter", name: "Jupiter 110" },
        { id: "ntorq", name: "NTORQ 125" },
        { id: "raider", name: "Raider 125" },
        { id: "apache160_4v", name: "Apache RTR 160 4V" },
        { id: "apache160_2v", name: "Apache RTR 160 2V" },
        { id: "apache200", name: "Apache RTR 200 4V" },
        { id: "apache180", name: "Apache RTR 180" },
        { id: "apache310", name: "Apache RR 310" },
        { id: "apache_rtr310", name: "Apache RTR 310" },
        { id: "sport", name: "Sport" },
        { id: "star_city", name: "Star City Plus" },
        { id: "radeon", name: "Radeon" },
        { id: "ronin", name: "Ronin 225" },
        { id: "xl100", name: "XL100 Comfort / Heavy Duty" },
        { id: "zest110", name: "Scooty Zest 110" },
        { id: "pepplus", name: "Scooty Pep Plus" },
        { id: "wego", name: "Wego" },
        { id: "scooty_streak", name: "Scooty Streak" },
        { id: "victor", name: "Victor 110 / 125" },
        { id: "fiero", name: "Fiero 150" }
      ]
    },
    {
      id: "royal_enfield",
      name: "Royal Enfield",
      models: [
        // Classic 350 is RE's bestseller
        { id: "classic350", name: "Classic 350" },
        { id: "hunter350", name: "Hunter 350" },
        { id: "bullet350", name: "Bullet 350" },
        { id: "meteor350", name: "Meteor 350" },
        { id: "guerrilla450", name: "Guerrilla 450" },
        { id: "himalayan450", name: "Himalayan 450" },
        { id: "interceptor650", name: "Interceptor 650" },
        { id: "gt650", name: "Continental GT 650" },
        { id: "super_meteor", name: "Super Meteor 650" },
        { id: "bear650", name: "Bear 650" },
        { id: "shotgun650", name: "Shotgun 650" },
        { id: "himalayan411", name: "Himalayan 411" },
        { id: "scram411", name: "Scram 411" },
        { id: "classic500", name: "Classic 500" },
        { id: "bullet500", name: "Bullet 500" },
        { id: "thunderbird350", name: "Thunderbird 350 / 350X" },
        { id: "thunderbird500", name: "Thunderbird 500 / 500X" },
        { id: "electra350", name: "Bullet Electra 350" },
        { id: "machismo", name: "Machismo 350 / 500" }
      ]
    },
    {
      id: "yamaha",
      name: "Yamaha",
      models: [
        // FZ and R15 family lead Yamaha sales
        { id: "fz_fi", name: "FZ-FI V3" },
        { id: "fzs_fi", name: "FZ-S FI V3 / V4" },
        { id: "fzx", name: "FZ-X" },
        { id: "r15", name: "R15 V4" },
        { id: "r15m", name: "R15M" },
        { id: "r15v3", name: "R15 V3" },
        { id: "r15s", name: "R15S" },
        { id: "mt15", name: "MT-15 V2" },
        { id: "fascino", name: "Fascino 125 Fi Hybrid" },
        { id: "rayzr", name: "RayZR 125 Fi Hybrid" },
        { id: "aerox", name: "Aerox 155" },
        { id: "fz25", name: "FZ 25 / FZS 25" },
        { id: "fz16", name: "FZ16 / FZ-S V2" },
        { id: "alpha", name: "Alpha 110" },
        { id: "rayz", name: "Cygnus Ray Z" },
        { id: "saluto", name: "Saluto 125 / RX" },
        { id: "r3", name: "R3" },
        { id: "mt03", name: "MT-03" },
        { id: "rx100", name: "RX 100" },
        { id: "rx135", name: "RX 135" },
        { id: "rd350", name: "RD 350" }
      ]
    },
    {
      id: "suzuki",
      name: "Suzuki",
      models: [
        // Access 125 is Suzuki's top seller
        { id: "access", name: "Access 125" },
        { id: "burgman", name: "Burgman Street" },
        { id: "burgman_ex", name: "Burgman Street EX" },
        { id: "avenis", name: "Avenis 125" },
        { id: "gixxer", name: "Gixxer 150" },
        { id: "gixxer_sf", name: "Gixxer SF 150" },
        { id: "gixxer250", name: "Gixxer 250" },
        { id: "gixxer_sf250", name: "Gixxer SF 250" },
        { id: "vstrom_sx", name: "V-Strom SX 250" },
        { id: "vstrom650", name: "V-Strom 650XT" },
        { id: "slingshot", name: "Slingshot 125" },
        { id: "swish", name: "Swish 125" },
        { id: "lets", name: "Lets 110" },
        { id: "zeus", name: "Zeus 125" },
        { id: "katana", name: "Katana" },
        { id: "hayabusa", name: "Hayabusa 1300" }
      ]
    },
    {
      id: "ktm",
      name: "KTM",
      models: [
        // Duke 200 & 390 are KTM's top volumes in India
        { id: "duke200", name: "200 Duke" },
        { id: "duke390", name: "390 Duke" },
        { id: "duke125", name: "125 Duke" },
        { id: "duke250", name: "250 Duke" },
        { id: "rc200", name: "RC 200" },
        { id: "rc390", name: "RC 390" },
        { id: "rc125", name: "RC 125" },
        { id: "adv390", name: "390 Adventure" },
        { id: "adv390x", name: "390 Adventure X" },
        { id: "adv250", name: "250 Adventure" },
        { id: "duke890", name: "890 Duke R" }
      ]
    },
    {
      id: "triumph",
      name: "Triumph",
      models: [
        { id: "speed400", name: "Speed 400" },
        { id: "scrambler400x", name: "Scrambler 400 X" },
        { id: "speed_t4", name: "Speed T4" },
        { id: "trident660", name: "Trident 660" },
        { id: "tiger_sport660", name: "Tiger Sport 660" },
        { id: "streettriple", name: "Street Triple RS / R" },
        { id: "speedtwin", name: "Speed Twin 900 / 1200" },
        { id: "bonneville", name: "Bonneville T100 / T120" },
        { id: "rocket3", name: "Rocket 3 R / GT" },
        { id: "tiger900", name: "Tiger 900 GT / Rally" },
        { id: "tiger1200", name: "Tiger 1200" }
      ]
    },
    {
      id: "kawasaki",
      name: "Kawasaki",
      models: [
        { id: "ninja400", name: "Ninja 400" },
        { id: "ninja500", name: "Ninja 500" },
        { id: "ninja650", name: "Ninja 650" },
        { id: "z650", name: "Z650" },
        { id: "ninja300", name: "Ninja 300" },
        { id: "versys650", name: "Versys 650" },
        { id: "versys_x300", name: "Versys-X 300" },
        { id: "eliminator450", name: "Eliminator 450" },
        { id: "zx4r", name: "Ninja ZX-4R" },
        { id: "zx6r", name: "Ninja ZX-6R" },
        { id: "zx10r", name: "Ninja ZX-10R" },
        { id: "z900", name: "Z900" },
        { id: "vulcans", name: "Vulcan S" },
        { id: "w175", name: "W175" }
      ]
    },
    {
      id: "husqvarna",
      name: "Husqvarna",
      models: [
        { id: "svartpilen250", name: "Svartpilen 250" },
        { id: "vitpilen250", name: "Vitpilen 250" },
        { id: "svartpilen401", name: "Svartpilen 401" },
        { id: "vitpilen401", name: "Vitpilen 401" }
      ]
    },
    {
      id: "jawa",
      name: "Jawa",
      models: [
        { id: "jawa42", name: "Jawa 42" },
        { id: "jawa350", name: "Jawa 350" },
        { id: "jawa42bobber", name: "Jawa 42 Bobber" },
        { id: "jawa42fj", name: "Jawa 42 FJ" },
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
      id: "harley",
      name: "Harley-Davidson",
      models: [
        { id: "x440", name: "X440" },
        { id: "iron883", name: "Iron 883" },
        { id: "street750", name: "Street 750" },
        { id: "sportster_s", name: "Sportster S" },
        { id: "nightster", name: "Nightster" },
        { id: "fortyeight", name: "Forty-Eight" },
        { id: "streetrod", name: "Street Rod 750" },
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
        { id: "storm125", name: "Storm 125" },
        { id: "rs457", name: "RS 457" },
        { id: "tuono660", name: "Tuono 660" },
        { id: "rs660", name: "RS 660" }
      ]
    },
    {
      id: "vespa",
      name: "Vespa",
      models: [
        { id: "vxl125", name: "VXL 125" },
        { id: "sxl125", name: "SXL 125" },
        { id: "vxl150", name: "VXL 150" },
        { id: "sxl150", name: "SXL 150" },
        { id: "lx125", name: "LX 125" },
        { id: "zx125", name: "ZX 125" },
        { id: "dual125", name: "Dual 125" },
        { id: "dual150", name: "Dual 150" },
        { id: "elegante150", name: "Elegante 150" }
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
        { id: "r1300gs", name: "R 1300 GS" },
        { id: "ce04", name: "CE 04 (Electric)" }
      ]
    },
    {
      id: "ducati",
      name: "Ducati",
      models: [
        { id: "monster", name: "Monster" },
        { id: "scrambler800", name: "Scrambler 800" },
        { id: "panigale_v2", name: "Panigale V2" },
        { id: "panigale_v4", name: "Panigale V4" },
        { id: "multistrada_v4", name: "Multistrada V4" },
        { id: "streetfighter_v4", name: "Streetfighter V4" },
        { id: "diavel_v4", name: "Diavel V4" },
        { id: "desertx", name: "DesertX" }
      ]
    },
    {
      id: "benelli",
      name: "Benelli & Keeway",
      models: [
        { id: "imperiale400", name: "Imperiale 400" },
        { id: "trk502", name: "TRK 502 / 502X" },
        { id: "leoncino500", name: "Leoncino 500" },
        { id: "502c", name: "502C Cruiser" },
        { id: "keeway_sr125", name: "Keeway SR125" },
        { id: "keeway_sr250", name: "Keeway SR250" },
        { id: "keeway_vieste300", name: "Keeway Vieste 300" }
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
