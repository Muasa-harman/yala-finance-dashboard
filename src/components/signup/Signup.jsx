import { Link } from "react-router-dom";

const SignUpSection = () => {
  return (
    <section className="">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
              <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              a comprehensive software solution designed to streamline financial management processes and
               maintain detailed records within an organization. 
               It encompasses various modules and functionalities to handle tasks such as budgeting, 
               accounting, invoicing, expense tracking, and financial reporting.
                The system facilitates managing accounts receivable and payable, generating invoices,
                 tracking payments, and ensuring compliance with financial regulations and standards.
                  It serves as a central repository for storing financial documents, including invoices,
                   receipts, contracts, and financial statements, while also offering integration with
                    other systems for seamless data exchange. With robust security measures, user-friendly
                     interfaces, and scalability,
                      a finance and records system plays a critical role in improving efficiency,
                       decision-making, and transparency across the organization
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>

                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                  <div style={{ justifyContent: "space-between" }}>
                  <p className="link">You have an account?
                    <Link to={'/'}>SignIn</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
