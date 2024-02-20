import axios from "../interceptor";

export const getAllNews = async (
  pageNumber,
  rowsOfPage,
  sortingCol,
  sortType,
  query
) => {
  try {
    const response = await axios.get(`/News`, {
      params: {
        PageNumber: pageNumber,
        RowsOfPage: rowsOfPage,
        SortingCol: sortingCol,
        SortType: sortType,
        Query: query,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching news data:", error.message);
    throw error;
  }
};
