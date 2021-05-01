
import { newStoryIdsEndpoint, storyEndpoint } from '../config/endpoints'
import http from './httpService'

export const getNewStoryIds = async () => {
    const { data } = await http.get(newStoryIdsEndpoint)
    return data
}
/**
 * 
 * @param {[number]} storyIds The number of story Ids
 * @param {*} page Current Page Number
 * @param {*} limit Number of data to query
 * @returns List of stories
 */

export const getStories = async (storyIds, page, limit = 20) => {
    
    const stories = await Promise
        .all(storyIds.slice(limit * (page - 1), limit * page)
            .map(async id => {
                const { data } = await http.get(storyEndpoint(id));
                return data;
            }));

    return stories;
}