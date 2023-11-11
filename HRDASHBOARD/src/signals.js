import { signal, computed } from "@preact/signals-react";

// export const counterSignal = signal(0);
// export const firstName = signal("");
// export const lastName = signal("");
export const fromDate = signal(new Date());
export const toDate = signal(new Date());
export const fromToDate = computed(() => `${fromDate.value} ${toDate.value}`);
export const AttendData = signal();

export const globalData = signal({
    
})