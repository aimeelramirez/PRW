// import { FiCoffee } from "react-icons/fi";
import React, { useRef, useEffect } from 'react';
import Search from "./../middle/search/search";
import Portal from "./../../reducers/portal";
import anime from 'animejs/lib/anime.es.js';



const Header = () => {
      const animationRef = useRef(null);
      const svgPath = document.querySelectorAll('.cls');

      useEffect(() => {
            animationRef.current = anime({
                  targets: svgPath,
                  loop: true,
                  direction: 'alternate',
                  strokeDashoffset: [anime.setDashoffset, 0],
                  easing: 'easeInOutSine',
                  duration: 700,
                  delay: (el, i) => { return i * 500 }

            });
            animationRef.current.restart()
      })
      // eslint-disable-next-line

      return (
            <header>
                  <section>

                  </section>
                  <article id="header-icons">
                        <Portal />
                  </article>
                  <Search />
            </header>
      );
}

export default Header;
