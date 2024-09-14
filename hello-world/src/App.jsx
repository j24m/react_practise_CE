import Card from "./components/Card";
import Avatar from "./components/Avatar";
import TakeAway from "./assets/Take Away.gif";

function App() {
  return (
    <Card username="Jyotsna" age={30}>
      <Avatar size={100} src={TakeAway} alt="Take Away" />
    </Card>
  );
}

export default App;
