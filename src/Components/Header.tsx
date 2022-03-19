import React from "react";
import { Autocomplete } from "@react-google-maps/api";

function Header(props: { setCoords: any }) {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Travel Companion</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search"></i>
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="btn float-end"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
            >
              <i
                style={{ fontSize: "1.5rem", color: "#000" }}
                className="bi bi-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
              ></i>
            </button>
          </form>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start w-25"
        tabIndex={-1}
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">
            Preference
          </h6>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-0">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu"
          >
            <li className="nav-item">
              <a href="/" className="nav-link text-truncate">
                <i className="fs-5 bi-house"></i>
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <br />
            <li className="dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle  text-truncate"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-arrow-down-up"></i>
                <span className="ms-1 d-none d-sm-inline">
                  Tourist Attractions
                </span>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Picturesque
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hotels
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Restraunt
                  </a>
                </li>
              </ul>
            </li>
            <br />
            <li className="dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle  text-truncate"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-star"></i>
                <span className="ms-1 d-none d-sm-inline">Rating</span>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    3 Star
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    4 Star
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    5 Star
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default React.memo(Header);
