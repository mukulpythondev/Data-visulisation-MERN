import express from 'express';
import cors from 'cors';
import reportRouter from './routes/index.js';
import { mongoDB } from './database/index.js';

const app = express();

    
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

    
mongoDB();

    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

    
app.use("/api/data", reportRouter);

    
app.get("/", (req, res) => {
    return res.send(`<div style="background:magenta;padding:100px;"><h2>Welcome to Data Virtualization Server</h2>
    <p>Below are some examples of supported routes...</p>
    <div><ul>
        <li>GET all data from the database - /api/data</li>
        <li>GET data filtered by year - /api/data/year/:year</li>
        <li>GET data filtered by region - /api/data/region/:region</li>
        <li>Much more...</li>
    </ul></div>
</div>`);
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is active on Port ${PORT}`);
});
