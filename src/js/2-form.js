const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formState = {
  email: '',
  message: '',
};

restoreFormState();

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
  const { name, value } = event.target;

  if (!(name in formState)) {
    return;
  }

  formState[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function restoreFormState() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (!savedState) {
    return;
  }

  try {
    const parsedState = JSON.parse(savedState);

    formState.email = parsedState.email ?? '';
    formState.message = parsedState.message ?? '';
    form.elements.email.value = formState.email;
    form.elements.message.value = formState.message;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  formState.email = form.elements.email.value.trim();
  formState.message = form.elements.message.value.trim();

  if (!formState.email || !formState.message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formState });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formState.email = '';
  formState.message = '';
}
