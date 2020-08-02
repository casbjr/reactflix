import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import BeatLoader from 'react-spinners/BeatLoader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import config from '../../../config'
import categoryRepository from '../../../repositories/categorias'
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'

function Categoria() {
  const initialValues = {
    titulo: '',
    cor: '',
    link_extra: {
      text: '',
      url: '',
    },
  }
  const { values, handleChange, clearForm } = useForm(initialValues)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`${config.URL_APP}/categorias`).then(async (responseServer) => {
      const response = await responseServer.json()

      setCategories([...response])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    try {
      categoryRepository
        .create({
          titulo: values.titulo,
          cor: values.cor,
          descricao: values.descricao,
        })
        .then(() => {
          setCategories([...categories, values])
          clearForm()
          toast.success('Categoria cadastrada com sucesso', {
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
      toast.error('Não foi possível cadastar a categoria. :(', {
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

  async function handleDelete(id) {
    try {
      await fetch(`${config.URL_APP}/categorias/${id}`, {
        method: 'DELETE',
      })

      const updatedList = categories.filter((item) => item.id !== id)
      setCategories(updatedList)

      toast.success('Categoria apagada com sucesso!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } catch (error) {
      toast.error('Não foi possivél apagar. Entre em contato com o administrador.', {
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

  const { titulo, cor } = values

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Nova categoria</h1>
        <FormField
          id="titulo"
          label="Nome da Categoria"
          name="titulo"
          type="text"
          value={titulo}
          onChange={handleChange}
        />

        <FormField
          id="descricao"
          label="Descrição da Categoria"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          id="cor"
          label="Cor"
          name="cor"
          type="color"
          value={cor}
          onChange={handleChange}
        />
        <Button type="submit" >Cadastrar</Button>
        <ToastContainer />
      </form>

      {categories.length === 0 && (
        <Loading>
          <BeatLoader size={50} color={'#DC1A28'} />
        </Loading>
      )}
      <Table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <Th>Apagar</Th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={index}>
                <td>{category.titulo}</td>
                <td>{category.descricao}</td>
                <Td>
                  <Button className="btn-delete">
                    <MdDelete
                      size={25}
                      onClick={() => handleDelete(category.id)}
                    />
                  </Button>
                </Td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </PageDefault>
  )
}

export default Categoria

const Loading = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
`

const Th = styled.th`
  text-align: center !important;
`

const Td = styled.td`
  text-align: center !important;
  .btn-delete {
    color: var(--primary);
    background: var(--danger);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-edit {
    color: var(--darkgray);
    background: var(--danger);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`

const ButtonCategory = styled.div`
  .btn-salvar {
    background: var(--primary);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-limpar {
    background: var(--blackLighter);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`

const Table = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  background-color: var(--grayMedium) ;
  tr:nth-child(even){background-color: var(--grayLight);}
  tr:hover {background-color: #666666;}
  overflow:hidden;
  border: 1px solid var(--black);
  border-collapse: collapse;
  border-radius: 25px !important;
  -webkit-border-radius: 25px;
       -moz-border-radius: 25px;
            border-radius: 25px;
  width: 100%;
  margin: 20px 0;
  thead tr th {
    padding: 15px;
  }
  thead {
    color: var(--primary);
    background-color: #666666 ;
  }
  td,
  th {
    text-align: left;
    padding: 10px;
    color: black
  }
`