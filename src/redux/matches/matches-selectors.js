import { createSelector } from "reselect";

export const matchesSelector = (state) =>
  state && state.matches;

export const matchesWeekSelector = createSelector(
  [matchesSelector],
  (matches) => matches.week
);

export const matchesLeagueSelector = createSelector(
  [matchesSelector],
  (matches) => matches.league
);

export const matchesIsLoadingSelector = createSelector(
  [matchesSelector],
  (matches) => matches.isLoading
);

export const matchesWeeksSelector = createSelector(
  [matchesSelector],
  (matches) => matches.weeks || []
);

export const matchesDataSelector = createSelector(
  [matchesWeeksSelector, matchesWeekSelector],
  (matchesWeeks, week) => matchesWeeks[week - 1]?.data || []
);

export const matchesTitlesSelector = createSelector(
  [matchesWeeksSelector],
  (matchesWeeks) => matchesWeeks.map((week) => week.title) || []
);

export const matchesWeeksLengthSelector = createSelector(
  [matchesWeeksSelector],
  (matchesWeeks) => matchesWeeks.length
);
