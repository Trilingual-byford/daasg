import React from "react";
import Box from "@material-ui/core/Box";
import DogCardGallery from "../DogCardGallery";
import {Parallax} from "react-spring/renderprops-addons";
import {pink} from "@material-ui/core/colors";
import './styles.css'

export default () => {
    const offset = 0;
    const gradient = pink;
    const caption = "cation";
    const first = "first";
    const second = "second";

    function onClick() {

    }

    return (
        <Box>
            <React.Fragment>
                <Parallax.Layer offset={offset} speed={0.2}>
                    <div className="slopeBegin"/>
                </Parallax.Layer>

                <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
                    <div className={`slopeEnd ${gradient}`}/>
                </Parallax.Layer>

                {/*<Parallax.Layer className="text number" offset={offset} speed={0.3}>*/}
                {/*    <span>0{offset + 1}</span>*/}
                {/*</Parallax.Layer>*/}

                <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{fontSize: 20}}>{caption}</p>
        <div className={`stripe ${gradient}`}/>
        <p>{first}</p>
        <p>{second}</p>
      </span>
                </Parallax.Layer>
            </React.Fragment>
            <DogCardGallery/>

        </Box>)
}