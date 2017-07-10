import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleWare from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(webpackMiddleWare(webpack(webpackConfig)));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8000, () => console.log('Running on 8000'));