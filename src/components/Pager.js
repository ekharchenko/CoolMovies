import React from "react";

const Pager = ({page, onLoadMoreClick }) => {
    return (
        <div className="pager">
            <button type="button" onClick={() => { onLoadMoreClick(page + 1); }}  >
                Load more
            </button>
            
        </div>
    );
};

export default Pager;