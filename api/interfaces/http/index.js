const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./routes')

const start = ({
  config,
  database,
  logger,
  services
}) => {
  const { corsConfig, serverConfig } = config
  const app = express()
  app.disable('x-powered-by')
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(helmet())
  app.use(cors(corsConfig))

  app.use(routes.map((route) => {
    return route({
      services,
      logger
    })
  }))

  // Listening
  const server = app.listen(serverConfig.port, () => {
    logger.info(`datastream listening on port ${serverConfig.port}`)
  })

  // Avoid dropping requests with 502s when restarting workers
  process.on('SIGTERM', () => {
    if (server) {
      // TODO check with keep-alive if it prevents closing app
      server.close()
    }

    process.exit(0)
  })

  app.on('close', () => {
    database.close()
  })

  return app
}

module.exports.start = start