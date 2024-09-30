import {BrowserRouter, Route, Routes} from "react-router-dom"
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import FeedPage from "./Pages/FeedPage/FeedPage";
import DetailPage from "./Pages/DetailPage/DetailPage"
import EditPage from "./Pages/EditPage/EditPage"
import {RecoilRoot} from "recoil";

function App() {
    return (
        <div>
            <RecoilRoot>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<RegisterPage/>}/>
                        <Route path="/feed" element={<FeedPage/>}/>
                        <Route path="/detail/:feed_id" element={<DetailPage />}/>
                        <Route path="/edit" element={<EditPage/>}/>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </div>
    );
}

export default App;
