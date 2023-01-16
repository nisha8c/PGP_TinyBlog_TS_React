export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
};

export type Blogdata = {
    id: number,
    titles: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}