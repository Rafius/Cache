import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMatches, matchesDataSelector, matchesIsLoadingSelector, matchesLeagueSelector, matchesTitlesSelector, matchesWeekSelector, setLeague, setWeek } from "@/redux/matches";
import { getRanking } from "@/redux/ranking";

const useMatchesHooks = () => {

    const matchesData = useSelector(matchesDataSelector);
    const isLoading = useSelector(matchesIsLoadingSelector);
    const week = useSelector(matchesWeekSelector);
    const titles = useSelector(matchesTitlesSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (matchesData.length || isLoading) return;
        dispatch(getMatches());
    }, [matchesData, isLoading, dispatch, getMatches]);


    const handleSelect = (e) => {
        dispatch(setWeek(parseInt(e.target.value)));
    };

    return {
        week,
        titles,
        isLoading,
        matchesData,
        handleSelect,
    };
};

export default useMatchesHooks;
