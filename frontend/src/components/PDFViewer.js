import React from "react";

const PDFViewer = ({ pdfUrl = "resume.pdf" }) => {
  return (
    <div className="col-12 col-md-11 col-lg-8 col-xxl-7" style={{height: "90vh"}}>
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        width="100%"
        height="100%" // Set the height according to your requirements
      ></iframe>
    </div>
  );
};

export default PDFViewer;
