const Card = ({ title }) => {
  return (
    <div
      style={{
        border: "1px solid #4b5362",
        padding: "20px",
        margin: "10px",
        backgrounColor: "#31363f",
        borderRadius: "10px",
        minHeight: "100px",
      }}
    >
      {/* this is inline styling for React components,
      the value have to be inputed as strings,
      'background-color' => 'backgroundColor' */}
      <h2>{title}</h2>;
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
