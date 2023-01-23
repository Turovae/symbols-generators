import Team from './modules/Team';
import Character from './modules/Character';
import renderChatacter from './components/renderChatacter';

const team = new Team(
  new Character('Лучник', 'Bowman'),
  new Character('Маг', 'Magician'),
  new Character('Демон', 'Daemon'),
);

const teamContainer = document.getElementById('team');
for (const character of team) {
  teamContainer.innerHTML += renderChatacter(character);
}
