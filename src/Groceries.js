function Groceries(props) {
  const { handleAdd, handleDelete, groceries } = props;
  return (
    <div className="groceries">
      <h2>Groceries</h2>
      {groceries.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.cost / 100}</p>
          <button onClick={() => handleAdd(item.id)}>Add to Cart</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Groceries;
