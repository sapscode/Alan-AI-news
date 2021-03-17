import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const alanKey = '40d52f6504cf363d9a2100998d2e62522e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticle, setNewsArticle] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, }) => {
                if(command === 'newHeadlines'){
                    setNewsArticle(articles);
                    setActiveArticle(-1);
                }
                if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
            }
        });
    }, []);

    return (
    <div>
        <div className={classes.logoContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C561BAQFzAiAvq0Jg8Q/company-background_10000/0/1565260089604?e=2159024400&v=beta&t=ygcEIMzRHClwTjBwChX2naoGiS2TCeDwozFfEAM73ek" className={classes.alanLogo} alt="logo" />
        </div>
        <NewsCards articles={newsArticle} activeArticle={activeArticle}/>
    </div>
    );
}

export default App;
