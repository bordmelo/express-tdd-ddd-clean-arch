import { RequestHandler, Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  // TODO: find a way to remove the unknown cast
  router.post('/signup', adaptRoute(makeSignUpController()) as unknown as RequestHandler)
}
