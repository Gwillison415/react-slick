import Form from "./Form";

const Sections = ({ section }) => {
  const { type, logo, data } = section;

  if (type === "intro") {
    return <div> intro!</div>;
  }
  return <Form {...section} />;
};

export default Sections;
