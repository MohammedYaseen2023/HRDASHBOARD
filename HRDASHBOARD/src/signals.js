import { signal, computed } from "@preact/signals-react";

// export const counterSignal = signal(0);
// export const firstName = signal("");
// export const lastName = signal("");
export const FromDate = signal(new Date());
export const ToDate = signal(new Date());
export const FromToDate = computed(() => `${FromDate.value} ${ToDate.value}`);
export const AttendData = signal();
export const  AttendCount =signal();
export const AbsenceCount = signal();

export const globalData = signal({
    
});

export const  LateCount = signal();
 

