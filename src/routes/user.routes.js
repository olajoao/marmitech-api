import { create, get, getById, deleteUserbyId, updateUser } from '../controllers/user.controller.js'

const userRoutes = (app) => {
  app.get('/user', get)
  app.get('/user/:id', getById)
  app.put('/user/:id', updateUser)
  app.post('/user', create)
  app.delete('/user/:id', deleteUserbyId)
}

export default userRoutes
