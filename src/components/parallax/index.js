import React from 'react'
import {Parallax} from 'react-spring/renderprops-addons'
import './styles.css'
import DogAsAServiceBox from "../box/DogAsAServiceBox";
import PostADogBox from "../box/PostADogBox";
import MemeBox from "../box/MemeBox";
import AboutBox from "../box/AboutBox";

const Page = ({offset, caption, first, second, gradient, onClick}) => (
    boxSelector(offset)
);
const boxSelector = (offset) => {
    console.log("boxSelector", offset)

    switch (offset) {
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

export default class extends React.Component {
    scroll = to => this.refs.parallax.scrollTo(to);

    constructor() {
        super();
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    render() {
        return (
            <div
                style={{
                    gridColumn: 'span 2',
                    gridRow: 'span 2',
                    background: '#dfdfdf'
                }}>
                <Parallax
                    className="container"
                    ref="parallax"
                    pages={3}
                    horizontal
                    scrolling={false}>
                    <Page
                        offset={0}
                        gradient="pink"
                        caption="who we are"
                        first="Lorem ipsum"
                        second="dolor sit"
                        onClick={() => this.scroll(1)}
                    />
                    <Page
                        offset={1}
                        gradient="teal"
                        caption="what we do"
                        first="consectetur"
                        second="adipiscing elit"
                        onClick={() => this.scroll(2)}
                    />
                    <Page
                        offset={2}
                        gradient="tomato"
                        caption="what we want"
                        first="Morbi quis"
                        second="est dignissim"
                        onClick={() => this.scroll(0)}
                    />
                </Parallax>
            </div>
        )
    }
}
