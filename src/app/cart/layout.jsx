import Navbar from "../assets/navbar";
import Footer from "../assets/footer";


export default function cartLayout({ children }) {
    
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
