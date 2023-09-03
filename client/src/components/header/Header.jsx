import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Fahad
          </a>
          <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
            <ul className="nav__list cs_grid">
              <li className="nav__item">
                <a href="" className="nav__link active-link">
                  <span className="nav__icon">
                    <BiHomeAlt />
                  </span>

                  <span>Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  <span className="nav__icon">
                    <AiOutlineUser />
                  </span>

                  <span>About</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  <span className="nav__icon">
                    <HiOutlineDocumentText />
                  </span>

                  <span>Skill</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  <span className="nav__icon">
                    <BsBriefcase />
                  </span>

                  <span>Service</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  <span className="nav__icon">
                    <RiGalleryLine />
                  </span>

                  <span>Portfolio</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  <span className="nav__icon">
                    <LuContact />
                  </span>

                  <span>Contact</span>
                </a>
              </li>
            </ul>
            <span onClick={() => setToggle(!toggle)} class="nav__close">
              <AiOutlineClose />
            </span>
          </div>
          <div onClick={() => setToggle(!toggle)} className="nav__toggle">
            <AiOutlineAppstoreAdd />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
