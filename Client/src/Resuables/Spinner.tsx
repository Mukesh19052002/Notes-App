const Spinner = () => {
  const style = {
    height: "100vh",
    opacity: "0.8",
    blur: "8px",
    background: "rgb(113 113 113 / 61%)",
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
