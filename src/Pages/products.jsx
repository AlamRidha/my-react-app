import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const data = [
  {
    id: 1,
    nama: "Sepatu Jorn",
    image: "/images/shoes-1.jpg",
    price: 1500000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eveniet.",
  },
  {
    id: 2,
    nama: "Sepatu Nice",
    image: "/images/shoes-1.jpg",
    price: 9500000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore cum error porro praesentium libero?",
  },
  {
    id: 3,
    nama: "Sepatu Marn",
    image: "/images/shoes-1.jpg",
    price: 21500000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore cum error porro praesentium libero?",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    console.log("Button logout ditekan");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end w-full h-16 bg-blue-400 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {data.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                addToCart={handleToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-4 mb-3">Cart</h1>
          {/* <ul>
            {cart.map((data) => (
              <li key={data}>{data.id}</li>
            ))}
          </ul> */}
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = data.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.nama}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
