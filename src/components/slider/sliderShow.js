import React, { Component } from 'react';

class sliderShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderIndex: 0,
        };
    }
    getNewSliderIndex(step) {
        const sliderIndex = this.state.sliderIndex;
        const numberSlider = this.props.input.length;
        let newSliderIndex = sliderIndex + step;

        if (newSliderIndex >= numberSlider) {
            newSliderIndex = 0;
        }
        else if (newSliderIndex < 0) {
            newSliderIndex = numberSlider - 1;
        }
        return newSliderIndex;
    }
    prevSlider() {
        this.setState({
            sliderIndex: this.getNewSliderIndex(-1)
        });
    }
    nextSlider() {
        this.setState({
            sliderIndex: this.getNewSliderIndex(1)
        });
    }
    setSliderIndex(index) {
        this.setState({
            sliderIndex: index
        })
    }
    runAutomatic() {
        this.setState({
            sliderIndex: this.getNewSliderIndex(1)
        })
    }
    componentDidMount() {
        this.automaticInterval = setInterval(
            () => this.runAutomatic(),
            Number.parseInt(this.props.timeout)
        );
    }
    render() {
        return (
            <div className="slidershow">
                <div className="container">
                    {
                        this.props.input.map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`slider ${this.state.sliderIndex === index ? "active" : ""}`}
                                >
                                    <img className="image" src={image.src} alt={image.caption} />
                                </div>

                            )
                        })
                    }

                </div>
                <div className="dotslider">
                    {
                        this.props.input.map((_, index) => {
                            return (
                                <span
                                    key={index}
                                    className={
                                        `dot ${this.state.sliderIndex === index ? "active" : ""}`
                                    }
                                    onClick={() => this.setSlideIndex(index)}
                                >
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default sliderShow;