import React, { useEffect } from "react";



const Filter = ({ currentRate, rateLimit, onRateClick }) => {

    let items = [];

    for (let i = 0.5, counter = 1; i <= rateLimit; i += 0.5, counter++) {
        items.push({ value: i, selected: currentRate === i, index: counter, className: counter % 2 === 0 ? "" : "half" });
    }

    return (
   
        <div>
            <h3>Filters</h3>
            <fieldset className="rate">

                {items.reverse().map((data) =>
                   data.selected ?
                    (<>
                        <input defaultChecked type="radio" id={"rating" + (data.index)} name="rating" value={data.value} onClick={(e) => onRateClick(e.target.value) } />
                        <label className={data.className} htmlFor={"rating" + (data.index)} title={data.value}></label>
                        </>)
                        :
                        (<>
                            <input  type="radio" id={"rating" + (data.index)} name="rating" value={data.value} onClick={(e) => onRateClick(e.target.value)} />
                            <label className={data.className} htmlFor={"rating" + (data.index)} title={data.value}></label>
                        </>)
                )}

                <input type="radio" id="rating0" name="rating" value="0" onClick={(e) => onRateClick(e.target.value) } />
                <label htmlFor="rating0" title="No star"></label>
            </fieldset> 

        </div>);
};

export default Filter;