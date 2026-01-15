import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { commitResponseStructure } from "../types/githubApiTypes";

const useCommitHistroyQuery = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["commits"],
    queryFn: () => getCommits(),
  });
  //realized this would return an empty array if I hadnt made any public commits recently
  const getCommits = async (): Promise<commitResponseStructure> => {
    const response = await axios.get(
      "https://api.github.com/users/zahmadgit/events/public"
    );
    // console.log(response.data);
    return response;
  };

  return { data, isPending, error };
};

export default useCommitHistroyQuery;
