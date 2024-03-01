import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  document.querySelectorAll('.header-menu li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const sectionId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(sectionId);

      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    });
  });
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
