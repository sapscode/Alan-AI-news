import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

const alanKey = '40d52f6504cf363d9a2100998d2e62522e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'testCommand'){
                    alert('This code is executed')
                }
            }
        });
    }, []);

    return (
    <div className="App">
        <h1>Alan AI News</h1>
    </div>
    );
}

export default App;
