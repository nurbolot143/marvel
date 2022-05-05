import img from "./error.gif";

export const Error = () => {
  return (
    <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={img}
        alt="Error"
      />
    </div>
  );
};

export default Error;
