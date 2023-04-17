import bcrypt from 'bcrypt'

import {
  createUser,
  getAll,
  getOne,
  deleteUser,
  update
} from '../repositories/user.repository.js'
import { userValidation } from '../validations/user.validation.js'

export const create = async (req, res) => {
  try {
    await userValidation.validate(req.body)

    const hashed = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashed

    const user = await createUser(req.body)
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const get = async (req, res) => {
  try {
    const users = await getAll()
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await getOne(id)

    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await update(id, req.body)

    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const deleteUserbyId = async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteUser(id)

    res.status(200).send()
  } catch (error) {
    res.status(400).send(error)
  }
}
