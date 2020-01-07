/* eslint-disable @typescript-eslint/no-unused-vars */
declare module "react-skrollr" {

    interface ParallaxProviderProps {
        init?: object,
        disableOnMobile?: bool
    }

    interface ParallaxProps {
        data: object
    }

    class ParallaxProvider extends React.Component<ParallaxProviderProps, any> { }

    class Parallax extends React.Component<ParallaxProps, any> { }
}