import { useDispatch, useSelector } from "react-redux";

import { getMatches, matchesLeagueSelector, setLeague } from "@/redux/matches";
import { getRanking } from "@/redux/ranking";

const useMatchesHooks = () => {
  const dispatch = useDispatch();
  const league = useSelector(matchesLeagueSelector);

  const handleSetLeague = (e) => {
    dispatch(setLeague(e.target.value));
    dispatch(getMatches());
    dispatch(getRanking());
  };

  return {
    league,
    handleSetLeague
  };
};

export default useMatchesHooks;
