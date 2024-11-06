import type TimeSelect from './time-select.vue';
import type { Component, ExtractPropTypes } from 'vue';
export declare const timeSelectProps: {
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown, undefined, boolean>;
    readonly format: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm", boolean>;
    readonly modelValue: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly editable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly effect: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string) | (() => string) | ((new (...args: any[]) => string) | (() => string))[], unknown, unknown, "light", boolean>;
    readonly clearable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: StringConstructor;
    readonly start: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "09:00", boolean>;
    readonly end: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "18:00", boolean>;
    readonly step: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "00:30", boolean>;
    readonly minTime: StringConstructor;
    readonly maxTime: StringConstructor;
    readonly name: StringConstructor;
    readonly prefixIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
    readonly clearIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => any, boolean>;
};
export type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>;
export type TimeSelectInstance = InstanceType<typeof TimeSelect>;
