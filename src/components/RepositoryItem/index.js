// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {name, avatarUrl, forksCount, issuesCount, starsCount} = item
  return (
    <li className="repo-item-container">
      <img className="repo-image" src={avatarUrl} alt={name} />
      <h1 className="repo-heading">{name}</h1>
      <div className="repo-details">
        <div className="repo-each-detail">
          <img
            className="details-image"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p className="details-content">{starsCount} stars</p>
        </div>
        <div className="repo-each-detail">
          <img
            className="details-image"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p className="details-content">{forksCount} forks</p>
        </div>
        <div className="repo-each-detail">
          <img
            className="details-image"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p className="details-content">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
