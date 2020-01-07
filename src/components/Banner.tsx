import React from 'react'
import { Parallax } from 'react-skrollr'

// Technical tags
enum Language {
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

class Banner extends React.Component<BannerProps, any> {
    render() {
        return (
            <Parallax data={{
                className: "parallax",
                "data-top-bottom": "background-position: 0 0 0 0;"
            }}>

                <div className="banner-header">
                    <h3 className="banner-title">{this.props.title}</h3>
                    {this.props.language.map(v => (
                        <i className={v + " colored banner-badge"}></i>
                    ))}
                </div>

                {this.props.description.split('\n').map(v => (
                    <p className="banner-text">{v}</p>
                ))}

                <a className="banner-detail"
                    href={this.props.detailURL}
                    target="_blank"
                    rel="noopener noreferrer">
                    Details
                    <i className="fa fa-angle-double-right"></i>
                </a>

            </Parallax>
        )
    }
}