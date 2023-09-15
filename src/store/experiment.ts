import { defineStore } from "pinia";
export interface Experiment {
  selectFirstTime: number;
  errorSelectSum: number;
  selectTrueTimes: number;
}
export interface User {
  studyCode?: string;
  studyName: string;
  email?: string;
  experimentData?: Experiment[];
}
export interface CheckQuestion {
  name: string;
  question1: string;
  question2: string;
  secondCount: number;
}
export interface Radios {
  name: string;
  radio1_1?: number;
  radio1_2?: number;
  radio1_3?: number;
  radio1_4?: number;
  radio1_5?: number;
  radio1_6?: number;
  radio1_7?: number;
  radio2_1?: number;
  radio2_2?: number;
  radio2_3?: number;
  radio2_4?: number;
  radio2_5?: number;
  secondCount: number;
}
export const useExperimentStore = defineStore("experiment", {
  state: () => ({
    userInfo: {} as User,
    experimentData: [] as Experiment[],
    checkQuestion: [] as CheckQuestion[],
    radiosData: {} as Radios,
  }),
  getters: {},
  actions: {
    saveStoreLocal() {
      localStorage.setItem("experiment", JSON.stringify(this.userInfo));
    },
  },
});
