import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './to-do-form.html';

@WithRender
@Component
export default class ToDoForm extends Vue {

	@Prop({ type: String, default: 'Add Task'}) readonly buttonText!: string
	
	public task: string = '';

	public emitTask(): void {
	  this.$emit('added', this.task);
	  this.task = '';
	}
}
