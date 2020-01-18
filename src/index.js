import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import AppHeaderBar from "./components/AppHeaderBar";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import AboutBox from "./components/box/AboutBox";
import DogAsAServiceBox from "./components/box/DogAsAServiceBox";
import MemeBox from "./components/box/MemeBox";
import PostADogBox from "./components/box/PostADogBox";
import Parallax from "./components/parallax"

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    const boxSelector = () => {
        console.log("boxSelector", value)

        switch (value) {
            case 0:
                return <DogAsAServiceBox/>;
            case 1:
                return <PostADogBox/>;
            case 2:
                return <MemeBox/>;
            case 3:
                return <AboutBox/>;
            default:
                return "Nothing in default yet";
        }
    };
    return (
        <Typography
            component="div"
            role="tabpanel"
            id={`nav-tabpanel-${index}`}
            hidden={value !== index}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {(boxSelector())}
        </Typography>
    );
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.onRef=this.onRef.bind(this);
    }
    tableSelector = (index) => {
        this.setState({value: index});
        console.log(index);
        this.child.scroll(index);
    };
    onRef = (ref) => {
        this.child = ref
    };
    render() {
        return (
            <Fragment>
                <AppHeaderBar click={this.tableSelector}/>
                <div className="app-container">
                    <Parallax onRef={this.onRef}/>
                </div>
            </Fragment>
        );
    }
}

const secondElement = document.getElementById("appcontainer");
ReactDOM.render(<App/>, secondElement);

