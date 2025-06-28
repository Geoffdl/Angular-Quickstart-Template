import { Component, ChangeDetectionStrategy, computed, signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

interface Todo {
    text: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
}

@Component({
    selector: 'app-todo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="mx-auto w-full max-w-md">
            <div class="mb-6 text-center">
                <h2 class="text-primary mb-2 text-2xl font-bold">Todo List</h2>
                <div class="du-stats du-stats-horizontal shadow">
                    <div class="du-stat">
                        <div class="du-stat-title">Total</div>
                        <div class="du-stat-value text-primary">
                            {{ todoCount() }}
                        </div>
                    </div>
                    <div class="du-stat">
                        <div class="du-stat-title">Completed</div>
                        <div class="du-stat-value text-success">
                            {{ completedCount() }}
                        </div>
                    </div>
                </div>
            </div>

            @if (todoCount() === 0) {
                <div class="py-8 text-center">
                    <div class="text-base-content/70 italic">No todos yet! Add one below.</div>
                </div>
            }

            @if (todoCount() > 0) {
                <div class="mb-6 space-y-2">
                    @for (todo of todos(); track todo.text; let i = $index) {
                        <div class="du-card bg-base-200 shadow-sm" [class.opacity-60]="todo.completed">
                            <div class="du-card-body p-4">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" class="du-checkbox du-checkbox-primary" [checked]="todo.completed" (change)="onToggle(i)" />

                                    <span class="text-base-content flex-1" [class.line-through]="todo.completed">
                                        {{ todo.text }}
                                    </span>

                                    @if (todo.priority === 'high') {
                                        <div class="du-badge du-badge-error du-badge-sm">High</div>
                                    } @else if (todo.priority === 'medium') {
                                        <div class="du-badge du-badge-warning du-badge-sm">Medium</div>
                                    } @else {
                                        <div class="du-badge du-badge-success du-badge-sm">Low</div>
                                    }

                                    <button class="du-btn du-btn-error du-btn-sm du-btn-square" (click)="deleteTodo(i)" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }

            <div class="du-card bg-base-100 shadow">
                <div class="du-card-body p-4">
                    <form [formGroup]="todoForm" (ngSubmit)="addTodo()" class="space-y-4">
                        <div class="du-form-control">
                            <label class="du-label" for="todoText">
                                <span class="du-label-text font-medium">Add new todo</span>
                            </label>
                            <input
                                id="todoText"
                                type="text"
                                formControlName="todoText"
                                placeholder="What needs to be done?"
                                class="du-input du-input-bordered w-full"
                                [class.du-input-error]="todoForm.get('todoText')?.invalid && todoForm.get('todoText')?.touched"
                            />
                            @if (todoForm.get('todoText')?.invalid && todoForm.get('todoText')?.touched) {
                                <div class="du-label">
                                    <span class="du-label-text-alt text-error">Please enter a todo item</span>
                                </div>
                            }
                        </div>

                        <div class="du-form-control">
                            <label class="du-label" for="priority">
                                <span class="du-label-text font-medium">Priority</span>
                            </label>
                            <select id="priority" formControlName="priority" class="du-select du-select-bordered w-full">
                                <option value="low">🟢 Low Priority</option>
                                <option value="medium">🟡 Medium Priority</option>
                                <option value="high">🔴 High Priority</option>
                            </select>
                        </div>

                        <button type="submit" class="du-btn du-btn-primary w-full" [disabled]="todoForm.invalid">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Add Todo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `,
    imports: [CommonModule, ReactiveFormsModule],
})
export class TodoComponent {
    initialTodos = input<Todo[]>([]);

    todosChange = output<Todo[]>();

    todos = signal<Todo[]>([
        { text: 'Learn Angular', completed: false, priority: 'high' },
        { text: 'Fix ESLint issues', completed: true, priority: 'medium' },
        { text: 'Write tests', completed: false, priority: 'low' },
    ]);

    todoCount = computed(() => this.todos().length);
    completedCount = computed(() => this.todos().filter((todo) => todo.completed).length);

    todoForm = new FormGroup({
        todoText: new FormControl('', [Validators.required, Validators.minLength(1)]),
        priority: new FormControl<'low' | 'medium' | 'high'>('medium', [Validators.required]),
    });

    constructor() {
        if (this.initialTodos().length > 0) {
            this.todos.set([...this.initialTodos()]);
        }
    }

    addTodo(): void {
        if (this.todoForm.valid) {
            const todoText = this.todoForm.get('todoText')?.value;
            const priority = this.todoForm.get('priority')?.value;

            if (todoText && priority) {
                const newTodo: Todo = {
                    text: todoText,
                    completed: false,
                    priority,
                };

                this.todos.update((currentTodos) => [...currentTodos, newTodo]);
                this.todoForm.reset({ priority: 'medium' });
                this.todosChange.emit(this.todos());
            }
        }
    }

    deleteTodo(index: number): void {
        this.todos.update((currentTodos) => {
            const newTodos = [...currentTodos];
            newTodos.splice(index, 1);
            return newTodos;
        });
        this.todosChange.emit(this.todos());
    }

    onToggle(index: number): void {
        this.todos.update((currentTodos) => {
            const newTodos = [...currentTodos];
            newTodos[index] = {
                ...newTodos[index],
                completed: !newTodos[index].completed,
            };
            return newTodos;
        });
        this.todosChange.emit(this.todos());
    }
}
