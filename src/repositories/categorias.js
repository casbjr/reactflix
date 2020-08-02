/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_APP}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

async function deleteCategory() {
  await fetch(`${URL_CATEGORIES}`, {
    method: 'DELETE',
  })
}

function create(objCategory) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objCategory),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json()
      return resposta
    }

    throw new Error('Não foi possível cadastrar os dados')
  })
}

export default {
  getAllWithVideos,
  getAll,
  deleteCategory,
  create,
};

