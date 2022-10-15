import Header from "./components/Header.jsx";
import data from "./data.js";
import Cards from "./components/Cards.jsx";

function App() {
  const cards = data.map(item => {
    return (
      <Cards
        key={item.id}
        item={item}
        />
    )
  })

  return (
    <div className="App">
        <Header />
        <section className="cards">
          {cards}
        </section>
    </div>
  )
}



export default App
