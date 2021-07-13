// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const amqp = require("amqplib");

const SERVER_NAME = "localhost";

export default async function (req, res) {
  if (req.method === "POST") {
    const { room, data } = req.body;

    try {
      const conn = await amqp.connect(`amqp://${SERVER_NAME}`);
      const channel = await conn.createChannel();

      const q = await channel.assertQueue(room, { durable: true });

      channel.sendToQueue(q.queue, Buffer.from(JSON.stringify(data)));

      setTimeout(() => {
        conn.close();
      }, 500);

      res.status(200).json({ room, data });
    } catch (error) {
      console.log(error);
      res.status(404).send(error);
    }
  }
}
