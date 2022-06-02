import React from "react";
import "../App.css";

export default function Offcanvas() {
  return (
    <>
      <div
        className="offcanvas sidebar-nav bg-dark text-white offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">
                  CORE
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Dasboard</span>
                </a>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">
                  Interface
                </div>
              </li>
              <li>
                <a
                  className="nav-link ms-auto px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split"></i>
                  </span>
                  <span>Layouts</span>
                  <span className="right-icon ms-2 ">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </a>
                <div className="collapse" id="collapseExample">
                  <div>
                    <ul className="navbar-nav ps-3">
                      <li>
                        <a href="#" className="nav-link">
                          <span className="me-2 px-3">
                            <i className="bi bi-layout-split"></i>
                          </span>
                          <span>Nested Link</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
