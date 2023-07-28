import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import http from '../../../http';
import ITag from '../../../interfaces/ITag';
import IRestaurante from '../../../interfaces/IRestaurante';

const FormularioPratos = () => {
  const [nomePrato, setNomePrato] = useState('');
  const [descricao, setDescricao] = useState('');

  const [tag, setTag] = useState('');
  const [restaurante, setRestaurante] = useState('');

  const [imagem, setImagem] = useState<File | null>(null);

  const [tags, setTags] = useState<ITag[]>([]);
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    http
      .get<{ tags: ITag[] }>('/v2/tags/')
      .then((resposta) => setTags(resposta.data.tags));
    http
      .get<IRestaurante[]>('/v2/restaurantes/')
      .then((resposta) => setRestaurantes(resposta.data));
  }, []);

  const selecionarArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImagem(e.target.files[0]);
    } else {
      setImagem(null);
    }
  };

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const formData = new FormData();

    formData.append('nome', nomePrato);
    formData.append('descricao', descricao);

    formData.append('tag', tag);

    formData.append('restaurante', restaurante);

    if (imagem) {
      formData.append('imagem', imagem);
    }

    http
      .request({
        url: '/v2/pratos/',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      })
      .then(() => {
        setNomePrato('');
        setDescricao('');
        setTag('');
        setRestaurante('');
        alert('Prato cadastrado com sucesso!');
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <>
      <Box>
        <Container maxWidth="lg" sx={{ marginTop: 1 }}>
          <Paper sx={{ padding: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h6">
                Formulário de Pratos
              </Typography>

              <Box
                component="form"
                sx={{ width: '100%' }}
                onSubmit={aoSubmeterForm}
              >
                <TextField
                  value={nomePrato}
                  onChange={(e) => setNomePrato(e.target.value)}
                  label="Nome do Restaurante"
                  variant="standard"
                  fullWidth
                  required
                  margin="dense"
                />
                <TextField
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  label="Descricao do Restaurante"
                  variant="standard"
                  fullWidth
                  required
                  margin="dense"
                />

                <FormControl margin="dense" fullWidth>
                  <InputLabel id="select-tag">Tag</InputLabel>
                  <Select
                    labelId="select-tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  >
                    {tags.map((tag) => (
                      <MenuItem value={tag.value} key={tag.id}>
                        {tag.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth>
                  <InputLabel id="select-restaurante">Restaurante</InputLabel>
                  <Select
                    labelId="select-restaurante"
                    value={restaurante}
                    onChange={(e) => setRestaurante(e.target.value)}
                  >
                    {restaurantes.map((restaurante) => (
                      <MenuItem value={restaurante.id} key={restaurante.id}>
                        {restaurante.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <input type="file" onChange={selecionarArquivo} />

                <Button
                  sx={{ marginTop: 1 }}
                  type="submit"
                  variant="outlined"
                  fullWidth
                >
                  Salvar
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default FormularioPratos;
