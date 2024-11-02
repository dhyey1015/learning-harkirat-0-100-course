import { selector } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "../atoms/atoms";


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: function({get}){
        const networkAtomCount = get(networkAtom);
        const messagingAtomCount = get(messagingAtom);
        const notificationAtomCount = get(notificationsAtom);
        const jobsAtomCount = get(jobsAtom)

        return networkAtomCount + messagingAtomCount + notificationAtomCount + jobsAtomCount;
    }
})