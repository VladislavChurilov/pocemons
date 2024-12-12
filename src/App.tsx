import Header from "./components/header/Header.tsx";
import PocemonsPage from "./components/pocemons/PocemonsPage.tsx";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <PocemonsPage />
      </main>
    </>
  );
}

export default App;
