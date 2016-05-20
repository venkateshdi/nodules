import {Injectable} from 'angular2/core';
import {Nodule} from './nodule';
import {NODULES} from './mock-nodules';

@Injectable()
export class NoduleService {
    getNodules(): Promise<Nodule[]> {
        console.log(NODULES);
        return Promise.resolve(NODULES);
    }

    getNodule(id: number) {
        return Promise.resolve(NODULES).then(
            nodules => nodules.filter(nodule => nodule.id === id)[0]
        );
    }
}