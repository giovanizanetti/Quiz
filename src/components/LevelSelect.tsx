import { capitalize } from '../helpers/strings'
import { useTranslation } from 'react-i18next'
import { LEVEL } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState, TAppDispatch } from '../store'
import { TLevel, selectLevel } from '../store/quizSlice'
import UtilSelector, { ISelectorOption } from './UtilSelector'

const LevelSelect: React.FC = () => {
  const { t } = useTranslation()

  const dispatch: TAppDispatch = useDispatch()

  const level: TLevel = useSelector((state: IRootState) => state.quiz.level)

  const items = Object.values(LEVEL).map((item) => ({
    value: item,
    label: capitalize(t(item)),
  })) as unknown as ISelectorOption[]

  const handleChange = (value: TLevel | string) => dispatch(selectLevel(value))

  return (
    <UtilSelector
      defaultValue={`${level}`}
      onChange={handleChange}
      options={items}
      type="level"
    ></UtilSelector>
  )
}
export default LevelSelect
