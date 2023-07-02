import ResumePDF from "../../assets/Resume2023.pdf";

export const Resume = () => {
  return (
    <div style={{ height: "1600px", width: "100%" }}>
      <iframe
        src={ResumePDF}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};
