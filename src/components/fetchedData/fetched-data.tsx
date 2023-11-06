"use client";
import Pagination from "../utils/pagination/pagination";
import TopList from "@/components/TopList/TopList";
import { useState, useEffect } from "react";
import { FetchingData } from "@/libs/api-libs";

const FetchedData = ({ resource, query, href }: any) => {
  const [page, setPage] = useState(1);
  const [datas, setDatas]: any = useState([]);
  const fetchData = async () => {
    const data = await FetchingData(`${resource}`, `${query}${page}`);
    setDatas(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return datas.data ? (
    <div>
      <TopList api={datas.data} href={href} />
      <Pagination
        setPage={setPage}
        page={page}
        maxPage={datas.pagination?.last_visible_page}
      />
    </div>
  ) : null;
};

export default FetchedData;
