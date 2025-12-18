import { ErrorBox } from "./ErrorBox";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const Content = ({ status = "initial", repositories = [] }) => {
  switch (status) {
    case "initial":
      return null;
    case "loading":
      return <Loading />;
    case "success":
      return <Repositories repositories={repositories} />;
    case "error":
      return <ErrorBox />;
    default:
      throw new Error(`Incorrect status: ${status}`);
  }
};

