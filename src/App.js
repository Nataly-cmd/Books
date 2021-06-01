import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Library from "./components/Library";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Library />
    </div>
  );
}
