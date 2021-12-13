import {BrowserRouter as Router, Route} from "react-router-dom";
import Ribbon from "./views/Ribbon";
import Login from "./views/Login";
import Layout from "./components/Layout";
import Registration from "./views/Registration";

function App() {
    return (
        <Router>
                <Layout>
                    <Route exact path="/timeline" component={Ribbon}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registration" component={Registration}/>
                </Layout>
        </Router>
    );
}

export default App;
