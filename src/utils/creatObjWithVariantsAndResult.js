export function creatObjWithVariantsAndResult(variants, resultOfVariants) {
  return resultOfVariants.map((item, i) => ({ ...item, variant: variants[i] }));
}
