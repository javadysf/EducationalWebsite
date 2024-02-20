import { useParams } from "react-router-dom";
import NewsPage from "./../components/News/NewsPage";

const News = () => {
  const params = useParams();
  return <NewsPage initCategory={params.initCategory} />;
};

export default News;
