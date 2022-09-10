import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    languageList: [],
    selectedLanguage: 'ALL',
    isLoading: true,
  }

  componentDidMount() {
    this.getLanguagesList()
  }

  changeSelectedLanguage = id => {
    this.setState({selectedLanguage: id}, this.getLanguagesList)
  }

  getFormatedData = data =>
    data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      starsCount: each.stars_count,
    }))

  getLanguagesList = async () => {
    this.setState({isLoading: true})
    const {selectedLanguage} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log('ResponseData', data)
    const formatedData = this.getFormatedData(data)
    console.log('FormatedData', formatedData)
    this.setState({languageList: formatedData, isLoading: false})
  }

  loadingView = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderRepositoryItems = () => {
    const {languageList} = this.state
    return (
      <ul className="repo-items-container">
        {languageList.map(each => (
          <RepositoryItem item={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, selectedLanguage} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="language-items-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              item={each}
              changeSelectedLanguage={this.changeSelectedLanguage}
              highlightLanguage={selectedLanguage}
              key={each.id}
            />
          ))}
        </ul>
        {isLoading ? this.loadingView() : this.renderRepositoryItems()}
      </div>
    )
  }
}

export default GithubPopularRepos
