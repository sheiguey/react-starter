import imgOne from '../../assets/react-core-concepts.png';
import './Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const arrLength = reactDescriptions.length;
  const ranDescriptionIndex = genRandomInt(arrLength);
  const ranDescription = reactDescriptions[ranDescriptionIndex];
  return (
    <header>
      <img src={imgOne} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {ranDescription} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
