const Spinner = () => {
  const style = {
    height: "100vh",
    opacity: "0.8",
    backgroundColor: "#6096B4",
  };
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={style}
    >
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
