export interface PostsState {
    posts: PostList [];
}

export interface PostList {
    id?: string;
    title: string;
    description: string;
}
export const initialState: PostsState= {
    posts: [
        {
            id: '1',
            title: 'Sample Title 1',
            description: 'Sample Description1'
        },
        {
            id: '2',
            title: 'Sample Title 2',
            description: 'Sample Description2'
        }
    ]
}