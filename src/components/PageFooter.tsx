import React from 'react'

const PageFooter = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f8f8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left section with MORENT and paragraphs */}
        <div style={{ textAlign: 'left', marginLeft: '20px', flex: 1 }}>
          <h2 style={{ fontSize: '32px', margin: '0', color: 'blue', fontWeight: 'bold' }}>
            MORENT
          </h2>
          <p style={{ color: 'gray', marginTop: '5px' }}>
            Our vision is to provide convenience.
          </p>
          <p style={{ color: 'gray', marginTop: '5px' }}>
            and help your sales business.
          </p>
        </div>

        {/* Right section with "About", "Community", and "Socials" horizontally aligned */}
        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '20px' }}>
          {/* "About" section with vertical list */}
          <div style={{ marginRight: '40px' }}>
            <h3 style={{ fontSize: '20px', margin: '0' }}>About</h3>
            <div style={{ marginTop: '10px' }}>
              <p style={{ color: 'gray', margin: '5px 0' }}>How it works</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Featured</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Partnership</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Business Relation</p>
            </div>
          </div>

          {/* "Community" section with vertical list */}
          <div style={{ marginRight: '40px' }}>
            <h3 style={{ fontSize: '20px', margin: '0' }}>Community</h3>
            <div style={{ marginTop: '10px' }}>
              <p style={{ color: 'gray', margin: '5px 0' }}>Events</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Blog</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Podcast</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Invite a friend</p>
            </div>
          </div>

          {/* "Socials" section with vertical list */}
          <div style={{ marginRight: '40px' }}>
            <h3 style={{ fontSize: '20px', margin: '0' }}>Socials</h3>
            <div style={{ marginTop: '10px' }}>
              <p style={{ color: 'gray', margin: '5px 0' }}>Discord</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Instagram</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Twitter</p>
              <p style={{ color: 'gray', margin: '5px 0' }}>Facebook</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line at the bottom of the footer */}
      <div style={{ marginTop: '20px' }}>
        <hr style={{ border: '0', borderTop: '1px solid gray', width: '100%' }} />
      </div>

      {/* Copyright, Privacy & Policy, and Terms & Conditions in a single line with gap */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '30px',   /* Increased gap at the top */
        marginBottom: '30px' /* Increased gap at the bottom */
      }}>
        {/* Left side - Copyright */}
        <p style={{ color: 'black', fontWeight: '600', margin: '0' }}>
          ©2022 MORENT. All rights reserved.
        </p>

        {/* Right side - Privacy & Policy and Terms & Conditions */}
        <div style={{ display: 'flex' }}>
          <p style={{ color: 'black', fontWeight: '600', margin: '0 30px 0 0' }}>
            Privacy & Policy
          </p>
          <p style={{ color: 'black', fontWeight: '600', margin: '0' }}>
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageFooter
