import { useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  let [products, setproducts] = useState([]);
  async function Getproducts() {
    let req = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products",
    );
    console.log(req.data.data);
    setproducts(req.data.data);
  }
  useEffect(() => {
    async function run() {
      await Getproducts();
    }
    run();
  }, []);
  return (
    <section className="home container py-5">
      <div className="p-4 bg-light border rounded-4 shadow-sm">
        <h2 className="display-5 fw-bold mb-4 text-center">Home Component</h2>
        <div className="products row g-4">
          {console.log(products)}
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.imageCover}
                    className="card-img-top product-cover"
                    alt={product.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted small flex-grow-1">
                      {product.description}
                    </p>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">
                        ${product.price}
                      </span>
                      <button className="btn btn-sm btn-outline-primary">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
