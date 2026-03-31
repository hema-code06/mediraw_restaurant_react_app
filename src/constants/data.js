import falafel from "../assets/Falafel.png";
import Fattoush from "../assets/Fattoush.png";
import GrilledHalloumi from "../assets/Grilled Halloumi.png";
import Hummus from "../assets/Hummus.png";
import Linguine from "../assets/Linguine alle Vongole.png";
import muhammara from "../assets/Muhammara.png";
import paella from "../assets/Paella Valenciana.png";
import spanakopita from "../assets/Spanakopita.png";
import tzatziki from "../assets/Tzatziki.png";

const menu = [
  {
    id: 1,
    title: "Paella Valenciana",
    price: 156,
    category: "coastline",
    type: "non-veg",
    image: paella,
  },
  {
    id: 2,
    title: "Linguine alle Vongole",
    price: 256,
    category: "coastline",
    type: "non-veg",
    image: Linguine,
  },
  {
    id: 3,
    title: "Spanakopita",
    price: 556,
    category: "coastline",
    type: "veg",
    image: spanakopita,
  },
  {
    id: 4,
    title: "Hummus",
    price: 156,
    category: "mezze",
    type: "veg",
    image: Hummus,
  },
  {
    id: 5,
    title: "Falafel",
    price: 256,
    category: "mezze",
    type: "veg",
    image: falafel,
  },
  {
    id: 6,
    title: "Tzatziki",
    price: 356,
    category: "mezze",
    type: "veg",
    image: tzatziki,
  },
  {
    id: 7,
    title: "Fattoush",
    price: 156,
    category: "mezze",
    type: "veg",
    image: Fattoush,
  },
  {
    id: 8,
    title: "Grilled Halloumi",
    price: 556,
    category: "mezze",
    type: "veg",
    image: GrilledHalloumi,
  },
  {
    id: 9,
    title: "Muhammara",
    price: 256,
    category: "mezze",
    type: "veg",
    image: muhammara,
  },
];

export default menu;