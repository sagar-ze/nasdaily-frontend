import React from 'react';
import { useQuery } from 'react-query'
import { getNewStoryIds, getStories } from '../services/storyService'
import Card from './card'

function Stories() {
    const [page, setPage] = React.useState(1)
    const [limit, setLimit] = React.useState(20)

    const {
        data: storyIds,
        error: err,
        isLoading: isStoryIdsLoading,
        isError: errorOnStoryIds,
    } = useQuery(['newStoryIds'], getNewStoryIds)

    const { data, isLoading, isError, error } = useQuery(
        ['newStoryIds', page, limit],
        () => getStories(storyIds, page, limit),
        {
            refetchOnWindowFocus: false,
            enabled: !!(limit * page < 500 && storyIds)
        }
    )


    return (
        <div>
            {/* {JSON.stringify(data)} */}
            <Card />
        </div>
    );
}

export default Stories;