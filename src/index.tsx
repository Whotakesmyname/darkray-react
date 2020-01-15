import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Banner, Language } from './components/Banner'
import BackgroundCanvas from './components/BackgroundCanvas'

import IMG_bfsu_snow from './bfsu-snow.jpg'

ReactDOM.render(
    <div id="container">
        <BackgroundCanvas />
        <Banner
            title="BFSU Academic Assistant"
            description="A wechat app for BFSU academic affair, including course selection, score query."
            backgroundImageURL={IMG_bfsu_snow}
            detailURL="https://google.com"
            language={[Language.Python, Language.HTML5, Language.JavaScript, Language.CSS3, Language.Redis]}
        ></Banner>
        <Banner
            title="BFSU Academic Assistant"
            description="A wechat app for BFSU academic affair, including course selection, score query."
            backgroundImageURL={IMG_bfsu_snow}
            detailURL="https://google.com"
            language={[Language.Python, Language.HTML5, Language.JavaScript, Language.CSS3, Language.Redis]}
        ></Banner>
        <Banner
            title="BFSU Academic Assistant"
            description="A wechat app for BFSU academic affair, including course selection, score query."
            backgroundImageURL={IMG_bfsu_snow}
            detailURL="https://google.com"
            language={[Language.Python, Language.HTML5, Language.JavaScript, Language.CSS3, Language.Redis]}
        ></Banner>
        <Banner
            title="BFSU Academic Assistant"
            description="A wechat app for BFSU academic affair, including course selection, score query."
            backgroundImageURL={IMG_bfsu_snow}
            detailURL="https://google.com"
            language={[Language.Python, Language.HTML5, Language.JavaScript, Language.CSS3, Language.Redis]}
        ></Banner>
    </div>
    , document.getElementById("root"))
