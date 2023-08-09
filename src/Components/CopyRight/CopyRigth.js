import React from 'react';
import './CopyRigth.css'

const CopyRigth = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='p-2 copyRigth'>© Copyright {currentYear}
            - All Rights Reserved -
            <a href="https://github.com/David-fStack">David-fStack</a>
        </div>
    );
};

export default CopyRigth;
