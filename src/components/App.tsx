import Container from "./books/Container/Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import Sidebar from "./Sidebar/Sidebar";

/**
 * Завдання: додайте типізацію пропсів для дочірніх компонентів за потреби.
 */
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <Container />
        <MainSection />
      </main>
      <Footer />
    </div>
  );
}
