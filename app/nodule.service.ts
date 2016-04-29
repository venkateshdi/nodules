import {Injectable} from 'angular2/core';
import {Nodule} from './nodule';
import {NODULES} from './mock-nodules';

@Injectable()
export class NoduleService {
    getNodules() {
        return Promise.resolve(NODULES);
    }
}