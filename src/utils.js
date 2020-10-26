export const randomInt = (lb, ub) => {
  return lb + Math.floor(Math.random() * (ub - lb));
};

export const randomGauss = (min, max, skew) => {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = randomGauss(min, max, skew); // resample between 0 and 1 if out of range
  num = Math.pow(num, skew); // Skew
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  return num;
};

export const randomIntGauss = (min, max, skew) => {
  return Math.round(randomGauss(min, max, skew));
};
