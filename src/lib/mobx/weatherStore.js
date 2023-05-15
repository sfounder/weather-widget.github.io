// Core
import { makeAutoObservable } from 'mobx';
import { computedFn } from 'mobx-utils';

export class WeatherStore {
    type = '';
    minTemperature = '';
    maxTemperature = '';
    isFiltered = false;
    selectedDay = {};

    constructor() {
        this
            .getFilteredDays = computedFn((days = []) => {
                const filteredDays = days.filter((day) => {
                    const isCorrectType = this.type
                        ? this.type === day.type
                        : true;
                    const isCorrectMinTemperature = this.minTemperature
                        ? Number(this.minTemperature) <= Number(day.temperature)
                        : true;
                    const isCorrectMaxTemperature = this.maxTemperature
                        ? Number(this.maxTemperature) >= Number(day.temperature)
                        : true;

                    return (
                        isCorrectType
                    && isCorrectMinTemperature
                    && isCorrectMaxTemperature
                    );
                });

                return filteredDays;
            });

        makeAutoObservable(this, {}, { autoBind: true });
    }

    applyFilter(filter) {
        if (filter.type) {
            this.type = filter.type;
        }

        if (filter.minTemperature) {
            this.minTemperature = filter.minTemperature;
        }

        if (filter.maxTemperature) {
            this.maxTemperature = filter.maxTemperature;
        }

        this.isFiltered = true;
    }

    setSelectedDay(day = {}) {
        this.selectedDay = day;
    }

    resetFilter() {
        this.maxTemperature = '';
        this.minTemperature = '';
        this.type = '';
        this.isFiltered = false;
    }
}

export const store = new WeatherStore();
