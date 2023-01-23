const renderCharacter = (character) => `
    <div class="character-container">
      <h3 class="charcter-title">${character.name}</h3>
      <div class="character-features">
        <div class="feature"><span class="feature-title">Тип:</span> ${character.type}</div>
        <div class="feature"><span class="feature-title">Здоровье:</span> ${character.health}</div>
        <div class="feature"><span class="feature-title">Уровень:</span> ${character.level}</div>
        <div class="feature"><span class="feature-title">Атака:</span> ${character.attack}</div>
        <div class="feature"><span class="feature-title">Защита:</span> ${character.defence}</div>
      </div>
    </div>
  `;

export default renderCharacter;
