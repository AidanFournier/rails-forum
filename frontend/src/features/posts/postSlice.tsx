import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import { RootState } from '../../app/store';

export enum Statuses {
    Initial = "Not fetched",
    Loading = "Loading...",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error"
}
export interface PostState {
    id: number;
    title: string;
    body: string;
    created_at: any;
    updated_at: any;
}
export interface PostsState {
    posts: PostState[];
    status: string;
}

const initialState: PostsState = {
    posts: [
        {
            id: 0,
            title: "",
            body: "",
            created_at: "",
            updated_at: ""
        }
    ],
    status: Statuses.Initial
}