import { prisma } from '../services/prisma.js'

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true
    }
  })

  return user
}

export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: false,
      updatedAt: false
    }
  })
  return users
}

export const getOne = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: false,
      updatedAt: false
    }
  })

  return user
}

export const update = async (id, data) => {
  const user = await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: false,
      updatedAt: false
    }
  })

  return user
}

export const deleteUser = async (id) => {
  await prisma.user.delete({
    where: { id }
  })

  return
}
