import { LEVEL } from '../constants'
import { TLevel } from '../store/quizSlice'

export const getQuestionsCount = (difficulty: TLevel) =>
  difficulty == LEVEL.easy ? 5 : difficulty == LEVEL.medium ? 10 : 15

export const getInitialTimer = (level: string) => {
  return level == LEVEL.easy ? 15 : level == LEVEL.medium ? 10 : 5
}
