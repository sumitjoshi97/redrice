import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleWare from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleWare(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8000, () => console.log('Running on 8000'));