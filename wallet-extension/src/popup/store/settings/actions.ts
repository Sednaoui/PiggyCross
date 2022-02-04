
/* eslint-disable import/exports-last */
export type GasSpeed = {
    speed: 'fast' | 'standard' | 'slow';
    confidence: 99 | 90 | 80;
}

export const SET_DEFAULT_GAS_SPEED = 'SET_DEFAULT_GAS_SPEED';

type GasActionType = {
    payload: GasSpeed;
    type: typeof SET_DEFAULT_GAS_SPEED;
};

export const setDefaultGasSpeed = (g: GasSpeed): SettingsActionTypes => ({
    payload: g,
    type: SET_DEFAULT_GAS_SPEED,
});

export type SettingsActionTypes = GasActionType;
