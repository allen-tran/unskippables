import React from 'react'

export default function Footer() {
    const style = {
        // backgroundColor: "#4e605e",
        // borderTop: "2px solid #4e605e",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }
    
    const phantom = {
        display: 'block',
        justifyContent: 'center',
        padding: '20px',
        height: '50px',
        width: '100%',
    }
  return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <div>made with <span>♥</span> by allen tran</div>
            </div>
        </div>
  )
}
