/**
 * Заглушка для відображення лічильника: додайте пропси під час уроку.
 */

interface CountDisplayProps {
  value: number;
}

export default function CountDisplay({ value }: CountDisplayProps) {
  return <div>The current counter value is {value}</div>;
}
