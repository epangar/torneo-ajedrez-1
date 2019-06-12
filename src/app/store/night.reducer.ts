import { createReducer, on } from '@ngrx/store';
import { hardAlcohol, bored, beer } from './night.actions';
//import { initialState } from './night.state';
import { Action } from 'rxjs/internal/scheduler/Action';

export const initialState = 0

export const nightReducer = createReducer( initialState,
    on(hardAlcohol, state => state),
    on(beer, state => { console.log('this is Action', hardAlcohol)
    return  state}),
    on(bored, state => state)
    );
