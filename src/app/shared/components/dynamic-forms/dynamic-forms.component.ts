import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormFieldComponent } from './form-field.component';

export interface FormFieldConfig {
    key: string;
    label: string;
    placeholder: string;
    type?: string;
    validators?: unknown[];
}

export interface FormConfig {
    title: string;
    fields: FormFieldConfig[];
    submitLabel?: string;
}

@Component({
    selector: 'app-dynamic-form',
    imports: [FormFieldComponent, ReactiveFormsModule],
    template: `
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
            <fieldset class="du-fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <legend class="du-fieldset-legend">
                    {{ isEditMode() ? 'Edit ' + config().title : 'New ' + config().title }}
                </legend>

                <div class="space-y-3">
                    @for (field of config().fields; track field.key) {
                        <app-form-field
                            class="m-4"
                            [label]="field.label"
                            [placeholder]="field.placeholder"
                            [type]="field.type || 'text'"
                            [control]="getFormControl(field.key)"
                        />
                    }
                </div>
            </fieldset>

            <button type="submit" class="du-btn du-btn-primary w-full" [disabled]="form.invalid">
                {{ isEditMode() ? 'Save Changes' : config().submitLabel || 'Create' }}
            </button>
        </form>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

/**
 * Dynamic form componets that generates based on @FormConfig models and returns a record of of these created/updated fields (@type Record<string,unknown>)
 * @inputs :
 * - @param config object of the form
 * - @param data
 * @outputs :
 * - @param formSubmit(Record<string,any)
 */
export class DynamicFormsComponent {
    private readonly fb = inject(FormBuilder);

    config = input.required<FormConfig>();

    data = input<Record<string, unknown>>();

    formSubmit = output<Record<string, unknown>>();

    readonly isEditMode = computed(() => !!this.data());

    form!: FormGroup;

    constructor() {
        effect(() => {
            const currentConfig = this.config();
            this.initializeForm(currentConfig);
        });

        effect(() => {
            const data = this.data();
            if (data && this.form) {
                this.form.patchValue(data);
            }
        });
    }

    private initializeForm(config: FormConfig): void {
        const formControls: Record<string, [unknown, unknown[]]> = {};

        formControls['id'] = [0, []];

        for (const field of config.fields) {
            formControls[field.key] = ['', field.validators || []];
        }

        this.form = this.fb.nonNullable.group(formControls);
    }

    getFormControl(fieldKey: string): FormControl {
        return this.form.get(fieldKey) as FormControl;
    }

    onSubmit(): void {
        if (this.form.valid) {
            const formData = this.form.getRawValue();

            if (this.isEditMode()) {
                this.formSubmit.emit(formData);
            } else {
                const { id, ...createData } = formData;
                this.formSubmit.emit(createData);
                this.form.reset();
            }
        }
    }
}
