import { atom, selector } from "recoil";
import axios from 'axios'

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            await new Promise(resolve => setTimeout(resolve, 5000))
            const response = await axios.get("http://localhost:3000/data")
            return response.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})