
import { newStoriesEndpoint } from '../config/endpoints'
import http from './httpService'

export const getNewStories = async () => {
    const { data } = await http.get(newStoriesEndpoint)
    return data
}