import Contato from "../../components/contato/index.jsx";
import Features from "../../components/features/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Header from "../../components/header/index.jsx";
import Welcome from "../../components/welcome/index.jsx";
import styles from  "../styles/Home.module.scss";


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Features />
      <Contato />
      <Footer />
    </div>
  );
}
