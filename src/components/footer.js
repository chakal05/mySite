import React from 'react';
import '../assets/styles/footer.scss'
export default function MyFooter(){
return (
    <div className='footerWrapper'>
    <p> {`${new Date().getFullYear()} | Chakir Khaire`} </p>
    
    </div>
)
}