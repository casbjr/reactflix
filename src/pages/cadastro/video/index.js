/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values, clearForm  } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);


  function handleSubmit(event) {
    event.preventDefault()
    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria
    })
    try {
      videosRepository
        .create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
        .then(() => {
          //history.push('/')
          clearForm()
          toast.success('Vídeo cadastrado com sucesso', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        })
      } catch (error) {
        toast.error('Verifique os dados ou cadastre uma nova categoria', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }
  }

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Novo vídeo</h1>

        <FormField
          id="titulo"
          label="Título do vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          id="url"
          label="Link do vídeo"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          id="categoria"
          label="Escolha uma categoria"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <br />
      <Button>
        <Link to="/cadastro/categoria" style={{ textDecoration: 'none' }}>
          Cadastrar Categoria
        </Link>
      </Button>
      <br />

      <ToastContainer />
      <br />
    </PageDefault>
  )
}

export default CadastroVideo;

