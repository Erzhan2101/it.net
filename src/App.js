import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./views/Login";
import Registration from "./views/Registration";
import UserProfile from "./views/userProfile";
import NewsLine from "./views/NewsLine";
import Message from  "./views/Message"
import AllFriends from "./views/AllFriends";


function App() {
    return (
        <Router>
                <Layout>
                    <Route  path="/my-profile" component={UserProfile}/>
                    <Route exact path="/news-line" component={NewsLine}/>
                    <Route exact path="/message" component={Message}/>
                    <Route exact path="/friends" component={AllFriends}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registration" component={Registration}/>
                </Layout>
        </Router>
    );
}

export default App;
