export interface IPost {
  id: number;
  name: string;
  image: string;
  description: string;
  categories: Array<String>;
  type: string;
  createdAt: string;
  cover: string;
}

export interface IPostData {
  posts: IPost[] | [];
}

export interface IPostSingle {
  post: IPost | undefined;
}

export interface IPostS {
  post: IPost;
}
