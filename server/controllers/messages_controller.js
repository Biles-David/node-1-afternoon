let messages = [];
let id = 0;

const createMessage = (req, res, next) => {
  const { text, time } = req.body;
  messages.push({ id, text, time });
  id++;
  res.status(200).json( messages )
}

const readMessage = (req, res, next) => {
  res.status(200).json( messages )
}

const updateMessage = (req, res, next) => {
  const { text } = req.body;
  const messageIndex = messages.findIndex( message => +message.id === +req.params.id);
  let message = messages[messageIndex];

  messages[ messageIndex ] = {
    id: message.id,
    text: text|| message.text,
    time: message.time
  };
  res.status(200).json( messages )
}

const deleteMessage = (req, res, next) => {
  messageIndex = messages.findIndex( message => +message.id === +req.params.id);
  messages.splice(messageIndex, 1);
  res.status(200).json( messages );
}


module.exports = {
  createMessage,
  readMessage,
  updateMessage,
  deleteMessage
}