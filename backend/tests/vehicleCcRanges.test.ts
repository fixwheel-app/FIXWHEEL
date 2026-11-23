import assert from 'node:assert/strict';
import test from 'node:test';
import { BIKE_DATA } from '../../frontend/lib/bikes';
import { getMappedModelKeys, getRecommendedCcRange } from '../../frontend/lib/vehicleCcRanges';

test('every listed non-electric model has one automatic CC range except the explicit Other Model fallback', () => {
  const unmappedModels: string[] = [];

  for (const brand of BIKE_DATA['Non-Electric Motorbike']) {
    for (const model of brand.models) {
      if (model.name === 'Other Model') continue;

      if (!getRecommendedCcRange(brand.id, model.id)) {
        unmappedModels.push(`${brand.name} ${model.name}`);
      }
    }
  }

  assert.deepEqual(unmappedModels, []);
});

test('each automatic model mapping points to a real catalog model and appears only once', () => {
  const catalogKeys = new Set(
    BIKE_DATA['Non-Electric Motorbike'].flatMap((brand) => (
      brand.models.map((model) => `${brand.id}:${model.id}`)
    )),
  );

  const orphanedMappings = [...getMappedModelKeys()].filter((modelKey) => !catalogKeys.has(modelKey));
  assert.deepEqual(orphanedMappings, []);
});

test('automatic ranges cover commuter, mid-capacity, premium and superbike boundaries', () => {
  assert.equal(getRecommendedCcRange('honda', 'activa125'), '0-249');
  assert.equal(getRecommendedCcRange('royal_enfield', 'classic350'), '250-399');
  assert.equal(getRecommendedCcRange('hero', 'maverick'), '400-599');
  assert.equal(getRecommendedCcRange('honda', 'cbr650r'), '600+');
  assert.equal(getRecommendedCcRange('bajaj', 'dominar250'), '0-249');
  assert.equal(getRecommendedCcRange('bajaj', 'dominar400'), '250-399');
  assert.equal(getRecommendedCcRange('kawasaki', 'ninja500'), '400-599');
});

test('ambiguous fallback models require manual CC selection and CE 04 stays in the electric catalog', () => {
  assert.equal(getRecommendedCcRange('other_ice', 'other_ice_model'), null);

  const nonElectricBmw = BIKE_DATA['Non-Electric Motorbike'].find((brand) => brand.id === 'bmw');
  const electricBmw = BIKE_DATA['Electric Motorbike'].find((brand) => brand.id === 'bmw');

  assert.equal(nonElectricBmw?.models.some((model) => model.id === 'ce04'), false);
  assert.equal(electricBmw?.models.some((model) => model.id === 'ce04'), true);
});
