// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const amqp = require("amqplib");

const SERVER_NAME = "localhost";

export default async function getmessages(req, res) {
  if (req.method === "POST") {
    const { room } = req.body;

    try {
      const conn = await amqp.connect(`amqp://${SERVER_NAME}`);
      const channel = await conn.createChannel();

      const q = await channel.assertQueue(room, { durable: true });

      let messages = [];

      await channel.consume(
        q.queue,
        async function (msg) {
          const message = JSON.parse(msg.content.toString());
          messages = [...messages, message];
        },
        { noAck: false }
      );
      conn.close();

      res.status(200).json(messages);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}
