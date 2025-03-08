import React from 'react';
import note from "../../assets/note.png";
import credit from "../../assets/credit.png";
import contact from "../../assets/contact-form 1.png";
import ant from "../../assets/ant-design_mail-filled.png";
import "./Process.css";

const Process = () => {
  return (
    <section className="process-section">
    <div className="row justify-content-center align-items-center">
      {/* Step 1 */}
      <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
        <div className="icon-circle red-bg">
          <img src={note} alt="Form Icon" />
        </div>
        <p className="form-process">Fill up Application Form</p>
      </div>

      {/* Step 2 */}
      <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
        <div className="icon-circle green-bg">
          <img src={credit} alt="Payment Icon" />
        </div>
        <p className="form-process">Make Online Payment</p>
      </div>

      {/* Step 3 */}
      <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
        <div className="icon-circle orange-bg">
          <img src={contact} alt="Executive Icon" />
        </div>
        <p className="form-process">Executive will Process Application</p>
      </div>

      {/* Step 4 */}
      <div className="col-lg-3 col-md-6 col-12 d-flex align-items-center gap-2 process-step">
        <div className="icon-circle gray-bg">
          <img src={ant} alt="Mail Icon" />
        </div>
        <p className="form-process">Get Confirm Mail</p>
      </div>
    </div>
  </section>
  )
}

export default Process