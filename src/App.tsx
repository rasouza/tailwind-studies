import { Sidebar } from "src/components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main>
        <p>test</p>
      </main>
    </div>
  );
}

export default App;
