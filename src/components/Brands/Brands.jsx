import { useContext } from "react";
import "./Brands.css";
import { countercontext } from "../../Context/appcontext";

export default function Brands() {
  let { index, username, token } = useContext(countercontext);
  return (
    <section className="brands container py-5">
      <div className="p-5 text-center bg-white border rounded-4 shadow-sm">
        <h2 className="h1 fw-bold mb-0">Brands Component</h2>
        <p>{index}</p>
        <p>{username}</p>
        <p>{token}</p>
      </div>
    </section>
  );
}
