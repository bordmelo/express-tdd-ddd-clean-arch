import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should return default content type as JSON', async () => {
    app.get('/test-content-type', (req, res) => {
      res.json()
    })
    await request(app)
      .get('/test-content-type')
      .send()
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced', async () => {
    app.get('/test-content-type-xml', (req, res) => {
      res.type('xml')
      res.json()
    })
    await request(app)
      .get('/test-content-type-xml')
      .send()
      .expect('content-type', /xml/)
  })
})
