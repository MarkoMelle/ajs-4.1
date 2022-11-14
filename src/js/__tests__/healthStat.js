import healthStat from '../healthStat';

test.each([
  ['Маг', 14, 'critical'],
  ['Друид', 45, 'woundedy'],
  ['Орк', 51, 'healthy'],
  ['Энт', '51', null],
])(
  ('have to calculate health Status for %s character with %i health point'), (character, health, status) => {
    const result = healthStat(character, health);

    expect(result).toBe(status);
  },
);
