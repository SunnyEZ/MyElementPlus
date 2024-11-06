import TimePicker from './src/time-picker';
import CommonPicker from './src/common/picker.vue';
import TimePickPanel from './src/time-picker-com/panel-time-pick.vue';
import type { SFCWithInstall } from 'element-plus/es/utils';
export * from './src/utils';
export * from './src/constants';
export * from './src/common/props';
export declare const ElTimePicker: SFCWithInstall<typeof TimePicker>;
export { CommonPicker, TimePickPanel };
export default ElTimePicker;
