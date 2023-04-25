import './index.css'

const HistoryItem = (props) => {
    const {eachItem,deleteHistoryItem} = props
    const {timeAccessed,logoUrl,title,domainUrl,id} = eachItem

    const onClickingDeleteButton = () => {
        deleteHistoryItem(id)
      }

    return(
        <div>
            <div className='items-list'>
                <p>{timeAccessed}</p>
                <img src={logoUrl} className='icon-image' alt='logo'/>
                <p className='title-name'>{title}</p>
                <p className='url'>{domainUrl}</p>
                <button className='delete-button' type='button' onClick={onClickingDeleteButton}><img src='https://assets.ccbp.in/frontend/react-js/delete-img.png' alt='delete'/></button>
            </div>
        </div>
    )
}

export default HistoryItem