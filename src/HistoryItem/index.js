import './index.css'

const HistoryItem = props => {
  const {items, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = items

  const onDeleteBtn = () => {
    onDelete(id)
  }

  return (
    <li className="history-items">
      <div className="left-content">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="app-title">{title}</p>
        <p className="link">{domainUrl}</p>
      </div>
      <div className="del-icon-con">
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
