import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware',
        path.join(__dirname, '/client/index.js'),
    
    ],output: {
        path: '/',
        publicPath: '/',
        filename: 'bundle.js'
    },plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel-loader', 'react-hot-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.','.js']
    }
}