import { Grid, Input, useTheme } from "@mui/material";
import * as Styled from "./App.styled";
import search from './assets/images/Search.svg';
import caminhao from './assets/images/Caminhao.svg';
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

function App() {
  const theme = useTheme();

  const [cep, setCep] = useState('');

  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  const [naoEncontrado, setNaoEncontrado] = useState(false);

  function buscarCep() {
    if (cep.trim() === '') {
      swal ({
        title: 'Ops! Digite o CEP',
        icone: 'error',
      })
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setNaoEncontrado(false);
    }).catch((erro) => {
      setNaoEncontrado(true);
    });
  }

  function validaCampos() {
    return logradouro && bairro && cidade && logradouro.trim() !== '' && bairro.trim() !== '' && cidade.trim() !== '';
  }

  return (
    <Styled.Container display={'flex'} height={'100%'}>
      <Styled.ContainerBuscador display={'flex'} flexBasis={'50%'} flexDirection={'column'}>
        <Styled.TituloContainer>
          <Styled.Titulo>BuscaCep</Styled.Titulo>
          <Styled.Subtitulo>Encontre endereços em segundos!</Styled.Subtitulo>
        </Styled.TituloContainer>
        <Grid width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Styled.InputCep value={cep} onChange={(e) => setCep(e.target.value)} endAdornment={<Styled.SearchIcon src={search} onClick={() => buscarCep()} />} />
        </Grid>
        <Styled.ResultadoContainer>
          {validaCampos() && !naoEncontrado &&
            <>
              <p>Logradouro: {logradouro}</p>

              <p>Bairro: {bairro}</p>

              <p>Cidade: {cidade}</p>
            </>}

          {
            !validaCampos() && !naoEncontrado &&
            <>
              <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Styled.Happy /> Procura ai...
              </Grid>
            </>
          }

          {naoEncontrado &&
            <>
              <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Styled.Sad /> CEP não encontrado!
              </Grid>
            </>
          }

        </Styled.ResultadoContainer>
      </Styled.ContainerBuscador>
      <Styled.CaminhaoContainer display={'flex'} flexBasis={'50%'} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
        <Styled.Caminhao src={caminhao} />
      </Styled.CaminhaoContainer>
    </Styled.Container>
  );
}

export default App;