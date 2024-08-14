import React, {FC} from 'react';

interface IProps{
    page: string
}

const PaginationComponent:FC<IProps> = ({page}) => {
    return (
        <div>
            <button>Previous page</button>
            <div>{page}</div>
            <button>Next page</button>
        </div>
    );
};

export default PaginationComponent;