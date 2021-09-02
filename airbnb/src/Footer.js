import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>© 2021 ! No rights reserved </p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default React.memo(Footer);