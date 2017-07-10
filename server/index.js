import express from 'express';
import path from 'path';

let app = express();

app.get('/', (req,res) => {
    res.send(path.join(__dirname, './index.html'))
})

app.listen(8000, () => console.log('Running on 8000'));