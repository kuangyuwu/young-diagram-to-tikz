export default function Edge({
  exists,
  toggleExists,
}: {
  exists: boolean;
  toggleExists: React.MouseEventHandler<HTMLButtonElement>;
}) {
  let className = "h-1 w-12 rounded-sm hover:scale-110";
  if (!exists) {
    className += " non-existent";
  } else {
    className += " bg-black";
  }

  return <button className={className} onClick={toggleExists}></button>;
}
