const Item = ({text, deleteItem}) => {
  return (
    <div>
      {text}
      <button onClick={deleteItem}>-</button>
    </div>
  );
}
 
export default Item;