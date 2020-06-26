const inputs = document.querySelectorAll('.controls input');

function handleUpdated() {
  // console.log(this.value);
  const suffix = this.dataset.sizing || '';
  // console.log(suffix);
  // console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener('change', handleUpdated));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdated));
