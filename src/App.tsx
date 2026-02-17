import "./App.css"
import NewsCards from "./components/NewsCards"
import "bootstrap/dist/css/bootstrap.min.css"
import TopBar from "./components/TopBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import ArticleDetail from "./components/ArticleDetail"

function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<NewsCards />}
          ></Route>
          <Route
            path="/article/:id"
            element={<ArticleDetail />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
