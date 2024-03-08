<template>
  <section>
    <img src="../assets/images/teste.jpeg" />
    <div class="informacoes">
      <div class="informacoes-principais">
        <div class="informacoes-principais-sup">
          <p>Alive</p>
          <span class="dot"></span>
          <p>Human</p>
        </div>
        <h2>Rick Sanchez</h2>
        <p>Male</p>
      </div>
      <p class="localizacao">Earth (C-137)</p>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--neutral-ligth-50);
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
}

img {
  width: 150px;
  height: 150px;
  border-radius: 10px 0 0 10px;
}

.informacoes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  flex: 1;
}

.informacoes-principais {
  display: flex;
  flex-direction: column;
}

.informacoes-principais-sup {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  width: 115px;
}

p {
  color: var(--neutral-ligth-250);
  font-size: 15px;
  font-weight: 500;
}

h2 {
  font-weight: 700;
  color: var(--neutral-ligth-300);
  font-size: 20px;
  margin-bottom: 10px;
}

.localizacao {
  font-size: 12px;
  color: var(--primary-100);
  font-weight: 700;
}

.dot {
  height: 5px;
  width: 5px;
  background-color: var(--neutral-ligth-250);
  border-radius: 50%;
}
</style>
