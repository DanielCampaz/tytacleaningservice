export type useArrayTransformReturn<T> = Array<T>;

export default function useArrayTransform<T>(
  array: Array<T>,
  index?: number
): useArrayTransformReturn<T> {
  if (index !== undefined) return array.filter((_, indexa) => indexa < index);
  else return array;
}
