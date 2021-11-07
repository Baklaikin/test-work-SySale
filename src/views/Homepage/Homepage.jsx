import pantene from "../../images/pantene@1x.jpg";
import moroccanoil from "../../images/moroccanoil@1x.jpg";
import concept from "../../images/concept@1x.jpg";
import ProdCard from "views/Card/Card";
import { List } from "./Homepage.styled";

function Homepage() {
  return (
    <section>
      <List>
        <li>
          <ProdCard value={pantene} id={1} name={pantene} />
        </li>
        <li>
          <ProdCard value={moroccanoil} id={2} name={moroccanoil} />
        </li>
        <li>
          <ProdCard value={concept} id={3} name={concept} />
        </li>
      </List>
    </section>
  );
}

export default Homepage;
