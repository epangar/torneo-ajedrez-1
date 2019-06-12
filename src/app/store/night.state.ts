import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface NightState {
  night: number
  };


export const initialState: NightState = {
    night: 0
};

export const ValuesFeatureSelector = createFeatureSelector('night');

 //export const DataValueFeatureSelector = createSelector((state: NightState) => state);
