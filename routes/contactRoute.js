    import { Router } from 'express';
    const router = Router();
    import Contact from '../models/Contact.js';

    // create contact
    router.post('/', async (req, res) => {
        try {
            const { name, email, message } = req.body;
            const newContact = new Contact({ name, email, message });
            await newContact.save();
            res.status(201).json({
                success: true,
                message: 'Message sent successfully',
                data: newContact,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error sending message',
                error: error.message,
            });
        }
    });

    // Get all messages
    router.get('/', async (req, res) => {
        try {
            const contacts = await Contact.find().sort({ createdAt: -1 });
            res.json({
                success: true,
                data: contacts,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching messages',
                error: error.message,
            });
        }
    });

    // Test route
router.get('/test', (req, res) => {
    res.json({
      success: true,
      message: 'Contact route is working!',
    });
  });

    export default router;