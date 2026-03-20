import { writable } from 'svelte/store';

export const lanyardStatus = writable({
  imageStatus: "",
  textStatus: ""
});