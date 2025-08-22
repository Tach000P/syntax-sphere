import { IPost } from "@/interfaces/post.interface";
import axios from "axios";
import { posts } from "./db";

// axios.defaults.baseURL = process.env.API_URL;

export const PostService = {
  // async getAll(type?: string) {
  //   const { data } = await axios.get<IPost[] | []>("/posts");
  //   return type ? data.filter((post) => post.type === type) : data;
  // },

  // async getByID(id: string) {
  //   const { data } = await axios.get<IPost[] | undefined>("/posts", {
  //     params: {
  //       id,
  //     },
  //   });
  //   return data?.[0];
  // },

  async getAll(type?: string) {
    return type ? posts.filter((post) => post.type === type) : posts;
  },
  async getByID(id: string) {
    return posts.find((post) => post.id.toString() === id);
  },
};
