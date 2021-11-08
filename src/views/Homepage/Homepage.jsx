import panteneImg from "../../images/pantene@1x.jpg";
import moroccanoilRotate from "images/moroccanoil-rotated.jpg";
import moroccanoil from "../../images/moroccanoil@1x.jpg";
import conceptImg from "../../images/concept@1x.jpg";
import ProdCard from "views/Card/Card";
import { List } from "./Homepage.styled";

const pantene = {
  initial: moroccanoil,
  rotate: moroccanoilRotate,
};
const moroccan = {
  initial: panteneImg,
  rotate: moroccanoilRotate,
};
const concept = {
  initial: conceptImg,
  rotate: moroccanoilRotate,
};

function Homepage() {
  return (
    <section>
      <List>
        <li>
          <ProdCard
            value={pantene}
            name={pantene}
            prod1={moroccan.initial}
            prod2={concept.initial}
          />
        </li>
        <li>
          <ProdCard
            value={moroccan}
            name={moroccanoil}
            prod1={pantene.initial}
            prod2={concept.initial}
          />
        </li>
        <li>
          <ProdCard
            value={concept}
            name={concept}
            prod1={moroccan.initial}
            prod2={pantene.initial}
          />
        </li>
      </List>
    </section>
  );
}

export default Homepage;
