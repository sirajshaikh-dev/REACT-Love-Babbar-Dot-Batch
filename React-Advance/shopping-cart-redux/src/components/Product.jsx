

const Product = ({post}) => {
  return (
  <div>
    <div>
      <p>{post.title}</p>
    </div>
    <div>
      <p>{post.description}</p>
    </div>
    <div>
      <img src={post.image} alt="" />
    </div>
    <div>
      <p>{post.price}</p>
    </div>
    <button>
      {
        false ? <p>Remove item</p> : <p>Add to Cart</p>
      }
    </button>
  </div>);
};

export default Product;
