import React from 'react'
import { throttle } from './utils'
import './BackgroundCanvas.css'

interface BackgroundCanvasState {
    height: number,
    width: number
}

export default class BackgroundCanvas extends React.Component<{}, BackgroundCanvasState> {
    ref: HTMLCanvasElement | null = null

    constructor(props: {}) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    /**
     * Automatically resize canvas
     */
    readonly INTERVAL: number = 40;
    resizeHandler = () => {
        this.setState({
            height: this.ref?.offsetHeight || this.state.height,
            width: this.ref?.offsetWidth || this.state.width
        })
    }

    componentDidMount() {
        this.resizeHandler()
        window.addEventListener("resize", throttle(this.resizeHandler, this.INTERVAL))
    }

    componentWillUnmount() {
        window.removeEventListener("resize", throttle(this.resizeHandler, this.INTERVAL))
    }

    render() {
        return (
            <canvas
                ref={(ele) => { this.ref = ele }}
                className="bg-canvas"
                width={this.state.width}
                height={this.state.height}
            />
        )
    }
}