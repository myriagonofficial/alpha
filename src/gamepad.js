import GamepadController from 'gamepadcontroller';

export const gamepad = new GamepadController(0 /* takes an index, 0 - 3  */);

export const BUTTONS = {
    A: 0,
    B: 1,
    X: 2,
    Y: 3,
    LEFT_BUMPER: 4,
    RIGHT_BUMPER: 5,
    LEFT_TRIGGER: 6,
    RIGHT_TRIGGER: 7,
    BACK: 8,
    START: 9,
    LEFT_STICK: 10,
    RIGHT_STICK: 11,
    DPAD_UP: 12,
    DPAD_DOWN: 13,
    DPAD_LEFT: 14,
    DPAD_RIGHT: 15,
    XBOX: 16
}

export const DIRECTIONS = {
    UP: 12,
    DOWN: 13,
    LEFT: 14,
    RIGHT: 15
}

gamepad.onDirection = (callback) => {
    const AXIS_THRESOLD = 0.95;
    gamepad.onStickMove(0, e => {
        if (e.current.y < -AXIS_THRESOLD) callback(DIRECTIONS.UP)
        if (e.current.y > +AXIS_THRESOLD) callback(DIRECTIONS.DOWN)
        if (e.current.x < -AXIS_THRESOLD) callback(DIRECTIONS.LEFT)
        if (e.current.x > +AXIS_THRESOLD) callback(DIRECTIONS.RIGHT)
    })
    gamepad.onButtonPress(BUTTONS.DPAD_UP, () => callback(DIRECTIONS.UP));
    gamepad.onButtonPress(BUTTONS.DPAD_DOWN, () => callback(DIRECTIONS.DOWN));
    gamepad.onButtonPress(BUTTONS.DPAD_LEFT, () => callback(DIRECTIONS.LEFT));
    gamepad.onButtonPress(BUTTONS.DPAD_RIGHT, () => callback(DIRECTIONS.RIGHT));
}

gamepad.removeOnDirection = () => {
    gamepad.removeOnStickMove(0)
    gamepad.removeOnButtonPress(BUTTONS.DPAD_UP);
    gamepad.removeOnButtonPress(BUTTONS.DPAD_DOWN);
    gamepad.removeOnButtonPress(BUTTONS.DPAD_LEFT);
    gamepad.removeOnButtonPress(BUTTONS.DPAD_RIGHT);
}