import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam
          accusantium, laborum consectetur, explicabo, culpa recusandae alias
          ipsam nulla vitae ex cum aut quia necessitatibus porro inventore
          quisquam dolores? Ducimus?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 8.350.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam
          accusantium, laborum consectetur, explicabo, culpa recusandae alias
          ipsam nulla vitae ex cum aut quia necessitatibus porro inventore
          quisquam dolores? Ducimus?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 8.350.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
