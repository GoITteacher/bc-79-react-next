import Container from "./books/Container/Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import Sidebar from "./Sidebar/Sidebar";
import css from "./App.module.css";
import UserCard from "./UserCard/UserCard";
import BookItem from "./BookItem/BookItem";
import Modal from "./Modal/Modal";
import CarList from "./Task1/CarList/CarList";
import CocktailList from "./Task2/CocktailList/CocktailList";

export default function App() {
  // const userName = "Vasya";
  const imgUrl =
    "https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg";

  return (
    <div className={css.page}>
      <Header />
      <main className={css.main}>
        <div>
          <UserCard lastname="Romanenko" firstname="Vasya" />
          <UserCard firstname="Anton" lastname="Shevchenko" />
          <UserCard firstname="Ivan" lastname="Franko" />
        </div>

        <div>
          <BookItem title="Test1" author="Volodymyr1" img={imgUrl} />
          <BookItem title="Test2" author="Volodymyr2" img={imgUrl} />
          <BookItem title="Test3" author="Volodymyr3" img={imgUrl} />
          <BookItem title="Test4" author="Volodymyr4" img={imgUrl} />
        </div>

        <CocktailList />

        <CarList />

        <Modal>Test</Modal>

        <Sidebar />
        <Container />
        <MainSection />
      </main>
      <Footer />
    </div>
  );
}
