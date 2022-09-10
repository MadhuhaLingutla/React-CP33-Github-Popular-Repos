// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {item, highlightLanguage, changeSelectedLanguage} = props
  const {id, language} = item

  const buttonClassName =
    highlightLanguage === id
      ? 'language-button selected-button'
      : 'language-button'

  const onClickLanguage = () => {
    changeSelectedLanguage(id)
  }

  return (
    <li className="language-item">
      <button
        className={buttonClassName}
        type="button"
        onClick={onClickLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
