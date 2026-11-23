import type { CCRange } from './constants';

type RangeGroups = Record<CCRange, readonly string[]>;

const MODEL_KEYS_BY_RANGE: RangeGroups = {
  '0-249': [
    'hero:splendor_plus', 'hero:splendor_xtec', 'hero:hfdlx', 'hero:hf100',
    'hero:passion_pro', 'hero:passion_xtec', 'hero:passion_plus', 'hero:splendor_pro',
    'hero:super_splendor', 'hero:super_splendor_xtec', 'hero:glamour', 'hero:glamour_xtec',
    'hero:xtreme160r', 'hero:xtreme125r', 'hero:xtreme200s', 'hero:xtreme200r',
    'hero:xpulse200', 'hero:destini', 'hero:maestro', 'hero:pleasure', 'hero:xtoom',
    'hero:karizma_xmr', 'hero:karizma_zmr', 'hero:cd_deluxe',

    'honda:activa6g', 'honda:activa125', 'honda:activa5g', 'honda:activa4g',
    'honda:shine', 'honda:shine100', 'honda:sp125', 'honda:sp160', 'honda:dio',
    'honda:dio125', 'honda:livo', 'honda:unicorn', 'honda:hornet', 'honda:xblade',
    'honda:cd110', 'honda:grazia', 'honda:dream_yuga', 'honda:activapremium',
    'honda:navi', 'honda:hetz', 'honda:shinesp', 'honda:aviator', 'honda:cb200x',
    'honda:unicorn150', 'honda:cbr150r', 'honda:cbr250r',

    'bajaj:pulsar150', 'bajaj:pulsarn150', 'bajaj:pulsarns160', 'bajaj:pulsar125',
    'bajaj:pulsarn160', 'bajaj:platina110', 'bajaj:platina100', 'bajaj:ct100',
    'bajaj:ct110', 'bajaj:ct125', 'bajaj:pulsar220f', 'bajaj:pulsarns200',
    'bajaj:pulsarn250', 'bajaj:pulsarns125', 'bajaj:pulsarrs200', 'bajaj:pulsarf250',
    'bajaj:pulsarp150',
    'bajaj:pulsar180', 'bajaj:pulsar200', 'bajaj:pulsarn125', 'bajaj:discover125',
    'bajaj:discover100', 'bajaj:discover135', 'bajaj:discover150', 'bajaj:freedom125',
    'bajaj:avenger160', 'bajaj:avenger220', 'bajaj:avenger220s', 'bajaj:dominar250',
    'bajaj:v12',
    'bajaj:v15', 'bajaj:boxer', 'bajaj:caliber', 'bajaj:chetak_petrol',

    'tvs:jupiter125', 'tvs:jupiter', 'tvs:ntorq', 'tvs:raider', 'tvs:apache160_4v',
    'tvs:apache160_2v', 'tvs:apache200', 'tvs:apache180', 'tvs:sport',
    'tvs:star_city', 'tvs:radeon', 'tvs:ronin', 'tvs:xl100', 'tvs:zest110',
    'tvs:pepplus', 'tvs:wego', 'tvs:scooty_streak', 'tvs:victor', 'tvs:fiero',

    'yamaha:fz_fi', 'yamaha:fzs_fi', 'yamaha:fzx', 'yamaha:r15', 'yamaha:r15m',
    'yamaha:r15v3', 'yamaha:r15s', 'yamaha:mt15', 'yamaha:fascino', 'yamaha:rayzr',
    'yamaha:aerox', 'yamaha:fz25', 'yamaha:fz16', 'yamaha:alpha', 'yamaha:rayz',
    'yamaha:saluto', 'yamaha:rx100', 'yamaha:rx135',

    'suzuki:access', 'suzuki:burgman', 'suzuki:burgman_ex', 'suzuki:avenis',
    'suzuki:gixxer', 'suzuki:gixxer_sf', 'suzuki:gixxer250', 'suzuki:gixxer_sf250',
    'suzuki:vstrom_sx', 'suzuki:slingshot', 'suzuki:swish', 'suzuki:lets', 'suzuki:zeus',

    'ktm:duke200', 'ktm:duke125', 'ktm:duke250', 'ktm:rc200', 'ktm:rc125',
    'ktm:adv250',
    'kawasaki:w175',

    'husqvarna:svartpilen250', 'husqvarna:vitpilen250',

    'aprillia:sr160', 'aprillia:sr125', 'aprillia:sxr160', 'aprillia:sxr125',
    'aprillia:storm125',

    'vespa:vxl125', 'vespa:sxl125', 'vespa:vxl150', 'vespa:sxl150', 'vespa:lx125',
    'vespa:zx125', 'vespa:dual125', 'vespa:dual150', 'vespa:elegante150',
    'benelli:keeway_sr125', 'benelli:keeway_sr250',
  ],
  '250-399': [
    'honda:hness_cb350', 'honda:cb350rs', 'honda:cb350', 'honda:cb300f',
    'honda:cb300r',

    'bajaj:pulsarns400z', 'bajaj:dominar400',
    'tvs:apache310', 'tvs:apache_rtr310',

    'royal_enfield:classic350', 'royal_enfield:hunter350', 'royal_enfield:bullet350',
    'royal_enfield:meteor350', 'royal_enfield:thunderbird350',
    'royal_enfield:electra350', 'royal_enfield:machismo350',

    'yamaha:r3', 'yamaha:mt03', 'yamaha:rd350',
    'ktm:duke390', 'ktm:rc390', 'ktm:adv390', 'ktm:adv390x',

    'triumph:speed400', 'triumph:scrambler400x', 'triumph:speed_t4',

    'kawasaki:ninja400', 'kawasaki:ninja300', 'kawasaki:versys_x300',
    'kawasaki:zx4r',

    'husqvarna:svartpilen401', 'husqvarna:vitpilen401',

    'jawa:jawa42', 'jawa:jawa350', 'jawa:jawa42bobber', 'jawa:jawa42fj', 'jawa:perak',
    'yezdi:roadster', 'yezdi:scrambler', 'yezdi:adventure',

    'bmw:g310r', 'bmw:g310gs', 'bmw:g310rr',
    'benelli:imperiale400', 'benelli:keeway_vieste300',
  ],
  '400-599': [
    'hero:maverick', 'honda:nx500',

    'royal_enfield:guerrilla450', 'royal_enfield:himalayan450',
    'royal_enfield:himalayan411', 'royal_enfield:scram411',
    'royal_enfield:classic500', 'royal_enfield:bullet500',
    'royal_enfield:thunderbird500', 'royal_enfield:machismo500',

    'kawasaki:ninja500', 'kawasaki:eliminator450',
    'harley:x440', 'aprillia:rs457',
    'benelli:trk502', 'benelli:leoncino500', 'benelli:502c',
  ],
  '600+': [
    'honda:cbr650r', 'honda:transalp', 'honda:africa_twin', 'honda:cbr1000rr',
    'honda:goldwing',

    'royal_enfield:interceptor650', 'royal_enfield:gt650',
    'royal_enfield:super_meteor', 'royal_enfield:bear650', 'royal_enfield:shotgun650',

    'suzuki:vstrom650', 'suzuki:katana', 'suzuki:hayabusa', 'ktm:duke890',

    'triumph:trident660', 'triumph:tiger_sport660', 'triumph:streettriple',
    'triumph:speedtwin', 'triumph:bonneville', 'triumph:rocket3',
    'triumph:tiger900', 'triumph:tiger1200',

    'kawasaki:ninja650', 'kawasaki:z650', 'kawasaki:versys650',
    'kawasaki:zx6r', 'kawasaki:zx10r', 'kawasaki:z900', 'kawasaki:vulcans',

    'harley:iron883', 'harley:street750', 'harley:sportster_s', 'harley:nightster',
    'harley:fortyeight', 'harley:streetrod', 'harley:fat_boy', 'harley:pan_america',

    'aprillia:tuono660', 'aprillia:rs660',
    'bmw:f900r', 'bmw:s1000rr', 'bmw:r1250gs', 'bmw:r1300gs',

    'ducati:monster', 'ducati:scrambler800', 'ducati:panigale_v2',
    'ducati:panigale_v4', 'ducati:multistrada_v4', 'ducati:streetfighter_v4',
    'ducati:diavel_v4', 'ducati:desertx',
  ],
};

const MODEL_CC_RANGE = new Map<string, CCRange>();

for (const [range, modelKeys] of Object.entries(MODEL_KEYS_BY_RANGE) as [CCRange, readonly string[]][]) {
  for (const modelKey of modelKeys) {
    if (MODEL_CC_RANGE.has(modelKey)) {
      throw new Error(`Duplicate model CC mapping: ${modelKey}`);
    }

    MODEL_CC_RANGE.set(modelKey, range);
  }
}

export const getRecommendedCcRange = (brandId: string, modelId: string): CCRange | null => (
  MODEL_CC_RANGE.get(`${brandId}:${modelId}`) ?? null
);

export const getMappedModelKeys = (): ReadonlySet<string> => new Set(MODEL_CC_RANGE.keys());
