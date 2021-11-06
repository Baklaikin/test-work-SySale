import pantene from "../../images/pantene@1x.jpg";
import moroccanoil from "../../images/moroccanoil@1x.jpg";
import concept from "../../images/concept@1x.jpg";
import ProdCard from "views/Card/Card";

function Homepage() {
  return (
    <section>
      <ul>
        <li>
          <ProdCard value={pantene} />
        </li>
        <li>
          <ProdCard value={moroccanoil} />
        </li>
        <li>
          <ProdCard value={concept} />
        </li>
      </ul>
    </section>
  );
}

export default Homepage;
