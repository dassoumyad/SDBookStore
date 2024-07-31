import Message from '../modal/Message.js';

export const createMessage = async (req, res) => {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
