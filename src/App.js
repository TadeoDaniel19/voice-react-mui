import React from "react";
import { Typography, Grid, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import Footer from './components/footer/index';
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import './App.css';

function App() {
  const commands = [
    {
      command: "Busca múltiple",
      callback: () => {
        window.open("https://www.adidas.mx/");
        window.open("https://www.miniso.com.mx/");
        window.open("https://www.hibobi.com/");
        window.open("https://vertiche.mx/");
        window.open("https://www.cyamoda.com/");
      },
    },
    {
      command: "Ayuda del sitio",
      callback: () => {
        alert(
          '1.- Para mostar todas las páginas que tengo memorizadas di: *Busca multiple*, 2.- Para abrir una pagina en especifico di: *Abre*, 3.- Para cerrar la app di: *salir del sitio*'
        )
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
    console.log('si entra aqui')
    window.open("about:blank", "_self");
    window.close();
  }
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

      </div>
      <Grid>
      <Footer />
      </Grid>

    </div>

  );
}

export default App;
