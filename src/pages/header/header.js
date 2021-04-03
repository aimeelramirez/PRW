// import { FiCoffee } from "react-icons/fi";
import Search from "./../middle/search/search";
import Portal from "./../../reducers/portal";

const Header = () => {
  return (
    <header>
      <section>
        {/* <h1>
          <strong>Logo</strong>
          <FiCoffee />
        </h1> */}
        {/* <h2>Coffee.</h2> */}
      </section>
      <article id="header-icons">
        <Portal />
      </article>
      <Search />
    </header>
  );
}

export default Header;
