const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт стану згідно з ТЗ
const formState = {
  email: '',
  message: '',
};

// Заповнення форми при завантаженні сторінки
populateForm();

// Делегування події input
form.addEventListener('input', onFormInput);

// Обробка сабміту
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const { name, value } = event.target;
  
  // Зберігаємо значення без пробілів по краях
  formState[name] = value.trim();
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function populateForm() {
  const savedState = localStorage.getItem(STORAGE_KEY);
  
  if (savedState) {
    try {
      const parsedData = JSON.parse(savedState);
      
      formState.email = parsedData.email || '';
      formState.message = parsedData.message || '';
      
      form.elements.email.value = formState.email;
      form.elements.message.value = formState.message;
    } catch (error) {
      console.error('Помилка при читанні з localStorage:', error);
    }
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  
  const currentEmail = formState.email.trim();
  const currentMessage = formState.message.trim();
  
  if (!currentEmail || !currentMessage) {
    alert('Fill please all fields');
    return;
  }
  
  console.log('Submitted Form State:', formState);
  
  // Повне очищення після успішного сабміту
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formState.email = '';
  formState.message = '';
}
