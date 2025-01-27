import Child from "./Child";
import Expression from "./Expression";
const Example = () => {
  const hello = (arg) => {
    return `Hello ${arg}`;
  };
  return (
    <>
      <Child num={123} fn={hello} />
      <Expression />
    </>
  );
};

export default Example;
