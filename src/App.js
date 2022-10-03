import Card from "./components/ui/Card/Index";

function App() {
  return (
    <Card
      date={new Date("2022-10-03T13:29:12.005Z")}
      image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
      price={12}
      title="Storybook Integration"
      type="column"
    />
  );
}

export default App;
