import React from 'react'
import Plx, { ParallaxDatum } from 'react-plx'
import './Banner.css'

import { throttle } from './utils'

// Technical tags
export enum Language {
    Python = "devicon-python-plain-wordmark",
    CPP = "devicon-cplusplus-plain",
    Golang = "devicon-go-plain",
    HTML5 = "devicon-html5-plain-wordmark",
    CSS3 = "devicon-css3-plain-wordmark",
    JavaScript = "devicon-javascript-plain",
    Redis = "devicon-redis-plain-wordmark"
}

interface BannerProps {
    title: string,
    description: string,
    backgroundImageURL: string,
    detailURL: string,
    language: Language[]
}

interface BannerState {
    duration: number,
    offset: number
}

export class Banner extends React.Component<BannerProps, BannerState> {
    readonly CONTAINER_HEIGHT_RATIO = 0.5
    readonly CONTAINER_WIDTH_RATIO = 0.55
    refContainer: HTMLDivElement | null = null
    refBackground: HTMLImageElement | null = null
    imgHeight: number = 0
    imgWidth: number = 0
    parallaxData: ParallaxDatum

    constructor(props: BannerProps) {
        super(props)

        let img = new Image()
        img.src = props.backgroundImageURL
        img.onload = () => {
            this.imgHeight = img.naturalHeight
            this.imgWidth = img.naturalWidth
            this.updateAnimationConfiguration()
        }

        this.parallaxData = {
            start: 0,
            duration: 1000,
            properties: [
                {
                    property: "translateY",
                    startValue: 0,
                    endValue: 0
                }
            ]
        }
    }

    shouldComponentUpdate = () => this.imgHeight > 0 && this.imgWidth > 0

    componentDidMount = () => {
        if (this.refContainer) {
            this.parallaxData.start = this.refContainer
            this.updateAnimationConfiguration()
        }
        window.addEventListener("resize", throttle(this.updateAnimationConfiguration, 17))
    }


    updateAnimationConfiguration = () => {
        if (this.refContainer && this.imgHeight && this.imgWidth) {
            let offset = this.refContainer.offsetWidth / this.imgWidth * this.imgHeight - this.refContainer.offsetHeight
            let duration = window.innerHeight + this.refContainer.offsetHeight
            this.parallaxData.duration = duration
            this.parallaxData.properties[0].endValue = -offset
            this.setState({ offset: offset, duration: duration })
        }
    }

    render = () => {
        return (
            <div ref={ele => { this.refContainer = ele }} className="banner-container" style={{ height: this.CONTAINER_HEIGHT_RATIO * 100 + "vh", width: this.CONTAINER_WIDTH_RATIO * 100 + "vw" }}>


                <Plx ref={ele => { this.refBackground = (ele as unknown as HTMLImageElement) }} className="banner-background" tagName="img" parallaxData={[this.parallaxData]} src={this.props.backgroundImageURL} alt="background" />

                <div className="banner-filter"></div>

                <div className="banner-header">
                    <h3 className="banner-title">{this.props.title}</h3>
                    {this.props.language.map(v => (
                        <i key={v} className={v + " colored banner-badge"}></i>
                    ))}
                </div>

                {this.props.description.split('\n').map((v, i) => (
                    <p key={i} className="banner-text">{v}</p>
                ))}

                <a className="banner-detail"
                    href={this.props.detailURL}
                    target="_blank"
                    rel="noopener noreferrer">
                    Details
                    <i className="fa fa-angle-double-right"></i>
                </a>

            </div>
        )
    }
}