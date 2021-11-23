
import React from 'react';
import { SkeletonItem, SkeletonInfo, SkeletonAmount, SkeletonDate, SkeletonTitle } from './SkeletonStyled';

const Skeleton:React.FC = () => {

    return (
        <SkeletonItem>
            <SkeletonInfo>
                <SkeletonDate/>
                <SkeletonTitle />
            </SkeletonInfo>
            <SkeletonAmount />

        </SkeletonItem>
    )
}

export default Skeleton