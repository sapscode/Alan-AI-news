import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({ //a hook from material for styling
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    infoCard: {
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'center',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50vh',
        padding: '10% 10%',
        borderRadius: 10,
        color: 'white',
    },
});