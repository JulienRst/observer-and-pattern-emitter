import { Emitter } from 'strict-event-emitter';

import { AppEvents } from './type';

export type AppEmitter = Emitter<AppEvents>;

const appEmitter = new Emitter<AppEvents>();

export default appEmitter;
