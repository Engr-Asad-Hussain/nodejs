import express from 'express';
import { UserModel } from '../models/users';

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ message: 'User has been created!', users });
  } catch (error) {
    res.status(200).json({ error });
  }
};
