import {BrowserRouter as Router, Route} from "react-router-dom";
import Ribbon from "./views/Ribbon";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
                <Layout>
                    <Route exact path="/timeline" component={Ribbon}/>
                </Layout>
        </Router>
    );
}

export default App;
