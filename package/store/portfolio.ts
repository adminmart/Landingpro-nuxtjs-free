import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { PortFolioType } from '~/types/pages/PortolioTypes';

interface portfolioTypeDe {
    blogposts: PortFolioType[];
    recentPosts: PortFolioType[];
    blogSearch: string;
    sortBy: string;
    selectedPost: PortFolioType[] | any;
}

export const useBlogStore = defineStore({
    id: 'Portfolio',

    state: (): portfolioTypeDe => ({
        blogposts: [],
        recentPosts: [],
        blogSearch: '',
        sortBy: 'newest',
        selectedPost: []
    }),
    getters: {
        // Get Post from Getters
        getPosts(state) {
            return state.blogposts;
        }
    },
    actions: {
        // Fetch Blog from action
        async fetchPosts() {
            try {
                const data = await axios.get('/api/portfolio');
                this.blogposts = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchPost(title: string) {
            try {
                const response = await axios.post('/api/portfolio', { title });
                this.selectedPost = response.data.post;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
