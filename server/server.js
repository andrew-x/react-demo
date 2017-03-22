import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js'

/* creates an express app. */
const app = express();
/* creates our webpack compiler */
const compiler = webpack(webpackConfig);

/* adds webpack to our express app. */
app.use(webpackMiddleware(compiler));

app.use('/*', function(req, res){

  /* send our index.html file for any path requested */
  res.sendFile(path.join(__dirname, '../client/index.html'));

});

/* exports our express app. */
export default app;
