import React from 'react'
import './Sales.css'

const Sales = () => {
    return (
        <>
            <div className="model" ></div>
            <div className="sec-page-box">
                <div className="nav">
                    <div className="box-text">
                        <h1>Sales Figures</h1>
                    </div>
                    <div className="box-list">
                        <div className="fst-child">
                            <div></div>
                            <p>Sales</p>
                        </div>
                        <div className="sec-child">
                            <div></div>
                            <p>Users</p>
                        </div>
                        <div className="thr-child">
                            <div></div>
                            <p>Product</p>
                        </div>
                        <div className="frt-child">
                            <div></div>
                            <p>Team</p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------- */}
                {/* Making chart  */}

                <div className="chart">
                    <div>
                        <div className="y-axis">
                            <p>1K</p>
                            <p>800</p>
                            <p>600</p>
                            <p>400</p>
                            <p>200</p>
                            <p>0</p>
                        </div>
                        <div className="chart-data"></div>
                    </div>
                    <div className="x-axis">
                        <p>Jan</p>
                        <p>Feb</p>
                        <p>Mar</p>
                        <p>Apr</p>
                        <p>May</p>
                        <p>Jun</p>
                        <p>Jul</p>
                        <p>Aug</p>
                        <p>Sep</p>
                        <p>Oct</p>
                        <p>Nov</p>
                        <p>Dec</p>
                    </div>

                    <div className="blue-bubble">
                        <h1>$27632</h1>
                    </div>
                    <div className="red-bubble">
                        <h1>$27632</h1>
                    </div>
                    <div className="yellow-bubble">
                        <h1>$27632</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sales;