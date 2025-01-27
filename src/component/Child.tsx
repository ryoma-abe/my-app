const Child = ({ color: c = "red", num, fn }) => {
  return (
    <>
      <h3 className={`${c}`}>Child Component</h3>
      <h3 className={`${c}`}>{num}</h3>
      <h3 className={`${c}`}>{fn("こんにちは")}</h3>
    </>
  );
};

export default Child;
