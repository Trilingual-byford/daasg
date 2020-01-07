import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AppHeaderBar from "./components/AppHeaderBar";
import "./styles.css";
import Box from "@material-ui/core/Box";
import DogCardGallery from "./components/DogCardGallery";
import Typography from "@material-ui/core/Typography";
import AboutBox from "./components/box/AboutBox";
import DogAsAServiceBox from "./components/box/DogAsAServiceBox";
import MemeBox from "./components/box/MemeBox";
import PostADogBox from "./components/box/PostADogBox";
// <DogCardGallery />
// {children}
// value:{value}
// index:{index}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`nav-tabpanel-${index}`}
          aria-labelledby={`nav-tab-${index}`}
          {...other}
      >
            <Box >
                <AboutBox />
                <DogAsAServiceBox />
                <MemeBox />
                <PostADogBox />
            </Box>

      </Typography>
  );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }
    tableSelector=(index)=>{
        this.setState({value: index})
    }
    render() {
    return (
      <Fragment>
        <AppHeaderBar click={this.tableSelector.bind(this)} />
          <TabPanel value={this.state.value} index={0}>
              Page One
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
              Page Two
          </TabPanel>
          <TabPanel value={this.state.value} index={2}>
              Page Three
          </TabPanel>
          <TabPanel value={this.state.value} index={3}>
              Page Three
          </TabPanel>
      </Fragment>
    );
  }
}
const secondElement = document.getElementById("root");
ReactDOM.render(<App />, secondElement);

