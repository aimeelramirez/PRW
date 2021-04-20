// import { FiCoffee } from "react-icons/fi";
import Search from "./../middle/search/search";
import Portal from "./../../reducers/portal";

const Header = () => {
      return (
            <header>
                  <article id="header-icons">
                        <Portal />
                  </article>
                  <Search />
            </header>
      );
}

export default Header;
