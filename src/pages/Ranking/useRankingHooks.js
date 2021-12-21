import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRanking, rankingDataSelector, rankingIsLoadingSelector } from "@/redux/ranking";

const useMatchesHooks = () => {

    const ranking = useSelector(rankingDataSelector);
    const isLoading = useSelector(rankingIsLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (ranking.length || isLoading) return;
        dispatch(getRanking());
    }, [ranking, isLoading, dispatch, getRanking]);



    return { isLoading, ranking };
};

export default useMatchesHooks;
