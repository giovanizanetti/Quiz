import { useTranslation } from 'react-i18next'
import { capitalize } from '../helpers/strings'

export const NotFound: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>404 - {capitalize(t('pageNotFound'))}</h1>
      <p>{t('notFoundMessage')}</p>
    </div>
  )
}