import '@/styles/main-typography.scss';
import '@/styles/main-variables.scss';

import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import mainStyle from '@/styles/main-home.module.scss';

type propType = {
  font: NextFontWithVariable;
};

//NOTE - Change "MainComponent" as new title
const MainComponent = ({ font }: propType) => {
  const FontVariable = font.variable;
  
  //NOTE - JSX or HTML here
  return (
    <main className={FontVariable}>
      <div className={mainStyle.main}></div>
    </main>
  );
};

export default MainComponent; //NOTE - Change "MainComponent" as new title aslo
