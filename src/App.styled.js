import { Grid, OutlinedInput, styled } from "@mui/material";
import { theme } from "./theme";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoodBadIcon from '@mui/icons-material/MoodBad';

export const Container = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    
    "@media (max-width:800px)":{
        flexDirection: 'column',
        paddingRight: '4rem'
    },
}));

export const ContainerBuscador = styled(Grid)(({ theme }) => ({
    paddingLeft: '4rem',
    alignItems: 'center'
}));

export const TituloContainer = styled(Grid)(({ theme }) => ({
    marginTop: '1rem',
    marginBottom: '2.5rem',

    "@media (max-width:800px)":{
        marginTop: '2.5rem',
        marginBottom: '0.5rem'
    },

    "@media (max-width:1000px)":{
        marginTop: '2.5rem',
        marginBottom: '0.5rem'
    }
}));

export const Titulo = styled('h1')(({ theme }) => ({
   fontSize: '5rem',
   color: theme.palette.primary.contrastText,
   textShadow: '0px 4px 4px rgba(0,0,0,0.25)',

   "@media (max-width:800px)":{
    fontSize: '3rem'
   },

   "@media (max-width:1000px)":{
    fontSize: '3rem'
   },
}));

export const Subtitulo = styled('h2')(({ theme }) => ({
    marginTop: '1rem',
    fontSize: '1.4rem',
    color: theme.palette.primary.contrastText,
    textShadow: '0px 4px 4px rgba(0,0,0,0.25)'
}));

export const InputCep = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '2rem',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    width: '80%',
    marginBottom: '3rem',

    "@media (max-width:800px)":{
        width: '100%',
        marginBottom: '0.5rem'
    },

    "@media (max-width:1000px)":{
        width: '100%',
        marginBottom: '0.5rem'
    },
}));

export const SearchIcon = styled('img')(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '2rem',
    width: '2.5rem',
    padding: '0.6rem',
    marginRight: '-0.8rem',
    cursor: 'pointer'
}));

export const ResultadoContainer = styled(Grid)(({ theme }) => ({
    marginTop: '2rem',
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '1rem',
    padding: '5rem 2rem 5rem 2rem',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    width: '80%',

    "p":{
        fontSize: '1.5rem',
        fontWeight: 800
    },

    "p:first-child":{
        marginBottom: '1rem'
    },

    "p:last-child":{
        marginTop: '1rem'
    },

    "@media (max-width:800px)":{
        "p":{
            fontSize: '1rem',
            fontWeight: 500
        },
        width: '100%',
        padding: '2.5rem 2rem 2.5rem 2rem'
    },

    "@media (max-width:1000px)":{
        "p":{
            fontSize: '1rem',
            fontWeight: 500
        },
        width: '100%',
        padding: '2.5rem 2rem 2.5rem 2rem'
    }
}));

export const CaminhaoContainer = styled(Grid)(({ theme }) => ({
    "@media (max-width:800px)":{
        justifyContent: 'center',
        width: '100%',
        margin: 'auto',
        paddingLeft: '4rem'
    },

    "@media (max-width:1000px)":{
        justifyContent: 'center',
        width: '100%',
        margin: 'auto'
    }
}));

export const Caminhao = styled('img')(({ theme }) => ({
    "@media (max-width:800px)":{
        width: '10rem',
        margin: 'auto'
    },

    "@media (max-width:1000px)":{
        width: '10rem',
        margin: 'auto'
    }
}));

export const Happy = styled(EmojiEmotionsIcon)(({ theme }) => ({
    fill: theme.palette.secondary.main,
    fontSize: '5rem',
    marginBottom: '0.5rem'
}));

export const Sad = styled(MoodBadIcon)(({ theme }) => ({
    fill: theme.palette.secondary.main,
    fontSize: '5rem',
    marginBottom: '0.5rem'
}));