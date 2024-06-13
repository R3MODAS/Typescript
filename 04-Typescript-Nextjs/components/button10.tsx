const Button = () => {
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products")
      .then((data: unknown) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  fetchData();

  return (
    <button className="bg-white text-black py-3 px-5 font-bold">
      Click me!
    </button>
  );
};

export default Button;
