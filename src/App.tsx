import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Comments from "./pages/Comments";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
