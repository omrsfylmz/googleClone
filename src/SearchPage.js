import React from 'react'
import { Link } from 'react-router-dom'
import './SearchPage.css'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Search from './components/Search'
import useGoogleSearch from './useGoogleSearch'
import { useStateValue } from './StateProvider'

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue()

  const { data } = useGoogleSearch(term)

  return (
    <div className="search-page">
      <div className="search-pageHeader">
        <Link to="/">
          <img
            className="search-pageLogo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="search-pageHeaderBody">
          <Search hideButtons />

          <div className="searchPage-options">
            <div className="searchPage-optionsLeft">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage-option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage-option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage-option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage-option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage-optionsRight">
              <div className="searchPage-option">
                <Link to="/settings"> Settings</Link>
              </div>
              <div className="searchPage-option">
                <Link to="/tools"> Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data && (
        <div className="searchPage-results">
          <p className="searchPage-resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage-result">
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={item.link} target="_blank">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} <ArrowDropDownIcon />
              </a>
              <a className="searchPage-resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage-resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
