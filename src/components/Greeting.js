import { useSelector } from 'react-redux';

function Greeting() {
  const { greeting } = useSelector((state) => state.greetings);

  return (
    <div className="greeting-content">
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;
