import {NODULES} from './mock-nodules';
import {Injectable} from 'angular2/core';

@Injectable()
export class NoduleService {
    getNodules() {
        return NODULES;
    }
}