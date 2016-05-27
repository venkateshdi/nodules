import {Injectable} from 'angular2/core';
import {Nodule} from './nodule';
import {NODULES} from './mock-nodules';

import {IDataProvider, MockProvider, LocalStorageProvider} from './provider';

@Injectable()
export class NoduleService {
    provider: IDataProvider;

    getNodules(useMock: Boolean = false): Promise<Nodule[]> {
        if (useMock) {
            this.provider = new MockProvider();
        }
        else this.provider = new LocalStorageProvider();

        // let nodules: any = localStorage.getItem("nodules") 
        //                    || (useMock ? NODULES : null);
        let nodules = this.provider.getData();

        if (nodules)
            return Promise.resolve(nodules);
        else return Promise.resolve(null);
    }

    getNodule(id: number) {
        let nodules = this.provider.getData();
        return Promise.resolve(nodules).then(
            nodules => nodules.filter(nodule => nodule.id === id)[0]
        ).catch(rea => console.log(rea));
    }

    save(nodule: Nodule): Promise<Nodule> {
        if (nodule.id) {
            return this.put(nodule);
        }
        return this.post(nodule);
    }

    private put(nodule: Nodule): Promise<Nodule> {
        this.provider.setData(nodule);
        return Promise.resolve(nodule).then(n => n);
        // .catch(this.handleError)
    }

    private post(nodule: Nodule): Promise<Nodule> {
        return Promise.resolve(nodule).then(n => n);
    }
}