import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { BlogGridView } from '@/types/pages/blogTypes';

interface BlogTypeDe {
    blogposts: BlogGridView[];
    recentPosts: BlogGridView[];
    blogSearch: string;
    sortBy: string;
    selectedPost: BlogGridView[] | any;
}

export const useBlogGridStore = defineStore({
    id: 'Blog',

    state: (): BlogTypeDe => ({
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
                const data = await axios.get('/api/data/blog/BlogPosts');
                this.blogposts = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchPost(title: string) {
            try {
                const response = await axios.post('/api/data/blog/post', { title });
                this.selectedPost = response.data.post;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
