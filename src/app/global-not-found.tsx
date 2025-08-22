import { notFound } from "next/navigation";
import { FC } from "react";
import Layout from "@/app/layout";

const NotFound: FC = () => {
  return notFound();
};

export default NotFound;
