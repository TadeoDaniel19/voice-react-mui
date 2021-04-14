import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    margin: '0 auto',
    position: 'relative',
    width: '45%',
    '@media (max-width: 400px)': {
      paddingRight: '25px',
      width: '65%',
      display: 'flex',
      flexWrap: 'nowrap',
    },
  },
  logoMD: {
    display: 'inline-block',
    padding: '5px',
    width: '25%',
    '@media (max-width: 400px)': {
      width: '65%',
      padding: '15px',
    },
  },
  logoVO: {
    display: 'inline-block',
    paddingBottom: '15px',
    width: '15%',
    '@media (max-width: 400px)': {
      width: '45%',
      padding: '15px',
      paddingLeft: '0px',

    },
  },
  title: {
    fontWeight: '600',
    fontSize: '10px',
    padding: '10px',
    '@media (max-width: 400px)': {
      padding: '0',
      marginTop: '20px',
      fontSize: '4px',
      fontWeight: '600',
      flexWrap: 'nowrap',
    },
  },
}));

export default useStyles;
