const connection = require("../database/connection");
const crypto = require("crypto"); //LIB NATIVA DO NODE

module.exports = {
  //CRIA AS ONGS NO BANCO
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    //CRIANDO O ID DA TABEL ONGS
    const id = crypto.randomBytes(4).toString("HEX");

    //AGUARDA O CODIGO DO AWAIT FINALIZAR, PARA ENTÃO CONTINUAR
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    return response.json({ id });
  },
  //LISTA TODAS AS ONGS
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },
};
