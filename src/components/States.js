export default function States({ items }) {
  if (!items.length)
    return (
      <p className="starts">
        <em>start adding items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! ready to go✈️"
          : `💼 You have ${numItems} item on your list, and you already packed
        ${numPacked}
       (${percentage}%)`}
      </em>
    </footer>
  );
}
