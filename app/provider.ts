import {Nodule} from './nodule';
import {NODULES} from './mock-nodules';

export interface Provider<T>
{
    
}
export interface IDataProvider {
    nodules: Nodule;
    getData(): Nodule[];
    setData(nodule: Nodule): void;
}

export class MockProvider implements IDataProvider {
    nodules: Nodule;
    getData(): Nodule[] {
        let nodule = NODULES;
        return nodule;
    }
    
    setData(nodule: Nodule): void {
        
    }
}

export class LocalStorageProvider implements IDataProvider {
    nodules: Nodule;
    getData(): Nodule[] {
        let nodule = localStorage.getItem("nodules");
        return nodule;
    }
    
    setData(nodule: Nodule): void {
        let all = localStorage.getItem("nodules");
        if(all)
        {
            let ar : any = JSON.parse(all);
            console.log(ar);
        }
        //localStorage.setItem("nodule", JSON.stringify(nodule));
    }
}