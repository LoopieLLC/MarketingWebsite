const express = require('express');

const app = express();
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

(function() {
  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : __dirname + '/webpack.config.js');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require('webpack-dev-middleware')(compiler, {
    logLevel: 'warn', publicPath: webpackConfig.output.publicPath,
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require('webpack-hot-middleware')(compiler));

  // Email handling
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.post('/send-email', function(req, res) {
    let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'loopiellcdev@gmail.com',
        pass: '',
      },
    });
    let mailOptions = {
      from: 'Loopie LLC <loopiellcdev@gmail.com>', // sender address
      to: 'loopiellcdev@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.body, // plain text body
      html: '<b>NodeJS Email Tutorial</b>', // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.render('index');
    });
  });

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(8080, function(err) {
    if (err) {
      return console.error(err);
    }

    console.log('Listening at http://localhost:8080/');
  });
}());
