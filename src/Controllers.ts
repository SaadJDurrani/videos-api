import { Request, Response } from "express";
import UserModel from "./userSchema";
import videoModel from "./videoSchema";

export async function getAllUsers(_req: Request, res: Response) {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.send({ error: error.message });
  }
}

export async function getAllVideos(_req: Request, res: Response) {
  try {
    const videos = await videoModel.find();
    res.send(videos);
  } catch (error: any) {
    console.log(error);
    res.send({ error: error.message });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const user = await UserModel.findOne({ _id: req.params["id"] });
    res.send(user);
  } catch (error: any) {
    console.log(error);
    res.send({ error: error.message });
  }
}
export async function addUserToDb(req: Request, res: Response) {
  try {
    console.log("recieved", req.body);
    const newUser = await UserModel.create(req.body);
    res.send(newUser);
  } catch (error: any) {
    console.log(error);
    res.send({ error: error.message });
  }
}

export async function updateUserLikedArray(req: Request, res: Response) {
  try {
    const { Liked } = req.body;
    console.log("updateeeeeeeeeee");

    const updateUser = await UserModel.findByIdAndUpdate(
      { _id: req.params["id"] },
      { Liked },
      { new: true, runValidators: true }
    );
    console.log(updateUser);
    res.send(updateUser);
  } catch (error: any) {
    res.send({ error: error.message });
  }
}
