import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "../storageConfig";


export async function getAllSnacks() {
    try {
        const snacks = await AsyncStorage.getItem(SNACK_COLLECTION)
        const ObjectSnacks = snacks ? JSON.parse(snacks) : []
        return ObjectSnacks
    } catch (error) {
        throw error;
    }
}