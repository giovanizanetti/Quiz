import { LEVEL } from '../constants'
import { TLevel } from '../store/quizSlice'

export const getQuestionsCount = (difficulty: TLevel) =>
  difficulty == LEVEL.easy ? 5 : difficulty == LEVEL.medium ? 1 : 15
