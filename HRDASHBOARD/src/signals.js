import { signal, computed } from "@preact/signals-react";

// export const counterSignal = signal(0);
// export const firstName = signal("");
// export const lastName = signal("");
export const fromDate = signal("");
export const toDate = signal("");
export const fromToDate = computed(() => `${fromDate.value} ${toDate.value}`);
