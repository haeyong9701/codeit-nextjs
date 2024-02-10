import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <h1>Search 페이지</h1>
      <h2>{q} 검색 결과</h2>
    </div>
  );
};

export default Search;
