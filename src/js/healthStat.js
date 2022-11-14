export default function healthStat(character, health) {
  if (health && typeof (health) === 'number' && health > 50) {
    return 'healthy';
  }
  if (health && typeof (health) === 'number' && health > 15 && health < 50) {
    return 'woundedy';
  }
  if (health && typeof (health) === 'number' && health < 15) {
    return 'critical';
  }
  return null;
}
