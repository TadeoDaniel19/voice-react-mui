import React from "react";
import { Typography, Grid, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import Footer from './components/footer/index';
import SimpleModal from './components/modal/index';
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
  const commands = [
    {
      command: "Busca múltiple *",
      callback: (answer) => {
        window.open(`https://www.adidas.mx/${answer}`);
        window.open(`https://www.miniso.com.mx/${answer}`);
        window.open(`https://www.hibobi.com/${answer}`);
        window.open(`https://vertiche.mx/${answer}`);
        window.open(`https://www.cyamoda.com/${answer}`);
      },
    },
    {
      command: "Busca adidas *",
      callback: (answer) => {
        window.open(`https://www.adidas.mx/${answer}`);

      },
    },
    {
      command: "Busca miniso *",
      callback: (answer) => {
        window.open(`https://www.miniso.com.mx/${answer}`);

      },
    },
    {
      command: "Busca hibobi *",
      callback: (answer) => {
        window.open(`https://www.hibobi.com/${answer}`);

      },
    },
    {
      command: "Busca vertiche *",
      callback: (answer) => {
        window.open(`https://vertiche.mx/${answer}`);

      },
    },
    {
      command: "Busca c a *",
      callback: (answer) => {
        window.open(`https://www.cyamoda.com/${answer}`);

      },
    },
    {
      command: "Ayuda del sitio",
      callback: () => {
/*         alert(
          '1.- Para mostar todas las páginas que tengo memorizadas di: *Busca multiple (seguido de la palabra clave)*, 2.- Para abrir una pagina en especifico di: *Abre*, 3.- Para cerrar la app di: *salir del sitio*'
        ) */
        handleOpen()
      },
    },
    {
      command: "Abre *",
      callback: (website) => {
        window.open(`https://www.${website}.com`);
      },
    },
    {
      command: "Salir del sitio",
      callback: () => {
        handleCloseWindow()
      },
    }
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const handleCloseWindow = () => {
    if (window.confirm("¿Deseas salir?")) {
      window.open("about:blank", "_self");
      window.close();
    }
 
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <div className="App">
        <Grid>
          <Typography style={{paddingBottom: '30px'}} color="secondary" variant="h4">Buscador Web</Typography>
        </Grid>
        <Grid>
          <Typography variant="body1">Para conocer las opciones por favor di *Ayuda del sitio* </Typography>
        </Grid>
        <Typography id="transcript" color="secondary" variant="body1">Transcripción: {transcript}</Typography>
        <IconButton aria-label="mic" onClick={SpeechRecognition.startListening}>
            <MicIcon style={{
                width: 60,
                height: 60,
            }}/>
        </IconButton>
        <SimpleModal handleClose={handleClose} open={open}/>
      </div>
      <Grid>
      <Footer />
      </Grid>

    </div>

  );
}

export default App;
