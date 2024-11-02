import { selector } from 'recoil'
import { countAtom } from '../atoms/count'

export const evenSelector = selector({
    key: "evenSelector",
    get: function (props){
        const count = props.get(countAtom);
        return count % 2;
    }
})