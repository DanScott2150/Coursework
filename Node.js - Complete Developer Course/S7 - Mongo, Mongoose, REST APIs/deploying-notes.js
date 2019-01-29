Heroku Toolbelt:
https://toolbelt.heroku.com

heroku --help

Need to login to terminal locally:
heroku login

SSH keys: 'heroku keys:add'


-- Deploying to Heroku
Need to make tweaks prior to deploying:
  - server.js:
    Change port for server: process.env.PORT

  -package.json:
    npm start script:
        "start": "node server/server.js",
    tell heroku which version of node to use:
    find version via CMD: 'node -v'
        "engines" : {
          "node" : "10.7.0"
        }

-- Create App: 'heroku create'

Add mLab addon, for Mongo support: 'heroku addons:create mongolab:sandbox'

'heroku config' > show env variables. After mLab installed, should have access
to mongo DB as an environment variable, which will show up.

Can now update mongoose.js to update where to connect:
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

'git push heroku master'
-- When creating a heroku app, it auto-creates a heroku remote git

'heroku logs'
Shows error logs if something goes wrong. If things are good, final log should
include message "Started up at port #####"
