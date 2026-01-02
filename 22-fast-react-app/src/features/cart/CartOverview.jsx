import { Link } from "react-router-dom";
function CartOverview() {
  return (
    <div className="bg-cyan-700 text-white">
      <p className="text-stone-50">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
