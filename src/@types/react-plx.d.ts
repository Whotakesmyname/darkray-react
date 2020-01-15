/* eslint-disable @typescript-eslint/no-unused-vars */
declare module "react-plx" {

    type Transform = "translateX" | "translateY" | "translateZ" | "skew" | "skewX" | "skewY" | "skewZ" | "rotate" | "rotateX" | "rotateY" | "rotateZ" | "scale" | "scaleX" | "scaleY" | "scaleZ"
    type Color = "backgroundColor" | "borderBottomColor" | "borderColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor" | "color" | "fill" | "stroke"
    type CSSFilter = "blur" | "brightness" | "contrast" | "grayscale" | "hueRotate" | "invert" | "opacityFilter" | "saturate" | "sepia"

    interface Property {
        property: Transform | Color | CSSFilter,
        startValue: number | string,
        endValue: number | string,
        unit?: string
    }

    interface ParallaxDatum {
        start: number | string | HTMLElement,
        end?: number | string | HTMLElement,
        duration?: number | string | HTMLElement,
        startOffset?: number | string,
        endOffset?: number | string,
        easing?: string | Function<number, number>,
        name?: string,
        properties: Property[]
    }

    interface PlxProps {
        className?: string,
        style?: object,
        tagName?: string,
        animateWhenNotInViewport?: boolean,
        disabled?: boolean,
        freeze?: boolean,
        parallaxData: ParallaxDatum[],
        onPlxStart?: Function,
        onPlxEnd?: Function,
        [key?: string]: any
    }

    export default class Plx extends React.Component<PlxProps, any> { }
}