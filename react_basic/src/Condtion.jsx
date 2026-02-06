import "../Condition.css";

function Condition({ title, price }) {
  return (
    <div className="Condition">
      <h3>{title}</h3>
      <h5>Price: {price}</h5>

      {price > 30000 ? <p>Discount of 5%</p> : null}
    </div>
  );
}

export default Condition;

