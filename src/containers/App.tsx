import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import { NewQuote } from "../components/Content/NewQuote";
import { Content } from "../components/Content/Content";
import EditQuote from "../components/Content/EditQuote";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="new" element={<NewQuote />} />
            <Route path="edit/:id" element={<EditQuote />} />
            <Route path="" element={<Content />} />
            <Route path="quotes/famous-people" element={<Content />} />
            <Route path="quotes/star-wars" element={<Content />} />
            <Route path="quotes/saying" element={<Content />} />
            <Route path="quotes/humour" element={<Content />} />
            <Route path="quotes/motivational" element={<Content />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
