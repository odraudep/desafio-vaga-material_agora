import axios from 'axios';

export const getSuperheroes = async (req, res) => {
  const offset = Number(req.query.offset) || 1;
  const limit = Number(req.query.limit) || 1;
  let heroes = [];

  if (offset < 1 || limit < 1) {
    return res
      .status(400)
      .json({
        message: 'Provide an offset or limit value greater than 1',
      });
  }

  try {
    for (let count = offset; count < (offset + limit); count++) {
      const { data } = await axios.get(`https://superheroapi.com/api/203294025607288/${count}`);

      heroes = [...heroes, data];
    }

    res.json({ results: heroes });
  } catch (err) {
    res
      .status(500)
      .json({
        message: 'There was an error in the server. Try again later',
      });
  }
};

export const getSuperhero = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(`https://superheroapi.com/api/203294025607288/${id}`);

    res.json(data);
  } catch (err) {
    res
      .status(500)
      .json({
        message: 'There was an error in the server. Try again later',
      });
  }
};

export const searchSuperhero = async (req, res) => {
  const { name } = req.params;

  try {
    const { data } = await axios.get(`https://superheroapi.com/api/203294025607288/search/${name}`);

    res.json(data);
  } catch (err) {
    res
      .status(500)
      .json({
        message: 'There was an error in the server. Try again later',
      });
  }
};
