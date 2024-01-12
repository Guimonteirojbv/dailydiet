import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from '@/storage/storageConfig'
import { SnackData } from "./snacksDTO";
import { getAllSnacks } from "./getSnacks";



export async function createSnack(newSnack: SnackData)  {
    try {

        const storadeSnacks = await getAllSnacks()
        
        const storage = JSON.stringify([...storadeSnacks, newSnack]);
        await AsyncStorage.setItem(SNACK_COLLECTION, storage)

    } catch (error) {
        throw error
    }
}

