import { writable } from "svelte/store";

export const thisName = writable<{ name: string, date: number }>({ name: "", date: 0 })
//export const testA = $state("sas");

/** method yang mengembalikan nama yang di cari apakah ada**/
export const getNama = (name: string): string | undefined => {
  const getName = ClientData.find((n) => n.name.toLowerCase() == name.toLowerCase());
  return getName ? getName?.name : undefined;
}
/** atur nama baru untuk user login**/
export const setName = (name: string) => {
  thisName.set({ name: name, date: Date.now() })
  // this.thisName = name;
  console.log("ss")
}
//sama seperti update name
export const updateName = (str: string) => {
  thisName.update((value) => ({
    ...value,
    name: str.toLowerCase(),
  }));
}


type typeDataClient = {
  name: string

}
export const ClientData: typeDataClient[] = [
  {
    name: "khadafi"
  },
  {
    name: "dar"
  },
  {
    name: "dar0admin"
  }
]

