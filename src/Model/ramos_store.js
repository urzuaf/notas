import { writable } from "svelte/store";

const emptyRamosArr = []

let localStorageRamos = window.localStorage.getItem("listaRamos")

localStorageRamos = JSON.parse(localStorageRamos)

export const List = writable(localStorageRamos || emptyRamosArr)