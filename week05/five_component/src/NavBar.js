import React from 'react'
import NavChip from './NavChip'

function NavBar() {
  return (
    <nav>
        <NavChip alt="unsplash.com's favicon" 
                imgUrl="https://www.google.com/s2/favicons?domain=https://unsplash.com" 
                url="https://unsplash.com" 
                title="Unsplash">
        </NavChip>
        <NavChip alt="emojidb.org's favicon" 
                imgUrl="https://www.google.com/s2/favicons?domain=https://emojidb.org" 
                url="https://emojidb.org" 
                title="EmojiDB">
        </NavChip>
        <NavChip alt="icon-sets.iconify.design's favicon" 
                imgUrl="https://www.google.com/s2/favicons?domain=https://icon-sets.iconify.design" 
                url="https://icon-sets.iconify.design" 
                title="Iconify">
        </NavChip>
        <NavChip alt="gradients.shecodes.io's favicon" 
                imgUrl="https://www.google.com/s2/favicons?domain=https://gradients.shecodes.io" 
                url="https://gradients.shecodes.io" 
                title="SheCodes - CSS Gradients">
        </NavChip>
    </nav>
  )
}

export default NavBar
