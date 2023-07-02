import ResumePDF from "../../assets/Resume2023.pdf";

export const Resume = () => {
  return (
    <div style={{ height: "1600px", width: "100%" }}>
      <object
        data={ResumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
      ><p>Oops your browser doesn't support viewing this PDF</p>
      <p><a href={ResumePDF}>Download Here Instead</a></p></object>
    </div>
  );
};
