import React from 'react';
import { useQuery } from 'react-query'
import { useCollection } from 'react-firebase-hooks/firestore';
import { getNewStories } from '../services/storyService'
import firebase from 'firebase'

function Stories() {
    const { data, isLoading, isError, error } = useQuery(['newStories'], getNewStories)
    const [value, loading, error] = useCollection(
        firebase.firestore().collection('hooks'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    return (
        <div>
            These are the stories
        </div>
    );
}

export default Stories;