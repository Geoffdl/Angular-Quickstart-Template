import { Validators } from '@angular/forms';
import { FormConfig } from './dynamic-forms.component';

/**
 * Validator set-up for tasks fields
 */
export const TASK_FORM_CONFIG: FormConfig = {
    title: 'Task',
    submitLabel: 'Create Task',
    fields: [
        {
            key: 'title',
            label: 'Title',
            placeholder: 'Enter task title',
            validators: [Validators.required, Validators.minLength(3), Validators.maxLength(255)],
        },
        {
            key: 'description',
            label: 'Description',
            placeholder: 'Enter task description',
            validators: [Validators.required, Validators.minLength(3), Validators.maxLength(255)],
        },
        {
            key: 'tag',
            label: 'Tag',
            placeholder: 'Enter task tag',
            validators: [Validators.required, Validators.minLength(1), Validators.maxLength(25)],
        },
    ],
};
/**
 * Validator set-up for lists fields
 */
export const LIST_FORM_CONFIG: FormConfig = {
    title: 'List',
    submitLabel: 'Create List',
    fields: [
        {
            key: 'title',
            label: 'List Name',
            placeholder: 'Enter list name',
            validators: [Validators.required, Validators.minLength(3), Validators.maxLength(255)],
        },
    ],
};
/**
 * Validator set-up for boards fields
 */
export const BOARD_FORM_CONFIG: FormConfig = {
    title: 'Board',
    submitLabel: 'Create Board',
    fields: [
        {
            key: 'title',
            label: 'Board Name',
            placeholder: 'Enter board name',
            validators: [Validators.required, Validators.minLength(3), Validators.maxLength(255)],
        },
    ],
};

export const USER_LOGIN_FORM_CONFIG: FormConfig = {
    title: 'Login',
    submitLabel: '',
    fields: [
        {
            key: 'email',
            label: 'Email',
            placeholder: 'your email',
            validators: [Validators.required, Validators.email],
        },
        {
            key: 'password',
            label: 'Password',
            placeholder: 'your password',
            validators: [Validators.required, Validators.minLength(7)],
        },
    ],
};
export const USER_REGISTRATION_FORM_CONFIG: FormConfig = {
    title: '',
    fields: [
        {
            key: 'Full name',
            label: 'Full name',
            placeholder: 'Your full name',
        },
        //todo
        {
            key: '...//todo',
            label: '',
            placeholder: '',
        },
        {
            key: '',
            label: '',
            placeholder: '',
        },
        {
            key: '',
            label: '',
            placeholder: '',
        },
    ],
};
