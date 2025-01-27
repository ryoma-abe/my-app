const Child = (props) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        beatae, asperiores alias quasi totam ab culpa necessitatibus mollitia.
        Voluptatum corporis nesciunt voluptatibus nam doloribus minus quis,
        aperiam ad deserunt veritatis?
      </p>
      <h3 className={`${props.color}`}>Child Component</h3>
    </>
  );
};

export default Child;
