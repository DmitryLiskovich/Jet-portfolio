import logo1 from '../../../assests/img/svg/logos/fly-bro-white 1.svg';
import logo2 from '../../../assests/img/svg/logos/Group 23.svg';
import logo3 from '../../../assests/img/svg/logos/Group 27.svg';
import logo4 from '../../../assests/img/svg/logos/Group 94.svg';
import logo5 from '../../../assests/img/svg/logos/Group-1.svg';
import logo6 from '../../../assests/img/svg/logos/Group-2.svg';
import logo7 from '../../../assests/img/svg/logos/Group.svg';
import logo8 from '../../../assests/img/svg/logos/Logo 1 (Traced).svg';
import logo9 from '../../../assests/img/svg/logos/Union-1.svg';
import logo10 from '../../../assests/img/svg/logos/Union-2.svg';
import logo11 from '../../../assests/img/svg/logos/Union-3.svg';
import logo12 from '../../../assests/img/svg/logos/Union-4.svg';
import logo13 from '../../../assests/img/svg/logos/Union-5.svg';
import logo14 from '../../../assests/img/svg/logos/Union.svg';
import logo15 from '../../../assests/img/svg/logos/Vector-1.svg';
import logo16 from '../../../assests/img/svg/logos/Vector.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16];
shuffleArray(logos);
export default logos;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
