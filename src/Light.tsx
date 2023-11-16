type Props = {
  varient: "green" | "yellow" | "red";
};

const Light = ({ varient = "green" }: Props) => {
  return (
    <div
      style={{
        backgroundColor: varient,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
      }}
    ></div>
  );
};

export default Light;
