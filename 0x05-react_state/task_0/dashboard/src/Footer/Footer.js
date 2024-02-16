import React from 'react'
import "./Footer.css"
import { getFooterCopy, getFullYear } from '../utils/utils';

export default function Footer  () {
  return (
      <div className="App-footer">
          <p>
              Copyright {getFullYear()} - {getFooterCopy()}
          </p>
      </div>
  )
}
